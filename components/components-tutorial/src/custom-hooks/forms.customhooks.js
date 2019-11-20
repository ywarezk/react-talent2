/**
 * useForms(config) => [strong1, strong2 ...]
 * 
 */

 import {useState} from 'react';

 export default function useForms(initialState) {
    const [formState, setFormState] = useState(initialState);

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    return [formState, handleChange];
 }