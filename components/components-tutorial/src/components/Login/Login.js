

import React, { createRef } from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.emailRef = createRef();
        this.passwordRef = createRef();
    }

    handleSubmit = () => {
        console.log(`email: ${this.emailRef.current.value} password: ${this.passwordRef.current.value}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref={this.emailRef} type="email" name="email" />
                <input ref={this.passwordRef} type="password" name="password" />
                <button type="submit">submit</button>
            </form>
        )
    }
}