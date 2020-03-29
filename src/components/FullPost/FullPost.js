import React, {Component} from 'react';

import './FullPost.css';
import axios from "axios";

class FullPost extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        if (this.props.id ) {
            if(this.state.data && this.state.data.id !==this.props.id){
            console.log('full')
            console.log(this.props.id)
            axios.get('/posts/' + this.props.id).then(
                (response) => {
                    this.setState({
                        data: response.data
                    })
                })
        }
        }
    }
    deleteDataHandler = () =>{
        console.log('del')
        axios.delete(
            '/posts/' + this.props.id
        ).then((response)=>{
            // alert('deleted')
            console.log(response)
        })
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading!</p>;
        }
        if (this.state.data) {

            post = (
                <div className="FullPost">
                    <h1>{this.state.data.title}</h1>
                    <p>{this.state.data.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteDataHandler}
                                className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;