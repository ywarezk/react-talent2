
import React, {useState} from 'react';



export default function Hello({msg}) {
    // [isVisible, setIsVisible]

    // const isVisibleArray = useState(true);
    // const isVisible = isVisibleArray[0];
    // const setIsVisible = isVisibleArray[1];

    const [isVisible, setIsVisible] = useState(true);

    // foo => {message: .., index: 0, stamArray: ...}
    const [foo, setFoo] = useState({
        message: 'hello',
        index: 0,
        stamArray: [1,2,3]
    })

    const toggleMessage = () => {
        setIsVisible(!isVisible);
    }

    const handleFooChange = () => {
        foo.stamArray.push(4);
        setFoo({
            ...foo
        })
    }

    return (
        <div>
            {
                isVisible && <h1>{msg}</h1>
            }
            <button onClick={toggleMessage}>
                click me
            </button>
        </div>
    
    )
}