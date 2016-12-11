import React from 'react';
import update from 'immutability-helper';

import Filter from '../../components/Filter/Filter';
import Photo from '../../components/Photo/Photo';

import './FreshBrews.css';

class FreshBrews extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        photos: [
          {title: 'Title 1', category: 'category1', src: 'https://source.unsplash.com/collection/1215/360x270'},
          {title: 'Title 2', category: 'category2', src: 'https://source.unsplash.com/collection/189929/360x270'},
          {title: 'Title 3', category: 'category3', src: 'https://source.unsplash.com/collection/415854/360x270'},
          {title: 'Title 4', category: 'category4', src: 'https://source.unsplash.com/collection/147415/360x270'},
          {title: 'Title 5', category: 'category5', src: 'https://source.unsplash.com/collection/166770/360x270'}
        ],
        activeFilters: []
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick (filter) {
      if (filter.active) {
        this.setState({
          activeFilters: update(this.state.activeFilters, {$push: [filter]})
        });
      } else {
        let index = this.state.activeFilters.findIndex((f) => f.value === filter.value);
        this.setState({
          activeFilters: update(this.state.activeFilters, {$splice: [[index, 1]]})
        });
      }
    }
    render() {
        return (
            <div>
                <section className="main-section" id="FreshBrews">
                    <div className="container">
                        <h2>Fresh brews</h2>
                        <h6>Fresh coffee pics that will keep you wanting a brew yourself.</h6>
                        <Filter onClick={this.handleClick} />
                        <div className="freshBrewsContainer">
                            <Photo photos={this.state.photos} filters={this.state.activeFilters} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default FreshBrews;
