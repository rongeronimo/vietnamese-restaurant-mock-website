import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <h3>Nhà Hàng</h3>
                            <p>
                                100 Your Street <br />
                                State 1234, AUS
                                <br />
                                <br />
                                <strong>Phone:</strong> +61 1234 5678
                                <br />
                                <strong>Email:</strong> info@example.com
                                <br />
                            </p>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter">
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                                <a href="#" className="facebook">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="#" className="instagram">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="#" className="youtube">
                                    <i className="bi bi-youtube"></i>
                                </a>
                                <a href="#" className="threads">
                                    <i className="bi bi-threads"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Links</h4>
                        <ul>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i>{' '}
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#">Menu</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#">Events</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i>{' '}
                                <a href="#">Gallery</a>
                            </li>
                        </ul>                        
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li>
                                <i className="bx bx-chevron-right"></i>{' '}
                                <a href="#">Deliveries</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i>{' '}
                                <a href="#">Parties</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i> <a href="#">Events</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i>{' '}
                                <a href="#">Private Chef</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right"></i>{' '}
                                <a href="#">Ceremony</a>
                            </li>
                        </ul>         
                    </div>

                    <div className="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>
                            Tamen quem nulla quae legam multos aute sint culpa legam noster
                            magna
                        </p>
                        <form action="" method="post">
                            <input type="email" name="email"/>
                            <input type="submit" value="subscribe"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright{' '}
                <strong>
                    <span>Nhà Hàng</span>
                </strong>
                . All Rights Reserved
            </div>
            <div className="credits">
                Developed by <a href="#">Ron Cedric Geronimo</a>
            </div>
        </div>
    </footer>
  );
}
