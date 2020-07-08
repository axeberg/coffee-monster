import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ photos }) => (
  <div>
    {photos && photos.map((photo) => (
      <div className="FreshBrews-box" key={photo.title}>
        <a href={photo.src}>
          <img src={photo.src} alt="" />
        </a>
        <h3>{photo.title}</h3>
        <p>{photo.category}</p>
      </div>
    ))}
  </div>
);

Photo.propTypes = {
  photos: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Photo;
