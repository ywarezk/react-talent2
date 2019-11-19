import React from 'react';
// import PropTypes from 'prop-types';
// import noop from '../../hoc/noop.hoc';
// import forms from '../../hoc/forms.hoc';
import Forms from '../../render-props/forms.renderprops';

export default class RegisterNoopRenderProp extends React.Component {
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
            <Forms initialState={{
                name: 'Yariv Katz',
                email: 'yariv@nerdeez.com',
                password: '12345'
            }} >
                {
                    (handleChange, values) => {
                        return (
                            <form onSubmit={this.handleSubmit}>
                                {this.props.title}
                                <input
                                    value={values.name}
                                    onChange={handleChange}
                                    type="text" name="name" />
                                <input
                                    value={values.email}
                                    onChange={handleChange}
                                    type="email" name="email" />
                                <input
                                    value={values.password}
                                    onChange={handleChange}
                                    type="password" name="password" />
                                <button type="submit">submit</button>
                            </form>
                        )
                    }
                }
            </Forms>
        )


    }
}

// export default forms({
//     name: 'Yariv Katz',
//     email: 'yariv@nerdeez.com',
//     password: '12345'
// })(Register)
// export default noop(Register)