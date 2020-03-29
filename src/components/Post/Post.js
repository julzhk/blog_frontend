import React from 'react';

import './Post.css';
import {withRouter} from 'react-router-dom';

const post = (props) => (
    <article onClick={() => props.clicked(props.id)}
             className="Post">
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

// pass routing data to children
export default withRouter(post);