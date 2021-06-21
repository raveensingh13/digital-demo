/* import libraries */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

/* import ItemsUI */
import ItemsUI from './ItemsUI';


const ItemsComponent = (props = {}) => {
  const { location, products: { productsApiState } } = props;
  const [itemData, setItemData] = useState([]);
  const [itemDataByCategory, setItemDataByCategory] = useState([]);

  useEffect(() => {
    const data = productsApiState.dataById[location.state.id];
    setItemData(data);
    const dataByCateogry = [];
    productsApiState.data.forEach(element => {
      if ((element.productCategory === data.productCategory) && data.productId !== element.productId) {
        dataByCateogry.push(element);
      }
    });
    setItemDataByCategory(dataByCateogry);
  }, [location.state.id]);

  /**
 * called when specific product is clicked
 * @param {object} element
 */
  const onProductClick = (element) => {
    setTimeout(() => {
      props.history.push({
        pathname: '/product-detail',
        state: { id: element.productId }
      });
    })
  };

  /**
   * called when "chat with sellers" button is clicked, it pushes the route to messages
   */
  const handleChat = () => {
    props.history.push({
      pathname: '/messages',
    });
  }

  /**
   * called when "back to products" button is clicked, it pushes the route to messages
   */
  const handleBack = () => {
    props.history.push({
      pathname: '/',
    });
  }


  return (
    <ItemsUI 
      data={itemData}
      categoryData={itemDataByCategory} 
      onProductClick={onProductClick} 
      handleBack={handleBack}
      handleChat={handleChat}
    />
  );
}

ItemsComponent.defaultProps = {
  location: {},
  products: {},
};

ItemsComponent.propTypes = {
  location: PropTypes.object, 
  products: PropTypes.object,
};

export default ItemsComponent;
