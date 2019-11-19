/**
 * forms(Register) => StrongerRegister
 * forms()(Register) => StronggerRegister
 */

import React from 'react';

export default function forms(initialState) {

    return function (FormComponent) {
        return class StrongerFormComponent extends React.Component {
            state = initialState

            handleChange = (event) => {
                this.setState({
                    [event.target.name]: event.target.value
                });
            }

            render() {
                return (
                    <FormComponent
                        {...this.props}
                        handleChange={this.handleChange}
                        values={this.state} />
                )
            }
        }
    }

}