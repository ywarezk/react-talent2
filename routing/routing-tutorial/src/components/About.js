import React from 'react';

export default ({ match }) => {
    return (
        <h1>
            Im in the about page  {match.params.hello}
        </h1>
    )
}