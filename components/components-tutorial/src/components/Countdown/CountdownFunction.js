import React, { useState, useEffect } from 'react';



export default (props) => {

    // anti pattern
    const [counter, setCounter] = useState(props.num)
    let newCounter = counter;

    // function stam() {

    // }

    useEffect(() => {
        // counter = 5

        // stam()
        // const num = 

        const intervalId = setInterval(() => {
            let newCounter = counter;
            setCounter(newCounter - 1)
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }

    });

    return (
        <h1>Function: {counter}</h1>
    )
}