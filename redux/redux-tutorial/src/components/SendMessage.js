import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { setMessage } from '../redux/actions/messaging.actions';

const SendMessage = (props) => {

    // send the message to RecieveMessage
    const handleSubmit = (values) => {
        console.log(values.message);
        props.myAction(values.message);
    }

    return (
        <Formik
            initialValues={{ message: 'initial message' }}
            onSubmit={handleSubmit}
        >
            <Form>
                <label>Send Message</label>
                <Field type="text" name="message" />
                <button type="submit">send message</button>
            </Form>
        </Formik>
    )
}

export default connect(
    null,
    // (newMessage) => store.dispatch(setMessage(newMessage)) 
    {
        myAction: setMessage,

    }
)(SendMessage);