import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
        <div>{props.body}</div>
    </article>
);

export default post;