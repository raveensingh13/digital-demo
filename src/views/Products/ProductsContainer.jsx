/* import libraries */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

/* import Products Component */
import ProductsComponent from './ProductsComponent';

/* import actions from redux */
import * as productsAction from './Redux/Actions';


// defines the container for ProductsComponent
const ProductsContainer = (props) => {
  const customProps = { ...props };
  return <ProductsComponent {...customProps} />;
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...productsAction,
  }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsContainer));