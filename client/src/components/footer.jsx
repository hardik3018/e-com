import React from 'react';
import "../styles/footer.css"
export const Footer = () => {

    const year = new Date().getFullYear();

    return (

        <section>
        <div className="foot">

                <h4>Copyright © {year}</h4>

            </div>
        </section>


    );
};
