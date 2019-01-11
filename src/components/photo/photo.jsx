import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { fetchPhotos } from '../../actions/photo.action';
import PhotoItem from './photo.item';

class Photo extends Component {

    componentWillMount() {
        this.props.fetchPhotos();
    }
    render() {
        const section = (<section className="jumbotron text-center">
            <div className="container">
                <h1 className="jumbotron-heading">Album example</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            </div>
        </section>);
        return (
            <div>
                {section}
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {this.props.photos.map(p => <PhotoItem item={p} key={p.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Photo.propTypes = {
    fetchPhotos: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,

};

const mapStateToProps = state => ({
    photos: state.photos.items,
});

export default connect(mapStateToProps, { fetchPhotos })(Photo);