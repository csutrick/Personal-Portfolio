import React from "react";

const LanguageContainer = ({ lastClickedButton }) => {
    const renderContentBasedOnButton = () => {
        switch (lastClickedButton) {
            case '1':
                return <div>Content for Button 1</div>;
            case '2':
                return <div>Content for Button 2</div>;
            case '3':
                return <div>Content for Button 3</div>;
            case '4':
                return <div>Content for Button 4</div>;
            case '5':
                return <div>Content for Button 5</div>;
        }
    };

    return (
        <div className='bg-blue-300 w-fit h-auto flex items-center rounded-xl px-2'>
            {renderContentBasedOnButton()}
        </div>
    );
};

export default LanguageContainer;
