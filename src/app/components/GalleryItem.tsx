import React, {useEffect} from 'react';
import './galleryItem.css';
import Image from 'next/image';


export default function GalleryItem({item,} : {
    item: {
        id: number;
        image: string;
    };
}) {
    useEffect(() => {
        const initLightbox = async () => {
            const { default: GLightbox } = await import('glightbox');

            const lightbox = GLightbox({
                selector: '.gallery-lightbox',
            });

            return lightbox;
        };

        let lightbox: Awaited<ReturnType<typeof initLightbox>>;

        initLightbox().then((instance) => {
            lightbox = instance;
        });

        return () => {
            lightbox?.destroy();
        };
    }, []);
  return (
    <div className="col-lg-3 col-md-4">
        <div className="gallery-item">
            <a
                href={item.image}
                className="gallery-lightbox"
                data-gall="gallery-item"
            >
                <Image 
                    width={600}
                    height={400}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    src={item.image}
                    alt=""
                    className="img-fluid"
                />
            </a>
        </div>
    </div>
  );
}
