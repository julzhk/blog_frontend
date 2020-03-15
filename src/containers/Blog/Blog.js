import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import * as axios from "axios";

class Blog extends Component {
    state = {
        posts: []
    }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (response) => {
                console.log(response)
                this.setState({posts: response.data})
            }
        )

    }

    render() {
        const posts = this.state.posts
        return (
            <div>
                <section className="Posts">
                    {posts.map((post)=>{
                        return(<Post
                            key={post.id}
                            title={post.title}
                            body={post.body}
                        />)
                    })}
                    <Post/>
                    <Post/>
                    <Post/>
                </section>
                <section>
                    <FullPost/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;