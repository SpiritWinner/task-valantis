import { useState, useEffect } from 'react';
import { api } from './api';

export const useProducts = (filters, currentPage) => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([]);
  const limit = 50; 

  useEffect(() => {

    const fetchFilteredProducts = async () => {
        const params = {
            action: 'filter',
            params: { 
              ...filters,
            },
        };

        const response = await api.post('/', params);
        const ids = response.data.result.slice(0 , limit); 

        return ids;
    };
  

    const fetchAllProductsIds = async () => {
        const response = await api.post('/', {
          action: 'get_ids',
          params: { limit: limit, offset: currentPage * limit },
        });
        return response.data.result; 
    };

    const fetchProductsDetails = async (ids) => {
        const detailsResponse = await api.post('/', {
          action: 'get_items',
          params: { ids },
        });
        return detailsResponse.data.result;
    };


    const fetchProducts = async () => {
      setIsLoading(true);

        try {
          const isFiltering = Object.values(filters).some((value) => value !== undefined && value !== '');
          const ids = isFiltering ? await fetchFilteredProducts() : await fetchAllProductsIds();
  
          if (ids.length > 0) {
            const productsDetails = await fetchProductsDetails(ids);
            const uniqueProducts = new Map();
            productsDetails.forEach((product) => {
            if (!uniqueProducts.has(product.id)) {
                uniqueProducts.set(product.id, product);
            }
            });
            setProducts([...uniqueProducts.values()]);
          } else {
            setProducts([]);
          }
        } catch (error) {
          console.error('Ошибка при получении данных:', error);
        } finally {
          setIsLoading(false);
        }
    };
  
    fetchProducts();
  }, [currentPage, filters]);

  return { products, currentPage, isLoading};
};