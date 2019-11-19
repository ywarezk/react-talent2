/**
 * noop(Component) => StrongerComponent
 * 
 * 
 */

import React from 'react';

export default function noop(WeakComponent) {
    return class StrongerComponent extends React.Component {
        render() {
            return <WeakComponent />
        }
    }
}