import React from 'react';
import logo from './logo.svg';
import './App.css';
import SendMessage from './components/SendMessage';
import RecieveMessage from './components/RecieveMessage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <SendMessage />
                <RecieveMessage />
            </Provider>

        </div>
    );
}

export default App;
