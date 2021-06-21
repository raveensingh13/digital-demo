/* import libraries */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

/* import ProductsUI */
import ProductsUI from './ProductsUI';


const ProductsComponent = (props = {})  =>  {
  const { actions: { makeItemsData } } = props;
  const [products, setProducts] = useState([]);
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState(1);
  const [filter, setFilter] = useState(false);
  const [length, setLength] = useState(0);
  const [filterResult, setFilterResult] = useState([]);
  
  const limit = 10;

  /**
   * handles limit of elements 
   * @param {array} value 
   * @returns array with 10 elements
   */
  const handleLimit = (value) => {
    if(value.length <= limit) {
      return value;
    } else {
      const result = [];
      for (let i = current*limit - limit; i < limit; i++) {
        result.push(value[i]);
      }
      return result;
    }
  }

  useEffect(() => {
    const { products: { productsApiState } } = props;
    setProducts(handleLimit(productsApiState.data));
    setList(productsApiState.data);
  }, []);

  /**
   * called out when clicked on filters
   * @param {string} key 
   */
  const handleFilter = (key) => {
    setFilter(true);
    switch(key) {
      case '1': {
        const result = [];
        list.forEach(item => {
          if (item.salePrice < 10000) {
            result.push(item);
          }
        })
        setLength(result.length);
        setFilterResult([...result]);
        console.log(handleLimit([...result]), 'handleLimit([...result])', filter, result);
        setProducts(handleLimit([...result]));
        break;
      }
      case '2': {
        const result = [];
        list.forEach(item => {
          if (item.salePrice >= 10000 && item.salePrice < 20000) {
            result.push(item);
          }
        })
        setLength(result.length);
        setFilterResult([...result]);
        setProducts(handleLimit([...result]));
        break;
      }
      case '3':
        {
          const result = [];
          list.forEach(item => {
            if (item.salePrice >= 20000 && item.salePrice < 40000) {
              result.push(item);
            }
          })
          setLength(result.length);
          setFilterResult([...result]);
          setProducts(handleLimit([...result]));
          break;
        }

      case '4': {
        const result = [];
        list.forEach(item => {
          if (item.salePrice >= 40000 && item.salePrice < 70000) {
            result.push(item);
          }
        })
        setLength(result.length);
        setFilterResult([...result]);
        setProducts(handleLimit([...result]));
        break;
      }

      case '5': {
        const result = [];
        list.forEach(item => {
          if (item.salePrice >= 70000) {
            result.push(item);
          }
        })
        setLength(result.length);
        setFilterResult([...result]);
        setProducts(handleLimit([...result]));
        break;
      }

      case '6': {
        setLength(list.length);
        setFilter(false);
        setProducts([...list]);
        break;
      }

        default:
          break;
    }
  };

  /**
   * called when search is clicked
   * @param {string} value 
   */
  const handleSearch = (value) => {
    const result = [];
    list.forEach(item => {
      if (item.productCategory.toLowerCase() === value.toLowerCase() && !result.includes(item)) {
        result.push(item);
      }
    });
    setFilter(true);
    setFilterResult([...result]);
    setProducts(handleLimit([...result]));
  };

  /**
   * called out when clicked on sort
   * @param {string} key
   */
  const handleSort = (key) => {
    const result = [...list];
    if (key === '1') {
      result.sort((a, b) => {
        var categoryA = a.productCategory.toUpperCase(); // ignore upper and lowercase
        var categoryB = b.productCategory.toUpperCase(); // ignore upper and lowercase
        if (categoryA < categoryB) {
          return -1;
        }
        if (categoryA > categoryB) {
          return 1;
        }
        // categoy must be equal
        return 0; })
    }
    if (key === '2') {
      result.sort((a, b) => {
        var priceA = a.salePrice;// ignore upper and lowercase
        var priceB = b.salePrice; // ignore upper and lowercase
        if (priceA < priceB) {
          return -1;
        }
        if (priceA > priceB) {
          return 1;
        }
        // price must be equal
        return 0;
      })
    }
    setFilterResult([...result]);
    setProducts(handleLimit([...result]));
  };


  /**
   * called out when clicked on filters
   * @param {string} key
   */
  const handlePagination = (value) => {
    setCurrent(value);
    const result = [];
    for (let i = value * limit - limit; i < value*limit; i++) {
      result.push(list[i]);
    }

    setProducts([...result]);
  }

  /**
   * gets more products data when scrolled to the bottom of the page
   */
  const fetchMoreData = () => {
    // a fake async action call like which sends
    // 10 more records in 1.5 secs
    const result = [];
    setTimeout(() => {
      if(filter) {
        for (let i = products.length; i < filterResult.length; i++) {
          result.push(filterResult[i]);
        }
      } else {
        for (let i = products.length; i < products.length + limit; i++) {
            result.push(list[i]);
        }
      }
        const data = [...products, ...result];
        setLength(data.length);
      setProducts([...data]);
    }, 1500);
  };

  /**
   * called when specific product is clicked
   * @param {object} element 
   */
  const onProductClick = (element) => {
    makeItemsData([...list]);
    setTimeout(() => {
      props.history.push({
        pathname: '/product-detail',
        state: { id: element.productId }
      });
    })
  };

  return (
    <ProductsUI 
      data={products} 
      filter={filter} 
      filterResult={filterResult} 
      length={length} 
      onProductClick={onProductClick} 
      fetchMoreData={fetchMoreData} 
      count={filter ? products.length : list.length} 
      current={current} 
      handleSort={handleSort} 
      handleFilter={handleFilter} 
      handleSearch={handleSearch} 
      handlePagination={handlePagination} 
    />
  );
}

ProductsComponent.defaultProps = {
  actions: {},
};

ProductsComponent.propTypes = {
  actions: PropTypes.object,
};

export default ProductsComponent;
