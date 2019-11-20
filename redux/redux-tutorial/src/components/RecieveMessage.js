import React from 'react';
import { connect } from 'react-redux';

const RecieveMessage = (props) => {
    return (
        <h1>{props.myMessage}</h1>
    )
}

export default connect(
    function mapStateToProps(state) {
        return {
            myMessage: state.messaging.message
        }
    }
)(RecieveMessage);