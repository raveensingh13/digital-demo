/* import libraries */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

/* import Items Component */
import ItemsComponent from './ItemsComponent';

// defines the container for ItemsComponent
const ItemsContainer = (props) => {
  return <ItemsComponent {...props} />;
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
  }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemsContainer));