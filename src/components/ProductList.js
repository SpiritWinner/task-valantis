import MyLoader from './MyLoader';
import Product from './Product';
import './ProductList.scss';

const ProductList = ({products, isLoading}) => {
  return (
    <>
      {isLoading ? (
        <MyLoader />
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