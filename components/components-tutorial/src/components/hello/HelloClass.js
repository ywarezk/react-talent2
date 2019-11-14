
/**
 * react component that displays hello world
 */

 import React from 'react';

 export default class Hello extends React.Component {
    state = {
        isVisible : true
    }

    toggleMessage = () => {
        /*
        this.setState({
            isVisible : !this.state.isVisible
        });*/

        // better in this case
        this.setState(function(prevState) {
            return {
                isVisible : !prevState.isVisible
            }
        })
    }

     render() {
         return (
            <>
                {
                    /* if true then display the h1*/ 
                    this.state.isVisible && <h1>{this.props.msg}</h1>
                }
                {
                    /*// if booleanExpress is false then  dispaly h1
                    booleanExpression || <h1>{this.props.msg}</h1>*/
                }
                {
                    /*booleanExpression ? <h1>...</h1> : <p></p>*/
                }
                <button onClick={this.toggleMessage}>Toggle message</button>
            </>
         )
     }
 }