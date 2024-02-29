import MyLoader from './MyLoader';
import Product from './Product';
import './ProductList.scss';

const ProductList = ({product, isLoading}) => {
  return (
    <>
    { isLoading ? (
      <MyLoader/>
    ) : (
      <div className='product-list'>
        {product.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            product={product.product}
            price={product.price}
            brand={product.brand}
          />
        ))}
      </div>
    )}
    </>
  );
};

export default ProductList;