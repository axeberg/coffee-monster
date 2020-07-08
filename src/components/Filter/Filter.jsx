import React, { useState } from 'react';
import PropTypes from 'prop-types';

const defaultFilters = [
  { title: 'Category 1', value: 'category1', active: false },
  { title: 'Category 2', value: 'category2', active: false },
  { title: 'Category 3', value: 'category3', active: false },
  { title: 'Category 4', value: 'category4', active: false },
  { title: 'Category 5', value: 'category5', active: false },
];

const Filter = ({ onClick }) => {
  const [filters, setFilters] = useState(defaultFilters);

  const handleClick = (clickedFilter) => {
    const index = filters.findIndex((f) => f.value === clickedFilter.value);

    const updatedFilters = [...filters];
    const filter = updatedFilters[index];

    updatedFilters[index] = {
      ...filter,
      active: !filter.active,
    };

    setFilters(updatedFilters);

    onClick(updatedFilters, filter, filter.active);
  };

  let className = '';

  return (
    <div className="freshBrewsFilter">
      <ul className="FreshBrews-nav">
        {filters
          && filters.length > 0
          && filters.map((filter) => {
            className = filter.active ? 'active' : '';
            return (
              <li key={filter.value}>
                <button
                  type="button"
                  className={className}
                  onClick={() => handleClick(filter)}
                  data-filter="*"
                >
                  {filter.title}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

Filter.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Filter;
