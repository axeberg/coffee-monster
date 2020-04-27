import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photos }) => {
  return (
    <div>
      {photos && photos.map((photo) => {
        return (
          <div className="FreshBrews-box" key={photo.title}>
            <a href={photo.src}>
              <img src={photo.src} alt="" />
            </a>
            <h3>{photo.title}</h3>
            <p>{photo.category}</p>
          </div>
        );
      })}
    </div>
  );
};

Photo.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photo;
