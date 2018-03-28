import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchItems } from 'app/actions';
import TableList from 'app/components/TableList';

class App extends Component {

  static propTypes = {
    selected: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  componentDidMount() {
    const { selected, dispatch } = this.props;
    dispatch(fetchItems(selected));
  }

  _handleClick(e) {
    this.props.dispatch(fetchItems(e.target.value));
  }

  render() {
    return (
      <div>
        <button value="users" onClick={ e => this._handleClick(e) }>Users</button>
        <button value="cars" onClick={ e => this._handleClick(e) }>Cars</button>
        <button value="uploads" onClick={ e => this._handleClick(e) }>Uploads</button>
        <TableList items={ this.props.items } />
      </div>
    );
  };
}

const mapStateToProps = state => {
  const { handleSelected, getItems } = state;
  return {
    selected: handleSelected,
    items: getItems.items || []
  }
}

export default connect(mapStateToProps)(App);
