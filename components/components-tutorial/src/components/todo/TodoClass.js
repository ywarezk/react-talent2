/**
 * when initiating
 * will grab todo list from server
 * display the todo list
 */

 import React from 'react';

export default class Todo extends React.Component {
    state = {
        tasks: [],
        search : ''
    }

    _updateTodoList = async (search = '') => {
        const response = await fetch(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`);
        const todoTasks = await response.json();
        this.setState({
            tasks: todoTasks
        });
    }

    componentDidMount() {
        this._updateTodoList();

        this.intervalId = setInterval(() => {

        }, 1000)
    }

    handleInputChange = (event) => {
        this.setState({
            search: event.target.value
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.search !== this.state.search) {
            this._updateTodoList(this.state.search);
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <>
                <form>
                    <input 
                        value={this.state.search}
                        onChange={this.handleInputChange}
                        type="search" placeholder="search..." />
                    
                </form>
                <ul>
                    {
                        this.state.tasks.map((todoObj) => {
                        return <li key={todoObj.id}>{todoObj.title}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}

 