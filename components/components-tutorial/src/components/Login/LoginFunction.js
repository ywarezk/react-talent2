import React, { createRef, useRef } from 'react';

export default () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = () => {
        console.log(`email: ${emailRef.current.value} password: ${passwordRef.current.value}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={emailRef} type="email" name="email" />
            <input ref={passwordRef} type="password" name="password" />
            <button type="submit">submit</button>
        </form>
    )
}