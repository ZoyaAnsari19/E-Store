import React from 'react'
import Container from '../Container'
import ProductBox from "../ProductBox"

const styles = `
  /* Featured Products Section */
  .featured-section {
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
    padding: 80px 0;
    min-height: 100vh;
  }

  @media (max-width: 768px) {
    .featured-section {
      padding: 60px 0;
    }
  }

  @media (max-width: 640px) {
    .featured-section {
      padding: 40px 0;
    }
  }

  /* Section Header */
  .section-header {
    text-align: center;
    margin-bottom: 60px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    .section-header {
      margin-bottom: 40px;
    }
  }

  .section-title {
    font-size: 48px;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 16px;
    line-height: 1.2;
    background: linear-gradient(135deg, #1e293b, #475569);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 36px;
    }
  }

  @media (max-width: 640px) {
    .section-title {
      font-size: 28px;
    }
  }

  .section-subtitle {
    font-size: 18px;
    color: #64748b;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    .section-subtitle {
      font-size: 16px;
    }
  }

  /* Products Grid */
  .products-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    max-width: 1400px;
    margin: 0 auto;
  }

  /* Responsive grid adjustments */
  @media (max-width: 1400px) {
    .products-grid {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 20px;
    }
  }

  @media (max-width: 1024px) {
    .products-grid {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 18px;
    }
  }

  @media (max-width: 768px) {
    .products-grid {
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 16px;
    }
  }

  @media (max-width: 640px) {
    .products-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
  }

  @media (max-width: 480px) {
    .products-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  /* Error State */
  .error-container {
    text-align: center;
    padding: 60px 20px;
    background: #fef2f2;
    border-radius: 16px;
    border: 1px solid #fecaca;
    max-width: 600px;
    margin: 0 auto;
  }

  .error-title {
    font-size: 24px;
    font-weight: 600;
    color: #dc2626;
    margin-bottom: 16px;
  }

  .error-message {
    color: #7f1d1d;
    margin-bottom: 24px;
    line-height: 1.6;
  }

  /* Empty State */
  .empty-container {
    text-align: center;
    padding: 80px 20px;
    color: #64748b;
  }

  .empty-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 24px;
    opacity: 0.5;
  }

  .empty-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  .empty-message {
    font-size: 16px;
    line-height: 1.6;
  }
`;

