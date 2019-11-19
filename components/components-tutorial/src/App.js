import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello/HelloFunction';
import HelloClass from './components/hello/HelloClass';
import TodoClass from './components/todo/TodoClass';
import Countdown from './components/Countdown/CountdownClass';
import CountdownFunction from './components/Countdown/CountdownFunction';
import Register from './components/Register/Register';
import RegisterRenderProps from './components/Register/RegisterRenderProps';
// import Co

// React.createElement(Hello)

function App() {
    const [isCountdownVisible, setIsCountdownVisible] = useState(true);

    return (
        <div className="App">
            <Hello msg={'hello from parent'} />

            <HelloClass msg="hello2 from parent" />

            {/* <TodoClass /> */}

            {
                isCountdownVisible && <Countdown num={5} cb={setIsCountdownVisible} />
            }

            {/* <CountdownFunction num={5} /> */}

            <Register title="Register Form" />

            <RegisterRenderProps />
        </div>
    );
}

export default App;
