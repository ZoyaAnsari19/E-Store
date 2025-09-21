'use client'

import React from 'react';

// Expanded product data with more variety
const sampleProducts = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=250&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Smart Fitness Tracker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=250&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Eco-Friendly Water Bottle",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=250&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Minimalist Desk Lamp",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=250&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Organic Cotton T-Shirt",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=250&fit=crop&crop=center"
  },
  // Add more products as needed...
];

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    padding: 0,
    margin: 0
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  title: {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: '700',
    color: '#1f2937',
    margin: '0 0 0.5rem 0'
  },
  subtitle: {
    fontSize: 'clamp(0.9rem, 2vw, 1.125rem)',
    color: '#6b7280',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
    padding: 0
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease',
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #f3f4f6'
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  quickViewBtn: {
    background: 'white',
    color: '#333',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease'
  },
  content: {
    padding: '1.25rem',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  productTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: '0 0 0.75rem 0',
    lineHeight: '1.4',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    minHeight: '2.8rem'
  },
  priceContainer: {
    marginBottom: '1rem'
  },
  price: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#059669'
  },
  button: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1rem',
    borderRadius: '10px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s ease',
    fontSize: '0.875rem'
  },
  cartIcon: {
    width: '16px',
    height: '16px',
    strokeWidth: '2'
  }
};

// Single ProductCard component export
export function ProductCard({ product }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleButtonHover = (e, isEntering) => {
    if (isEntering) {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
    } else {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = 'none';
    }
  };

  return (
    <div 
      style={{
        ...styles.card,
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' 
          : styles.card.boxShadow
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            ...styles.image,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div style={{
          ...styles.overlay,
          opacity: isHovered ? 1 : 0
        }}>
          <button style={styles.quickViewBtn}>
            Quick View
          </button>
        </div>
      </div>
      
      <div style={styles.content}>
        <div>
          <h3 style={styles.productTitle}>{product.title}</h3>
          <div style={styles.priceContainer}>
            <span style={styles.price}>${product.price}</span>
          </div>
        </div>
        
        <button 
          style={styles.button}
          onMouseEnter={(e) => handleButtonHover(e, true)}
          onMouseLeave={(e) => handleButtonHover(e, false)}
        >
          <span>Add to Cart</span>
          <svg 
            style={styles.cartIcon}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="m1 1 4 4 3.68 13.39a2 2 0 0 0 1.92 1.61h9.8a2 2 0 0 0 1.92-1.61L23 6H6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

// Export the ProductsGrid component for the grid layout only
export function ProductsGrid({ products = sampleProducts, showHeader = false }) {
  return (
    <div style={styles.container}>
      {showHeader && (
        <div style={styles.header}>
          <h1 style={styles.title}>Featured Products</h1>
          <p style={styles.subtitle}>Discover our curated collection of premium items</p>
        </div>
      )}
      
      <div style={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Main component - use this only once on your page
export default function FeaturedProductsSection() {
  return (
    <div style={styles.app}>
      <ProductsGrid products={sampleProducts} showHeader={true} />
    </div>
  );
}
