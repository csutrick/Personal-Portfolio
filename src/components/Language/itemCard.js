import React from "react";

const ItemCard = ({ image, name }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-2 drop-shadow-md">
            <img 
                src={image} alt={name} 
                className="w-20 h-20 lg:w-24 lg:h-24" 
            />
            <h2 className="text-lg font-bold text-center text-[#59A5D8]">
                {name}
            </h2>
        </div>
    );
};

export default ItemCard;
