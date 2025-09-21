"use client"
import React, { memo } from 'react';
import Link from 'next/link';

const styles = `
  /* Product Box Styles */
  .product-box {
    position: relative;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid #f1f5f9;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .product-box:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-color: #e2e8f0;
  }

  /* Remove underlines from links */
  .product-link {
    text-decoration: none;
    color: inherit;
  }

  .product-link:hover {
    text-decoration: none;
    color: inherit;
  }

  /* Image Container */
  .product-image-container {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  }

  @media (max-width: 640px) {
    .product-image-container {
      height: 200px;
    }
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .product-box:hover .product-image {
    transform: scale(1.08);
  }

  /* Badges */
  .badge-container {
    position: absolute;
    top: 12px;
    left: 12px;
    display: flex;
    gap: 6px;
    z-index: 2;
  }

  .badge {
    padding: 4px 8px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.025em;
    text-transform: uppercase;
  }

  .badge-new {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }

  .badge-sale {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
  }

  .badge-featured {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
  }

  /* Wishlist Button */
  .wishlist-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 2;
  }

  .wishlist-btn:hover {
    background: #ffffff;
    transform: scale(1.1);
  }

  .heart-icon {
    width: 18px;
    height: 18px;
    fill: #64748b;
    transition: fill 0.3s ease;
  }

  .wishlist-btn:hover .heart-icon {
    fill: #ef4444;
  }

  /* Product Content */
  .product-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  @media (max-width: 640px) {
    .product-content {
      padding: 16px;
    }
  }

  .product-category {
    font-size: 12px;
    font-weight: 500;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 8px;
  }

  .product-title {
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
    line-height: 1.4;
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 44px;
    text-decoration: none;
  }

  @media (max-width: 640px) {
    .product-title {
      font-size: 14px;
      min-height: 40px;
    }
  }

  /* Rating */
  .product-rating {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  .stars {
    display: flex;
    gap: 2px;
  }

  .star {
    width: 14px;
    height: 14px;
    fill: #fbbf24;
  }

  .star-empty {
    fill: #e2e8f0;
  }

  .rating-text {
    font-size: 13px;
    color: #64748b;
    font-weight: 500;
  }

  /* Price Section */
  .price-section {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  .current-price {
    font-size: 20px;
    font-weight: 700;
    color: #059669;
  }

  @media (max-width: 640px) {
    .current-price {
      font-size: 18px;
    }
  }

  .original-price {
    font-size: 16px;
    color: #94a3b8;
    text-decoration: line-through;
  }

  .discount {
    background: #fef3c7;
    color: #92400e;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
  }

  /* Add to Cart Button */
  .add-to-cart {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #1e293b, #334155);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.025em;
    margin-top: auto;
  }

  .add-to-cart:hover {
    background: linear-gradient(135deg, #334155, #475569);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 41, 59, 0.3);
  }

  .add-to-cart:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    .add-to-cart {
      padding: 12px;
      font-size: 13px;
    }
  }

  /* Quick View Overlay */
  .quick-view-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 3;
  }

  .product-box:hover .quick-view-overlay {
    opacity: 1;
  }

  .quick-view-btn {
    padding: 12px 24px;
    background: white;
    color: #1e293b;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.025em;
  }

  .quick-view-btn:hover {
    background: #f8fafc;
    transform: scale(1.05);
  }

  /* Loading skeleton styles */
  .skeleton {
    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const ProductBox = memo(({ product, isLoading = false }) => {
  if (isLoading) {
    return (
      <>
        <style>{styles}</style>
        <div className="product-box">
          <div className="product-image-container skeleton"></div>
          <div className="product-content">
            <div className="skeleton" style={{height: '12px', width: '60px', marginBottom: '8px'}}></div>
            <div className="skeleton" style={{height: '44px', marginBottom: '12px'}}></div>
            <div className="skeleton" style={{height: '16px', width: '120px', marginBottom: '16px'}}></div>
            <div className="skeleton" style={{height: '20px', width: '80px', marginBottom: '16px'}}></div>
            <div className="skeleton" style={{height: '48px'}}></div>
          </div>
        </div>
      </>
    );
  }

  if (!product) return null;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} className={`star ${i < fullStars ? '' : 'star-empty'}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      );
    }
    return stars;
  };

  const getBadge = (product) => {
    if (product.isNew) return { type: 'new', text: 'New' };
    if (product.discount > 0) return { type: 'sale', text: `${product.discount}% Off` };
    if (product.featured) return { type: 'featured', text: 'Featured' };
    return null;
  };

  const badge = getBadge(product);

  return (
    <>
      <style>{styles}</style>
      <div className="product-box">
        <Link href={`/store/product-details/${product.id}`} className="product-link">
          <div className="product-image-container">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
              loading="lazy"
            />
            
            {badge && (
              <div className="badge-container">
                <span className={`badge badge-${badge.type}`}>
                  {badge.text}
                </span>
              </div>
            )}

            <button className="wishlist-btn" onClick={(e) => e.preventDefault()}>
              <svg className="heart-icon" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>

            <div className="quick-view-overlay">
              <button className="quick-view-btn" onClick={(e) => e.preventDefault()}>
                Quick View
              </button>
            </div>
          </div>

          <div className="product-content">
            <div className="product-category">{product.category}</div>
            <h3 className="product-title">{product.title}</h3>
            
            <div className="product-rating">
              <div className="stars">
                {renderStars(product.rating || 4.5)}
              </div>
              <span className="rating-text">
                ({product.reviewCount || Math.floor(Math.random() * 200) + 50})
              </span>
            </div>

            <div className="price-section">
              <span className="current-price">
                ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="original-price">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="discount">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <button 
              className="add-to-cart"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic here
                console.log('Added to cart:', product.id);
              }}
            >
              Add to Cart
            </button>
          </div>
        </Link>
      </div>
    </>
  );
});

ProductBox.displayName = 'ProductBox';

export default ProductBox;
