
import ReactImageMagnify from 'react-image-magnify';
import './Items.css'; 

const ItemsUI = ({ data, categoryData, handleBack, handleChat, onProductClick}) => {
  const { productCategory, productId, productName, productStock, productImage, productPrice, salePrice } = data;
  const discount = ((productPrice - salePrice)/productPrice)*100;
  return (
    <>
    <div className="items">
      <div className="left-container">
        <ReactImageMagnify {...{
          smallImage: {
            alt: productName,
            src: productImage,
            width: 500,
            height: 500
          },
          largeImage: {
            src: productImage,
            width: 800,
            height: 800
          }
        }} />
        </div>
      <div className="right-container">
        <div><h1>{productName}</h1>#{productId}</div>
        <div><h3>{productCategory}</h3></div>
        <div></div>
        <div className="card-detail"><div>MRP:&nbsp;</div><div className="cost-price">{productPrice?.toFixed(2)}</div></div>
        <div className="card-detail"><div>Price:&nbsp; </div><div className="sale-price">{salePrice?.toFixed(2)}</div></div>
        <div className="card-detail"><div>You Save:&nbsp; </div><div className="">{(productPrice - salePrice).toFixed(2)}&nbsp;({discount}%)</div></div>
        {!productStock ? <div className="unavailable">Currently unavailable</div> : null}
        <div className="button_container">
          <button className="add_to_cart">Add to cart</button>
          <button className="buy_now">Buy now</button>
        </div>
          <div className="chat_btn">
            <button onClick={handleChat} >Chat with sellers</button>
            <div onClick={handleBack}> {'<<< Back to products'}</div>
          </div>
      </div>
    </div>
          <div className="footer-container">
        <div className="heading-container">
            <h2>Similar products</h2>
            <a href="http://localhost:3000">View all</a>
          </div>
          <div className="card-cont">
        {
          categoryData.map((item, index) => {
            const { productCategory, productId, productName, productImage, productPrice, salePrice } = item;
            if(index < 6) {
              return (
                <div className="cards">
                  <div key={productId} className="card" onClick={() => onProductClick(item)}>
                    <img src={productImage} alt={productName} height={150} width={190} />
                    <div className="card-details">
                      <div className="card-detail"><div className="details"><strong>{productName} | </strong> {productCategory} #{productId}</div></div>
                      <div className="card-detail"><div>Price:&nbsp;</div> <div className="cost-price">{productPrice.toFixed(2)}</div></div>
                      <div className="card-detail"><div>Grab At:&nbsp;</div> <div className="sale-price">{salePrice.toFixed(2)}</div></div>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          })
        }
        </div>
      </div>
      </>
  );
}

export default ItemsUI;
