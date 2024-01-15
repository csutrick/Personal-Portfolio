import React, { useState } from "react";

import SwitchCategories from "./switchCategories";
import LanguageContainer from "./languageContainer";

const Language = () => {
    const [lastClickedButton, setLastClickedButton] = useState('1');

    return (
        <section id="language" className='bg-green-300 w-full flex flex-row flex-nowrap justify-center py-2
        space-x-12'>
            <SwitchCategories 
                setLastClickedButton={setLastClickedButton}
            />
            <LanguageContainer
                lastClickedButton={lastClickedButton}
            />
        </section>
    );
};

export default Language;
