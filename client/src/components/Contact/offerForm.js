import { React, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai'

import { useMutation } from '@apollo/client';
import { ADD_OFFER } from '../../utils/mutations';


const OfferForm = () => {
    const [formState, setFormState] = useState({
        offerText: '',
        offerSender: '',
    });
    const [characterCount, setCharacterCount] = useState(0);
    const [addOffer, { error }] = useMutation(ADD_OFFER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = addOffer({
                variables: { ...formState },
            });
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'offerText' && value.length <= 280) {
            setFormState({ ...formState, [name]: value })
            setCharacterCount(value.length);
        } else if (name !== 'offerText') {
            setFormState({ ...formState, [name]: value })
        }
    };

    return (
        <form onSubmit={handleFormSubmit}
        className='flex flex-col items-center p-1 w-[70%]'>
            <div className='w-full'>
                <label className='text-xs md:text-sm italic text-white pl-2
                '>Personal Name or Company Name</label>
                <input onChange={handleChange} name="offerSender"
                    placeholder="From..."
                    value={formState.offerSender}
                    className='w-full h-[50px] mb-2
                    rounded-lg pl-1 drop-shadow-md hover:drop-shadow-lg active:drop-shadow-lg'
                />
            </div>

            <div className='w-full'>
                <label className='text-xs md:text-sm italic text-white pl-2
                '>Type message below, include your prefered contact</label>
                <textarea onChange={handleChange} name="offerText"
                    placeholder="Message..."
                    value={formState.offerText}
                    className='w-full h-[150px] 
                    rounded-lg p-2 drop-shadow-md hover:drop-shadow-lg active:drop-shadow-lg'
                ></textarea>
                <p className={`text-xs font-light italic pl-2 text-white ${
                    characterCount === 280 || error ? 'text-red-500' : ''
                    }`}>
                    Character Count: {characterCount}/280
                    {error && <span className='text-white'>Something went wrong...</span>}
                </p>
            </div>

            <button type="submit"
                className='flex items-center px-6 py-2 mt-4 text-white
                bg-blue-300 rounded-lg font-bold text-4xl drop-shadow-md hover:drop-shadow-lg
                hover:scale-105 transition-all duration-200 ease-in'>
                Send <AiOutlineSend className='ml-2'/>
            </button>
            {error && (
                <div className=''>
                    Something went wrong...
                </div>
            )}
        </form>
    );
};

export default OfferForm;