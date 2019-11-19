import React from 'react';
import PropTypes from 'prop-types';
import forms from '../../hoc/forms.hoc';

// interface Stam {
//     num? : number
// }

class Login extends React.Component {
    static propTypes = {

    }

    // state = {
    //     email: 'yariv@nerdeez.com',
    //     password: '12345'
    // }

    handleSubmit = () => {
        console.log(`email: ${this.state.email} password: ${this.state.password}`)
    }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.props.values.email}
                    onChange={this.props.handleChange}
                    type="email" name="email" />
                <input
                    value={this.props.values.password}
                    onChange={this.props.handleChange}
                    type="password" name="password" />
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default forms({
    email: 'yariv@nerdeez.com',
    password: '12345'
})(Login)