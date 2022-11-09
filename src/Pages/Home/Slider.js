import { Carousel } from 'flowbite-react';
import React from 'react';

const Slider = () => {
    return (
        <div className='my-3'>
            <div className="h-60 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img
                        src="https://cdn.cook.stbm.it/thumbnails/ricette/142/142550/hd750x421.jpg"
                        alt="..."
                    />
                    <img
                        src="https://www.chefspencil.com/wp-content/uploads/Ecole-de-Cuisine-Alain-Ducasse-960x579.jpg"
                        alt="..."
                        className=''
                    />
                    <img
                        src="https://www.sargento.com/assets/Uploads/Recipe/Image/Alligator-Sandwich_Website__FillWzExNzAsNTgzXQ.jpg"
                        alt="..."
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;