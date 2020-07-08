import React, { useState } from 'react';

import Filter from '../../components/Filter/Filter';
import Photo from '../../components/Photo/Photo';

import './FreshBrews.css';

const defaultPhotos = [
  {
    title: 'Title 1',
    category: 'category1',
    src: 'https://source.unsplash.com/collection/1215/360x270',
  },
  {
    title: 'Title 2',
    category: 'category2',
    src: 'https://source.unsplash.com/collection/189929/360x270',
  },
  {
    title: 'Title 3',
    category: 'category3',
    src: 'https://source.unsplash.com/collection/415854/360x270',
  },
  {
    title: 'Title 4',
    category: 'category4',
    src: 'https://source.unsplash.com/collection/147415/360x270',
  },
  {
    title: 'Title 5',
    category: 'category5',
    src: 'https://source.unsplash.com/collection/166770/360x270',
  },
];

const FreshBrews = () => {
  const [photos, setPhotos] = useState(defaultPhotos);

  const handleClick = (filters) => {
    let filteredPhotos = [...defaultPhotos];

    filteredPhotos = filteredPhotos
      .filter(({ category }) => filters.some(({ value, active }) => value === category && active));

    if (filteredPhotos.length === 0) {
      setPhotos(defaultPhotos);
    } else {
      setPhotos(filteredPhotos);
    }
  };

  return (
    <div>
      <section className="main-section" id="FreshBrews">
        <div className="container">
          <h2>Fresh brews</h2>
          <h6>Fresh coffee pics that will keep you wanting a brew yourself.</h6>
          <Filter onClick={handleClick} />
          <div className="freshBrewsContainer">
            <Photo photos={photos} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreshBrews;
