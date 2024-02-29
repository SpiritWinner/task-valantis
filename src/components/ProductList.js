import MyLoader from './MyLoader';
import Product from './Product';
import './ProductList.scss';

const ProductList = ({products, isLoading}) => {
  return (
    <>
      {isLoading ? (
        <div className='product-list'>
          {Array.from({ length: 10 }, (_, index) => (
            <MyLoader key={index} />
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className='product-list'>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              product={product.product}
              price={product.price}
              brand={product.brand}
            />
          ))}
        </div>
      ) : (
        <h2>По вашему запросу ничего не найдено.</h2>
      )}
    </>
  );
};

export default ProductList;