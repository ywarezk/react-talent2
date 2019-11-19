import React from 'react';
import PropTypes from 'prop-types';
import noop from '../../hoc/noop.hoc';
import forms from '../../hoc/forms.hoc';
import Noop from '../../render-props/noop.renderprops';

class Register extends React.Component {
    // state = {
    //     name: 'Yariv Katz',
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
                {this.props.title}
                <input
                    value={this.props.values.name}
                    onChange={this.props.handleChange}
                    type="text" name="name" />
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
    name: 'Yariv Katz',
    email: 'yariv@nerdeez.com',
    password: '12345'
})(Register)
// export default noop(Register)