"use client"
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../library';
import ProductBox from '../../components/ProductBox';

export default function StorePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts();
        setData(products);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-center py-4">Loading...</p>;
  if (error) return <p className="text-center py-4 text-red-500">{error}</p>;
  if (!data || data.length === 0) return <p className="text-center py-4">No products found.</p>;

  return (
    <div className='col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-3'>
      {data.map((d) => (
        <ProductBox product={d} key={"product-" + d.id} />
      ))}
    </div>
  );
}