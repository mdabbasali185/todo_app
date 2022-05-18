import React from 'react';
import notfound from '../../../Images/404page.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <section className=" mt-5 notFound">
            <div>
                <p className="mb-2 fs-1 bg-danger text-center text-white fst-italic fw-bold">Error 404</p>
                <h1 className="mb-4 fw-bold text-center ">
                    Oops! The page you're looking for isn't here.
                </h1>
                <p className="mb-5 text-center">
                    You might have the wrong address, or the page may have moved.
                </p>

            </div>
            <div>
                <img className='img-fluid mx-auto d-block py-5 ' src={notfound} alt="" />
            </div>
        </section>
    );
};

export default NotFound;