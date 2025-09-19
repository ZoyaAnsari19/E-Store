import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/home/productbox.module.css'

export default function ProductBox({ product }) {
  return (
    <div className={`${styles.card} bg-white p-4 m-1 rounded-lg`}>
      <Link href={`/store/product-details/${product.id}`}>
        <Image
          width={300}
          height={250}
          src={product.image}
          alt={`product-${product.id}`}
          className={`${styles.productImage} w-full h-64 object-cover rounded-md`}
        />
      </Link>

      <div className="mt-4">
        <h3 className="text-sm min-h-[70px] font-semibold text-gray-800">
          {product.title}
        </h3>
        <p className="text-gray-900 font-semibold mt-2">
          ${product.price}
        </p>
        <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
}