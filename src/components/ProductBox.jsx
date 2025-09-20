import React from 'react';

const styles = `
  /* Container and layout */
  .featured-section {
    padding: 3rem 1rem 4rem;
    background: linear-gradient(to bottom, #f9fafb, #ffffff);
    min-height: 100vh;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Header */
  .header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.125rem;
    line-height: 1.6;
    color: #4b5563;
  }

  /* Grid layout */
  .products-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }

  @media (min-width: 640px) {
    .products-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  @media (min-width: 1024px) {
    .products-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 1.25rem;
    }
  }

  @media (min-width: 1280px) {
    .products-grid {
      grid-template-columns: repeat(5, 1fr);
      gap: 1.5rem;
    }
  }

  @media (min-width: 1536px) {
    .products-grid {
      grid-template-columns: repeat(6, 1fr);
      gap: 1.5rem;
    }
  }

  /* Card */
  .product-card {
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.1), 0 1px 2px rgb(0 0 0 / 0.06);
    border: 1px solid #f3f4f6;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: box-shadow 0.5s ease, transform 0.5s ease;
    cursor: pointer;
  }

  .product-card:hover {
    box-shadow: 0 10px 15px rgb(0 0 0 / 0.2), 0 4px 6px rgb(0 0 0 / 0.1);
    transform: translateY(-8px);
    z-index: 10;
    position: relative;
  }

  /* Image container */
  .product-image-container {
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }

  .product-image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease-out;
  }

  .product-card:hover .product-image-container img {
    transform: scale(1.1);
  }

  /* Background color variants */
  .yellow-bg { background-color: #fbbf24; }
  .gray-bg { background-color: #e5e7eb; }
  .green-bg { background-color: #bbf7d0; }
  .blue-bg { background-color: #bfdbfe; }
  .purple-bg { background-color: #c4b5fd; }
  .indigo-bg { background-color: #a5b4fc; }
  .orange-bg { background-color: #fed7aa; }
  .teal-bg { background-color: #99f6e4; }
  .red-bg { background-color: #fecaca; }
  .cyan-bg { background-color: #a5f3fc; }
  .lime-bg { background-color: #d9f99d; }
  .pink-bg { background-color: #fbcfe8; }
  .violet-bg { background-color: #e0d7fd; }
  .emerald-bg { background-color: #bbf7d0; }
  .amber-bg { background-color: #fde68a; }
  .rose-bg { background-color: #fecdd3; }
  .slate-bg { background-color: #cbd5e1; }
  .fuchsia-bg { background-color: #f0abfc; }
  .sky-bg { background-color: #bae6fd; }
  .stone-bg { background-color: #e7e5e4; }
  .zinc-bg { background-color: #e4e4e7; }
  .neutral-bg { background-color: #f5f5f5; }
  .orange-300-bg { background-color: #fdba74; }
  .teal-300-bg { background-color: #5eead4; }
  .purple-200-bg { background-color: #c4b5fd; }

  /* Overlay on hover */
  .hover-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.5s ease;
    border-radius: 0.75rem 0.75rem 0 0;
  }

  .product-card:hover .hover-overlay {
    background-color: rgba(0, 0, 0, 0.1);
  }

  /* Quick View button overlay */
  .quick-view {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .product-card:hover .quick-view {
    opacity: 1;
    pointer-events: auto;
  }

  .quick-view-btn {
    background-color: rgba(255, 255, 255, 0.9);
    color: #1f2937;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 0.875rem;
    box-shadow: 0 10px 15px rgb(0 0 0 / 0.1);
    transition: background-color 0.3s ease, transform 0.3s ease;
    transform: scale(0.9);
    border: none;
    cursor: pointer;
  }

  .quick-view-btn:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1);
  }

  /* Product details */
  .product-details {
    padding: 0.75rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .product-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.5rem;
    line-height: 1.25;
    min-height: 2rem;
    flex-grow: 1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  /* Price and rating container */
  .price-and-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .product-price {
    font-size: 1.125rem;
    font-weight: 700;
    color: #10b981;
  }

  /* Star icons */
  .product-rating {
    display: flex;
    gap: 0.125rem;
  }

  .star-icon {
    width: 1rem;
    height: 1rem;
    fill: #fbbf24;
    flex-shrink: 0;
  }

  /* Add to cart button */
  .add-to-cart-btn {
    background: linear-gradient(90deg, #2563eb, #1d4ed8);
    color: white;
    font-weight: 600;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 6px rgb(37 99 235 / 0.5);
    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  }

  .add-to-cart-btn:hover {
    background: linear-gradient(90deg, #1d4ed8, #1e40af);
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgb(29 78 216 / 0.7);
  }

  .add-to-cart-btn:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  .add-to-cart-btn:active {
    transform: scale(1);
  }
`;

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "yellow-bg"
    },
    {
      id: 2,
      title: "Smart Fitness Tracker",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "gray-bg"
    },
    {
      id: 3,
      title: "Eco-Friendly Water Bottle",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "green-bg"
    },
    {
      id: 4,
      title: "Wireless Charging Pad",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "blue-bg"
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "purple-bg"
    },
    {
      id: 6,
      title: "Smart Watch Series X",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "indigo-bg"
    },
    {
      id: 7,
      title: "Adjustable Laptop Stand",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "orange-bg"
    },
    {
      id: 8,
      title: "Multi-Port USB-C Hub",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "teal-bg"
    },
    {
      id: 9,
      title: "Ergonomic Wireless Mouse",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "red-bg"
    },
    {
      id: 10,
      title: "Premium Smartphone Case",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "cyan-bg"
    },
    {
      id: 11,
      title: "Fast Charging Power Bank",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "lime-bg"
    },
    {
      id: 12,
      title: "RGB Gaming Keyboard",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "pink-bg"
    },
    {
      id: 13,
      title: "4K Webcam Pro",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "violet-bg"
    },
    {
      id: 14,
      title: "Mechanical Gaming Mouse",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "emerald-bg"
    },
    {
      id: 15,
      title: "Smart Home Speaker",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "amber-bg"
    },
    {
      id: 16,
      title: "Wireless Earbuds Pro",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "rose-bg"
    },
    {
      id: 17,
      title: "Portable SSD Drive",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "slate-bg"
    },
    {
      id: 18,
      title: "Smart Ring Fitness Tracker",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "fuchsia-bg"
    },
    {
      id: 19,
      title: "Desk Organizer with Charging",
      price: 54.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "sky-bg"
    },
    {
      id: 20,
      title: "LED Monitor Light Bar",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "stone-bg"
    },
    {
      id: 21,
      title: "Wireless Phone Charger Stand",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "zinc-bg"
    },
    {
      id: 22,
      title: "Smart Security Camera",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "neutral-bg"
    },
    {
      id: 23,
      title: "Portable Bluetooth Projector",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1478720568477-b0ed2e5c9515?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "orange-300-bg"
    },
    {
      id: 24,
      title: "Smart Temperature Mug",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "teal-300-bg"
    },
    {
      id: 25,
      title: "Gaming Controller Pro",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=600&h=600&fit=crop&auto=format&q=80",
      bgColor: "purple-200-bg"
    }
  ];

  return (
    <>
      <style>{styles}</style>
      <section className="featured-section">
        <div className="container">
          <header className="header">
            <h2 className="title">Featured Products</h2>
            <p className="subtitle">
              Discover our curated collection of premium tech products designed to enhance your lifestyle
            </p>
          </header>

          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className={`product-image-container ${product.bgColor}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
        <div className="hover-overlay"></div>

        <div className="quick-view">
          <button className="quick-view-btn">Quick View</button>
        </div>
      </div>

      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>

        <div className="price-and-rating">
          <span className="product-price">${product.price}</span>
          <div className="product-rating" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="star-icon"
                viewBox="0 0 20 20"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>

        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
