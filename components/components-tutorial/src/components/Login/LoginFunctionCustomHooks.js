import React, { useState } from 'react';
import useForms from '../../custom-hooks/forms.customhooks';

export default () => {

    const [formState, handleChange] = useForms({
        email: 'yariv@nerdeez.com',
        password: '12345'
    })

    // const [formState, setFormState] = useState({
    //     email: 'yariv@nerdeez.com',
    //     password: '12345'
    // })

    const handleSubmit = () => {
        console.log(`email: ${emailRef.current.value} password: ${passwordRef.current.value}`)
    }

    // const handleChange = (event) => {
    //     setFormState({
    //         // email: ..,
    //         // password: ...
    //         ...formState,
    //         [event.target.name]: event.target.value
    //     })
    // }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={formState.email}
                onChange={handleChange}
                type="email" name="email" />
            <input
                onChange={handleChange}
                value={formState.password}
                ref={passwordRef} type="password" name="password" />
            <button type="submit">submit</button>
        </form>
    )
}