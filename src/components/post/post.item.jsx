import React from 'react';
const photo = ({ item }) => {
    return <div className="col-md-4">
        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">{item.id}</strong>
                <h3 className="mb-0">
                    <a className="text-dark" href="#">Featured post</a>
                </h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">{item.title}</p>
                <a href="#">Continue reading</a>
            </div>
        </div>
    </div>;
}

export default photo;