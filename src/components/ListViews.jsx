import React from 'react';

function CardsView(props) {
  const { products } = props;

  return (
    <div className="content-container">
      {products.map((product, index) => (
        <ShopCard key = {index} cardData={product} />
      ))}
    </div>
  );
}

function ShopCard(props) {
  const { cardData } = props;

  return (
    <div className="product-card">
      <img className='img-grid' src={cardData.img} alt={cardData.name}/>
      <div className="product-info">
      <p className='name-font'>{cardData.name}</p>
      <p>{cardData.color}</p>
      <p className='color-price'>${cardData.price}</p>
      {/* <span class="material-icons-shop">add_shopping_cart</span> */}
    </div>
    </div>
  );
}

export default CardsView;