// Sample products data - replace with your actual API data
const sampleProducts = [
  {
    id: 1,
    title: "Premium Wireless Noise-Cancelling Headphones",
    price: 199.99,
    originalPrice: 249.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.8,
    reviewCount: 324,
    isNew: true,
    featured: false
  },
  {
    id: 2,
    title: "Smart Fitness Tracker with Heart Rate Monitor",
    price: 89.99,
    originalPrice: 129.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.5,
    reviewCount: 186,
    discount: 31,
    featured: true
  },
  {
    id: 3,
    title: "Eco-Friendly Insulated Water Bottle",
    price: 24.99,
    originalPrice: 34.99,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.3,
    reviewCount: 89,
    discount: 29,
    featured: false
  },
  {
    id: 4,
    title: "Fast Wireless Charging Pad",
    price: 39.99,
    originalPrice: 59.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.6,
    reviewCount: 142,
    discount: 33,
    featured: true
  },
  {
    id: 5,
    title: "Portable Bluetooth Speaker with Deep Bass",
    price: 79.99,
    originalPrice: 109.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.7,
    reviewCount: 267,
    discount: 27,
    featured: false
  },
  {
    id: 6,
    title: "Smart Watch Series X with GPS",
    price: 299.99,
    originalPrice: 399.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.9,
    reviewCount: 456,
    discount: 25,
    featured: true
  },
  {
    id: 7,
    title: "Adjustable Ergonomic Laptop Stand",
    price: 49.99,
    originalPrice: 69.99,
    category: "Office",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.4,
    reviewCount: 203,
    discount: 29,
    featured: false
  },
  {
    id: 8,
    title: "Multi-Port USB-C Hub with 4K HDMI",
    price: 34.99,
    originalPrice: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.2,
    reviewCount: 128,
    discount: 30,
    isNew: true
  },
  {
    id: 9,
    title: "Ergonomic Wireless Gaming Mouse",
    price: 29.99,
    originalPrice: 44.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.5,
    reviewCount: 167,
    discount: 33,
    featured: false
  },
  {
    id: 10,
    title: "Premium Leather Smartphone Case",
    price: 19.99,
    originalPrice: 29.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.1,
    reviewCount: 94,
    discount: 33,
    featured: false
  },
  {
    id: 11,
    title: "20000mAh Fast Charging Power Bank",
    price: 45.99,
    originalPrice: 64.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.6,
    reviewCount: 234,
    discount: 29,
    featured: true
  },
  {
    id: 12,
    title: "RGB Mechanical Gaming Keyboard",
    price: 129.99,
    originalPrice: 179.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.8,
    reviewCount: 312,
    discount: 28,
    isNew: true
  },
  {
    id: 13,
    title: "4K Ultra HD Webcam with Auto-Focus",
    price: 159.99,
    originalPrice: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.7,
    reviewCount: 187,
    discount: 20,
    featured: true
  },
  {
    id: 14,
    title: "Professional Mechanical Gaming Mouse",
    price: 69.99,
    originalPrice: 94.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.5,
    reviewCount: 156,
    discount: 26,
    featured: false
  },
  {
    id: 15,
    title: "Smart Home Voice Assistant Speaker",
    price: 149.99,
    originalPrice: 199.99,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&auto=format&q=80",
    rating: 4.6,
    reviewCount: 278,
    discount: 25,
    featured: true
  }
];

// Loading component
const LoadingGrid = () => (
  <div className="loading-container">
    {[...Array(15)].map((_, index) => (
      <ProductBox key={index} isLoading={true} />
    ))}
  </div>
);

export default async function FeaturedProducts() {
  let products = [];
  let error = null;
  
  try {
    // You can replace this with your actual API call
    // const response = await fetch('https://fakestoreapi.com/products/category/electronics?limit=15', {
    //   next: { revalidate: 300 }
    // });
    
    // For now, using sample data
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate API delay
    products = sampleProducts;
    
    // If using real API, uncomment:
    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
    // const data = await response.json();
    // products = Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('Failed to fetch featured products:', err);
    error = err.message;
    products = sampleProducts; // Fallback to sample data
  }

  return (
    <>
      <style>{styles}</style>
      <section className="featured-section">
        <Container>
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">
              Discover our handpicked selection of premium tech products designed to enhance your digital lifestyle with cutting-edge innovation and exceptional quality.
            </p>
          </div>

          {error && !products.length ? (
            <div className="error-container">
              <h3 className="error-title">Unable to Load Products</h3>
              <p className="error-message">
                We're having trouble loading the featured products right now. Please refresh the page or try again later.
              </p>
            </div>
          ) : products.length > 0 ? (
            <div className="products-grid">
              {products.map((product) => (
                <ProductBox 
                  key={product.id} 
                  product={product} 
                />
              ))}
            </div>
          ) : (
            <div className="empty-container">
              <svg className="empty-icon" viewBox="0 0 64 64" fill="currentColor">
                <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm0 56C17.641 58 6 46.359 6 32S17.641 6 32 6s26 11.641 26 26-11.641 26-26 26z"/>
                <path d="M32 14c-9.925 0-18 8.075-18 18s8.075 18 18 18 18-8.075 18-18-8.075-18-18-18zm0 32c-7.72 0-14-6.28-14-14s6.28-14 14-14 14 6.28 14 14-6.28 14-14 14z"/>
                <circle cx="32" cy="32" r="4"/>
              </svg>
              <h3 className="empty-title">No Products Available</h3>
              <p className="empty-message">
                We're currently updating our featured products collection. Please check back soon for amazing deals and new arrivals.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
