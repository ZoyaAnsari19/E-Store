import React from 'react';
import Container from '@/components/Container';
import { getCategories } from '../../library';
import "../globals.css";

export default function StoreLayout({ children }) {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_4fr] gap-6 py-4">
      <CategoryListing />
      {children}
    </Container>
  );
}

const CategoryListing = async () => {
  const data = await getCategories();
  return (
    <div className='text-gray-700'>
      <div className='text-xl my-3 text-center'>Categories</div>
      <ul>
        {data.map((d, i) => (
          <li className='p-2 border my-2' key={"category-" + i}>{d.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
};