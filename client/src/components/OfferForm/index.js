import React, { useState } from 'react';
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
        <div>
            <h3>Enter thing</h3>
            <p className={`m-0 ${
                characterCount === 280 || error ? 'text-red-500' : ''
            }`}>
                Character Count: {characterCount}/280
                {error && <span className='text-black'>Something went wrong...</span>}
            </p>
            <form
                className=''
                onSubmit={handleFormSubmit}
            >
                <div className=''>
                    <textarea
                        name="offerText"
                        placeholder="Whats your message..."
                        value={formState.offerText}
                        className=''
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className=''>
                    <input
                        name="offerSender"
                        placeholder="Add your name or company here"
                        value={formState.offerSender}
                        className=''
                        onChange={handleChange}
                    />
                </div>
                <div className=''>
                    <button type="submit"
                        className='bg-blue-400 px-2 my-2'>
                        Send
                    </button>
                    {error && (
                        <div className=''>
                            Something went wrong...
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default OfferForm;