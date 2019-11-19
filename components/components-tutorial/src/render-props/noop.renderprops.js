/**
 * <Noop render={() => {return (<h1>....)}} />
 * <Noop>
 * {
 *  () => ...
 * }
 * </Noop>
 * 
 * 
 */

import React from 'react';

export default class Noop extends React.Component {
    render() {
        return this.props.render();
    }
}