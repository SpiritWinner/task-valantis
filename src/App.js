import React, { useState } from 'react';

import { useProducts } from './components/useProducts'; 
import ProductList from './components/ProductList';

import './App.scss'

function App() {  
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const { products, isLoading } = useProducts(filters, currentPage);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === "price" && value.trim() !== "") {
      finalValue = Number(value);
      if (isNaN(finalValue)) {
        finalValue = undefined; 
      }
    }

    setFilters({ [name]: finalValue });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="App">
      <h1>Список товаров</h1>

      <div className='search'>
      <input
        name="product"
        placeholder="Название"
        onChange={handleFilterChange}
        value={filters.product || ''}
        className="search__input"
      />
      <input
        name="price"
        placeholder="Цена"
        onChange={handleFilterChange}
        type="number"
        value={filters.price || ''}
        className="search__input"
      />
      <input
        name="brand"
        placeholder="Бренд"
        onChange={handleFilterChange}
        value={filters.brand || ''}
        className="search__input"
      />
    </div>

      <ProductList products={products} isLoading={isLoading}/>

      <div className='pagination'>
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage <= 0}
          className="pagination__button"
        >
          Предыдущая страница
        </button>
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          className="pagination__button"
        >
          Следующая страница
        </button>
      </div>
    </div>
  );
}

export default App;
