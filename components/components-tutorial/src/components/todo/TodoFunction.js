/**
 * grab the todo list from the server
 * display the todo list
 * display search
 */

import React, {useState, useEffect} from 'react';

export default () => {
    const [tasks, setTasks] = useState([]);
    const [search, setSearch] = useState('');

    // componentDidMount / componentDidUpdate + componentWillUnmount
    useEffect(function() {
        // (async function() {
        //     const response = await fetch(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`);
        //     const todoTasks = await response.json();
        //     this.setState({
        //         tasks: todoTasks
        //     });
        // })()

        fetch(`https://nztodo.herokuapp.com/api/task/?format=json&search=${search}`)
            .then((response) => response.json())
            .then((todoTasks) => {
                setTasks(todoTasks);
            });                
    }, [search]);

    // componentDidMount
    useEffect(() => {
        const intervalId = setInterval(() => {

        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <>
            <form>
                <input 
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    type="search" placeholder="search..." />
                
            </form>
            <ul>
                {
                    tasks.map((todoObj) => {
                    return <li key={todoObj.id}>{todoObj.title}</li>
                    })
                }
            </ul>
        </>
        
    )
}