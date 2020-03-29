import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import * as axios from "axios";
import {Route} from 'react-router-dom'

class Blog extends Component {
    state = {
        posts: [],
        highlightPostId:null
    }


    componentDidMount() {

        axios.get('/posts').then(
            (response) => {
                const posts = response.data.slice(0,4)
                const updatedPosts = posts.map((post)=>{
                    return{
                        ...post,
                        author:'self'
                    }
                })
                this.setState({posts: updatedPosts})
            }
        )

    }
    articleClicked = (id) =>{
        console.log(id)
        console.log('dsi')
        this.setState({highlightPostId:id})
    }
    render() {
        const posts = this.state.posts
        return (
            <div className='Blog'>
                <header>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/new-post'>New Post</a>
                        </li>
                    </ul>
                </header>
                <Route path='/' exact render={()=>{
                    return (
                        <section className="Posts">
                    {posts.map((post) => {
                        return (<Post
                            clicked={this.articleClicked}
                            id={post.id}
                            key={post.id}
                            title={post.title}
                            body={post.body}
                            author={post.author}
                        />)
                    })}
                </section>
                    )
                }} />
                <Route path='/new-post' exact  component={NewPost} />

                <section>
                    <FullPost
                        id={this.state.highlightPostId}
                    />
                </section>
                <section>

                </section>
            </div>
        );
    }
}

export default Blog;