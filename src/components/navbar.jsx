import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Navbar extends Component {
    state = {  }
    render() { 
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
				<div className="container">
					<a className="navbar-brand" href="#a">Navbar</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to="/" className="nav-link">Home</Link>
							</li>
							<li className="nav-item">
								<Link to="/todo" className="nav-link">Todo</Link>
							</li>
							<li className="nav-item">
								<Link to="/login" className="nav-link">Login</Link>
							</li>
							<li className="nav-item">
								<Link to="/app" className="nav-link">App</Link>
							</li>
							<li className="nav-item">
								<Link to="/post" className="nav-link">Post({this.props.posts.length})</Link>
							</li>
							<li className="nav-item">
								<Link to="/photo" className="nav-link">Photo({this.props.photos.length})</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
    }
}

const mapStateToProps = state => ({
	posts: state.posts.items,
	photos: state.photos.items,
});
 
export default connect(mapStateToProps, {})(Navbar);