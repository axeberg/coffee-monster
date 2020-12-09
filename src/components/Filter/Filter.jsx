import React, {PropTypes} from 'react'
import update from 'immutability-helper';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [
              {title: 'Category 1', value: 'category1', active: false},
              {title: 'Category 2', value: 'category2', active: false},
              {title: 'Category 3', value: 'category3', active: false},
              {title: 'Category 4', value: 'category4', active: false},
              {title: 'Category 5', value: 'category5', active: false}
            ],
            items: this.props.items
        }
    }
    componentWillMount() {
        this.setState({filters: this.state.filters});
    }
    handleClick(filter) {
      let index = this.state.filters.findIndex((f) => { return f.value === filter.value });
      this.setState({
        filters: update(this.state.filters, {[index]: {active: {$set: !filter.active}}})
      });
      filter.active = !filter.active;
      this.props.onClick(filter);
    }
    render() {
        let className = '';
        return (
            <div className="freshBrewsFilter">
                <ul className="FreshBrews-nav">
                  {
                      this.state.filters.map((filter) => {
                          className = filter.active ? 'active' : '';
                          return (
                              <li key={filter.value}>
                                  <button className={className} onClick={() => this.handleClick(filter)} data-filter="*">{filter.title}</button>
                              </li>
                          );
                      })
                  }
                </ul>
            </div>
        )
    }
}

Filter.PropTypes = {
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Filter;
