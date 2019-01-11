import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { fetchPosts, delPost } from '../../actions/post.action';
import PostItem from './post.item';

class Post extends Component {

    componentWillMount() {
        if (this.props.posts.length === 0) {
            this.props.fetchPosts();
        }
    }
    render() {
        const post = this.props.posts.map(post => (
            <PostItem item={post} key={post.id}/>
        ));
        return (
            <div>
                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div className="container">
                        <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                        <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
                    </div>
                </div>
                <div className="container album py-5 bg-light">
                    <button className="btn btn-primary" onClick={this.props.fetchPosts}>Reload</button>
                    <div className="row">
                        {post}
                    </div>
                </div>
            </div>
        );
    }
}

Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    delPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,

};

const mapStateToProps = state => ({
    posts: state.posts.items,
});
 
export default connect(mapStateToProps, {fetchPosts, delPost})(Post);