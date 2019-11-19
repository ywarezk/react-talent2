/**
 * <Forms>
 * {
 *  () => 
 * }
 * </Form>
 */

import React from 'react';

export default class Forms extends React.Component {
    constructor(props) {
        super(props)

        // anti pattern
        this.state = props.initialState;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return this.props.children(this.handleChange, this.state);
    }
}