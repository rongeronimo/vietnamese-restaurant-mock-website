import React from 'react';
import './reviewsItem.css';

export default function ReviewsItem({item,}: {
    item: {
        id: number;
        content: string;
        avatar: string;
        client: string;
        position: string;
    };
}) {
  return (
    <div className="review-item">
        <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            {item.content}
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        <img src={item.avatar} className="review-img" alt=""/>
        <h3>{item.client}</h3>
        <h4>{item.position}</h4>
    </div>
  );
}
