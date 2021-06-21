import { Pagination } from 'antd';
import Filter from '../../components/Filter';
import Sort from '../../components/Sort';
import SearchBox from '../../components/Search';
import InfiniteScroll from "react-infinite-scroll-component";
import './Products.css'; 


const ProductsUI = ({ data = [], filterResult, count, filter, current, handleSort, handleFilter, onProductClick, handleSearch, fetchMoreData, handlePagination }) => {
  console.log(filter);
  return (
    <div className="products">
      <div className="filter-container">
        <SearchBox onSearch={handleSearch} />
        <div className="filter-sort">
          <Filter filterBy={handleFilter} />
          <Sort sortBy={handleSort} /></div>
        </div>
      <Pagination simple current={current} total={count} onChange={handlePagination} />
    <div>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={(filter ? data.length < filterResult.length : data.length < 100 ) && current < 2}
          loader={<h4>Loading...</h4>}
          className="App"
          
         >
      {
        data.map(item => {
          const { productCategory, productId, productName, productImage, productPrice, salePrice } = item;
          return (
            <div key={productId} className="card" onClick={() => onProductClick(item)}>
              <img src={productImage} alt={productName} height={150} width={200} />
              <div className="card-details">
                <div className="card-detail"><div className="details"><strong>{productName} | </strong> {productCategory} #{productId}</div></div>
                <div className="card-detail"><div>Price:&nbsp;</div> <div className="cost-price">{productPrice.toFixed(2)}</div></div>
                <div className="card-detail"><div>Grab At:&nbsp;</div> <div className="sale-price">{salePrice.toFixed(2)}</div></div>
              </div>
            </div>
          )
        })
      }
      </InfiniteScroll>
    </div>
    </div>
  );
}

export default ProductsUI;
