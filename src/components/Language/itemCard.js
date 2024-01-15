import React from "react";

const ItemCard = ({ image, name }) => {
    return (
        <div className="w-1/3 flex flex-col items-center justify-center mt-2">
            <img 
                src={image} alt={name} 
                className="w-24 h-24" 
            />
            <h2 className="text-lg font-bold text-center text-white">
                {name}
            </h2>
        </div>
    );
};

export default ItemCard;
