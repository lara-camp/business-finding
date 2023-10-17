import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const SplideCurosel = ({images}) => {
    return (
        <div> {
            images ?
            <Splide aria-label="My Favorite Images">
                {
                    images.map(item => (
                        <SplideSlide key={item.id}>
                            <img src={item.path} alt="Image 1" className="w-full" />
                        </SplideSlide>
                    ))
                }
            </Splide> : <p className="text-red-700 text-center mt-10"> No show case images.</p>
            }
        </div>
    );
};

export default SplideCurosel;
