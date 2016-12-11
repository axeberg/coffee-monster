import React from 'react'
import update from 'immutability-helper';

class Photo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: this.props.photos,
            filters: this.props.filters
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.filters !== this.state.filters) {
            if (nextProps.filters.length > 0) {
                this.setState({
                    filters: update(this.state.filters, {$set: nextProps.filters})
                });

                let photos = nextProps.filters.map((filter) => {
                    return nextProps.photos.filter((photo) => {
                        return filter.value === photo.category
                    })[0]
                });

                let uniquePhotos = [...new Set(photos)];

                if (uniquePhotos) {
                    this.setState({
                        photos: update(this.state.photos, {$set: uniquePhotos})
                    });
                }
            } else {
              this.setState({
                  photos: update(this.state.photos, {$set: this.props.photos})
              });
            }
        }
    }

    render() {
        return (
            <div>
                {
                  this.state.photos.map((photo) => {
                    return (
                        <div className="FreshBrews-box" key={photo.title}>
                            <a href="#"><img src={photo.src} alt=""/></a >
                            <h3>{photo.title}</h3>
                            <p>{photo.category}</p>
                        </div>
                    )
                  })
                }
            </div>
        );
    }
}

Photo.PropTypes = {
    photos: React.PropTypes.array.isRequired,
    filters: React.PropTypes.array.isRequired
};

export default Photo;
