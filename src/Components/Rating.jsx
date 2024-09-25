import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Rating({ byrating, onClick }) {
    return (
        <div className='flex'>
            {
                [...Array(5)].map((_, index) =>
                    <span
                        key={index}
                        onClick={() => onClick(index + 1)}
                    >
                        {byrating > index ? (
                            <AiFillStar fontSize="15px" />
                        ) : (
                            <AiOutlineStar fontSize="15px" />
                        )}
                    </span>
                )
            }
        </div>
    );
}

export default Rating;
