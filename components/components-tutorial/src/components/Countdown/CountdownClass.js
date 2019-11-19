import React from 'react';


// <Countdown num={5} cb={ ()=> ...} />
export default class Countdown extends React.Component {

    // state = {
    //     counter: 0
    // }

    constructor(props) {
        super(props);

        // anti pattern
        // init state from props like this
        this.state = {
            counter: props.num
        }
    } 

    componentDidMount() {

        this.intervalId = setInterval(() => {

            this.setState((prevState) => {
                return {
                    counter: prevState.counter - 1
                }
            })

        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.counter === 0) {
            this.props.cb(false)
        }

        if (prevProps.num !== this.props.num) {
            this.setState({
                counter: this.props.num
            })
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <h1>{this.state.counter}</h1>
        )
    }
}