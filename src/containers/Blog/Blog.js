import React, {Component} from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import * as axios from "axios";
import {NavLink, Route} from 'react-router-dom'

class Blog extends Component {
    state = {
        posts: [],
        highlightPostId: null
    }


    componentDidMount() {

        axios.get('/posts').then(
            (response) => {
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: 'self'
                    }
                })
                this.setState({posts: updatedPosts})
            }
        )

    }

    articleClicked = (id) => {
        console.log(id)
        console.log('article clicked')
        this.setState({highlightPostId: id})
    }

    render() {
        const posts = this.state.posts
        return (
            <div className='Blog'>
                <header>
                    <ul>
                        <li>
                            <NavLink exact
                                     activeClassName="homeclass"
                                     to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeStyle={{
                                    color: 'black',
                                    backgroundColor: 'red'
                                }}
                                to={{
                                    pathname: '/new-post',
                                    hash: '#commit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                        </li>
                    </ul>
                </header>
                <Route path='/' exact render={() => {
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
                }}/>
                <Route path='/new-post' exact component={NewPost}/>

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