import React from 'react';
import Container from '../../../../components/Container';
import { notFound } from 'next/navigation';

const styles = `
  .product-details-section {
    background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
    min-height: 100vh;
    padding: 40px 0;
  }

  .product-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
  }

  @media (max-width: 768px) {
    .product-container {
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 20px;
    }
  }

  /* Image Section */
  .image-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .main-image-container {
    position: relative;
    width: 100%;
    height: 500px;
    background: #f8fafc;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
  }

  .main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .main-image:hover {
    transform: scale(1.05);
  }

  /* Product Info Section */
  .info-section {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #64748b;
  }

  .breadcrumb a {
    color: #3b82f6;
    text-decoration: none;
  }

  .breadcrumb a:hover {
    text-decoration: underline;
  }

  .product-category {
    display: inline-block;
    padding: 6px 12px;
    background: #eff6ff;
    color: #2563eb;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .product-title {
    font-size: 32px;
    font-weight: 800;
    color: #1e293b;
    line-height: 1.2;
    margin: 16px 0;
  }

  @media (max-width: 640px) {
    .product-title {
      font-size: 24px;
    }
  }

  .product-rating {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }

  .stars {
    display: flex;
    gap: 4px;
  }

  .star {
    width: 18px;
    height: 18px;
    fill: #fbbf24;
  }

  .star-empty {
    fill: #e2e8f0;
  }

  .rating-text {
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
  }

  .price-section {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 0;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
  }

  .current-price {
    font-size: 36px;
    font-weight: 800;
    color: #059669;
  }

  .original-price {
    font-size: 24px;
    color: #94a3b8;
    text-decoration: line-through;
  }

  .discount-badge {
    background: #fef3c7;
    color: #92400e;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 700;
  }

  .product-description {
    font-size: 16px;
    line-height: 1.7;
    color: #4b5563;
    margin: 24px 0;
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 24px 0;
  }

  .features-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 0;
    font-size: 15px;
    color: #374151;
  }

  .check-icon {
    width: 20px;
    height: 20px;
    fill: #10b981;
    flex-shrink: 0;
  }

  .action-buttons {
    display: flex;
    gap: 16px;
    margin-top: 32px;
  }

  @media (max-width: 640px) {
    .action-buttons {
      flex-direction: column;
    }
  }

  .add-to-cart-btn {
    flex: 1;
    padding: 16px 32px;
    background: linear-gradient(135deg, #1e293b, #334155);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .add-to-cart-btn:hover {
    background: linear-gradient(135deg, #334155, #475569);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 41, 59, 0.3);
  }

  .wishlist-btn {
    padding: 16px;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .wishlist-btn:hover {
    background: #e2e8f0;
    border-color: #cbd5e1;
  }

  .heart-icon {
    width: 24px;
    height: 24px;
    fill: #64748b;
  }

  .specifications {
    background: #f8fafc;
    border-radius: 12px;
    padding: 24px;
    margin-top: 32px;
  }

  .spec-title {
    font-size: 20px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 16px;
  }

  .spec-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #e2e8f0;
  }

  .spec-item:last-child {
    border-bottom: none;
  }

  .spec-label {
    font-weight: 600;
    color: #374151;
  }

  .spec-value {
    color: #6b7280;
  }
`;

// Fetch product data
async function getProduct(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 300 } // Cache for 5 minutes
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

export default async function ProductDetailsPage({ params }) {
  const product = await getProduct(params.product_id);

  if (!product) {
    notFound();
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} className={`star ${i < fullStars ? '' : 'star-empty'}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      );
    }
    return stars;
  };

  const originalPrice = product.price * 1.4; // Simulate original price
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  return (
    <>
      <style>{styles}</style>
      <section className="product-details-section">
        <Container>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/store">Store</a>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span>{product.title}</span>
          </div>

          <div className="product-container">
            {/* Image Section */}
            <div className="image-section">
              <div className="main-image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="main-image"
                />
              </div>
            </div>

            {/* Product Info Section */}
            <div className="info-section">
              <span className="product-category">{product.category}</span>
              
              <h1 className="product-title">{product.title}</h1>

              <div className="product-rating">
                <div className="stars">
                  {renderStars(product.rating?.rate || 4.5)}
                </div>
                <span className="rating-text">
                  {product.rating?.rate || 4.5} ({product.rating?.count || 150} reviews)
                </span>
              </div>

              <div className="price-section">
                <span className="current-price">${product.price}</span>
                <span className="original-price">${originalPrice.toFixed(2)}</span>
                <span className="discount-badge">{discount}% OFF</span>
              </div>

              <p className="product-description">
                {product.description}
              </p>

              <ul className="features-list">
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Free shipping on orders over $50
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  30-day return guarantee
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  2-year manufacturer warranty
                </li>
                <li>
                  <svg className="check-icon" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  24/7 customer support
                </li>
              </ul>

              <div className="action-buttons">
                <button className="add-to-cart-btn">
                  Add to Cart
                </button>
                <button className="wishlist-btn">
                  <svg className="heart-icon" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
              </div>

              <div className="specifications">
                <h3 className="spec-title">Specifications</h3>
                <div className="spec-item">
                  <span className="spec-label">Category</span>
                  <span className="spec-value">{product.category}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Rating</span>
                  <span className="spec-value">{product.rating?.rate || 4.5}/5</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Reviews</span>
                  <span className="spec-value">{product.rating?.count || 150} customer reviews</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Availability</span>
                  <span className="spec-value">In Stock</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
