import React from "react";

const SwitchCategories = ({ setLastClickedButton }) => {
    const handleButtonClick = (buttonValue) => {
        setLastClickedButton(buttonValue);
    };

    return (
        <div className="w-min flex flex-col rounded-xl">
            <button onClick={() => handleButtonClick('1')}
            className="px-4 py-2 bg-[#84D2F6] hover:bg-[#59A5D8]
            rounded-t-xl text-3xl whitespace-nowrap font-bold text-white tracking-wider
            border-b-2 border-white">
                Front-end
            </button>
            <button onClick={() => handleButtonClick('2')}
            className="px-4 py-2 bg-[#84D2F6] hover:bg-[#59A5D8]
            text-3xl whitespace-nowrap font-bold text-white tracking-wider
            border-b-2 border-white">
                Back-end
            </button>
            <button onClick={() => handleButtonClick('3')}
            className="px-4 py-2 bg-[#84D2F6] hover:bg-[#59A5D8]
            text-3xl whitespace-nowrap font-bold text-white tracking-wider
            border-b-2 border-white">
                Databases
            </button>
            <button onClick={() => handleButtonClick('4')}
            className="px-4 py-2 bg-[#84D2F6] hover:bg-[#59A5D8]
            text-3xl whitespace-nowrap font-bold text-white tracking-wider
            border-b-2 border-white">
                Full Stack
            </button>
            <button onClick={() => handleButtonClick('5')}
            className="px-4 py-2 bg-[#84D2F6] hover:bg-[#59A5D8]
            rounded-b-xl text-3xl whitespace-nowrap font-bold text-white tracking-wider">
                Other
            </button>
        </div>
    );
};

export default SwitchCategories;
