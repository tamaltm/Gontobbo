import React, { useState } from 'react';
import './index.css';

const HomePage = () => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [travelers, setTravelers] = useState('');

  const destinationCategories = [
    { id: 1, name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453109905-04098c531dba?w=300&h=300&fit=crop' },
    { id: 2, name: 'Bali', image: 'https://images.unsplash.com/photo-1537225228614-b8d3e1f8dc8d?w=300&h=300&fit=crop' },
    { id: 3, name: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9a4?w=300&h=300&fit=crop' },
    { id: 4, name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=300&fit=crop' },
    { id: 5, name: 'London', image: 'https://images.unsplash.com/photo-1533631716571-ffc3fbc4d7c7?w=300&h=300&fit=crop' },
    { id: 6, name: 'Bangkok', image: 'https://images.unsplash.com/photo-1552520514-5fefe8c9ef14?w=300&h=300&fit=crop' },
    { id: 7, name: 'Rome', image: 'https://images.unsplash.com/photo-1552832860-e0dca33cdc5f?w=300&h=300&fit=crop' },
    { id: 8, name: 'Barcelona', image: 'https://images.unsplash.com/photo-1583513021474-254f3b3603f0?w=300&h=300&fit=crop' },
  ];

  const popularTours = [
    {
      id: 1,
      title: 'Thailand Bangkok Pattaya Tour',
      location: 'Thailand',
      rating: 4.8,
      reviews: 1234,
      price: 899,
      image: 'https://images.unsplash.com/photo-1552520514-5fefe8c9ef14?w=400&h=300&fit=crop',
      duration: '5 Days'
    },
    {
      id: 2,
      title: 'Maldives Sea Food Island Tour',
      location: 'Maldives',
      rating: 4.9,
      reviews: 2156,
      price: 1299,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      duration: '6 Days'
    },
    {
      id: 3,
      title: 'European Cities Tour In 5 Days',
      location: 'Europe',
      rating: 4.7,
      reviews: 1890,
      price: 1599,
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      duration: '5 Days'
    },
    {
      id: 4,
      title: 'Maldives Beach Honeymoon Tour',
      location: 'Maldives',
      rating: 4.9,
      reviews: 3421,
      price: 1799,
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop',
      duration: '7 Days'
    },
    {
      id: 5,
      title: 'Japanese Culture Trip In Tokyo',
      location: 'Japan',
      rating: 4.6,
      reviews: 1567,
      price: 999,
      image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9a4?w=400&h=300&fit=crop',
      duration: '4 Days'
    },
    {
      id: 6,
      title: 'Dual Beach Tour Of Bali',
      location: 'Bali',
      rating: 4.8,
      reviews: 2234,
      price: 799,
      image: 'https://images.unsplash.com/photo-1537225228614-b8d3e1f8dc8d?w=400&h=300&fit=crop',
      duration: '5 Days'
    },
    {
      id: 7,
      title: 'Historic Egypt Tour',
      location: 'Egypt',
      rating: 4.7,
      reviews: 1923,
      price: 1099,
      image: 'https://images.unsplash.com/photo-1580502314957-b7a42dc2debb?w=400&h=300&fit=crop',
      duration: '6 Days'
    },
    {
      id: 8,
      title: 'Adventure Safari Tour',
      location: 'Kenya',
      rating: 4.9,
      reviews: 2567,
      price: 1299,
      image: 'https://images.unsplash.com/photo-1516426122078-823fac7934ca?w=400&h=300&fit=crop',
      duration: '5 Days'
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      rating: 5,
      text: 'Amazing experience! The tour was perfectly organized and the guides were very knowledgeable.'
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
      rating: 5,
      text: 'Had an incredible time. The destinations were breathtaking and service was excellent.'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      rating: 4,
      text: 'Great tour packages with competitive pricing. Would definitely recommend!'
    },
  ];

  const articles = [
    {
      id: 1,
      title: 'Safari in Kenya: A Journey into the Wild',
      image: 'https://images.unsplash.com/photo-1516426122078-823fac7934ca?w=300&h=250&fit=crop',
      category: 'Adventure',
      date: 'Mar 12, 2024'
    },
    {
      id: 2,
      title: 'Exploring Thailand: Culture and Cuisine',
      image: 'https://images.unsplash.com/photo-1552520514-5fefe8c9ef14?w=300&h=250&fit=crop',
      category: 'Culture',
      date: 'Mar 10, 2024'
    },
    {
      id: 3,
      title: 'Bali Beach Guide: Best Spots to Visit',
      image: 'https://images.unsplash.com/photo-1537225228614-b8d3e1f8dc8d?w=300&h=250&fit=crop',
      category: 'Beach',
      date: 'Mar 8, 2024'
    },
  ];

  const whyChooseUs = [
    { icon: '✈️', title: 'Exclusive Packages', description: 'Handpicked tours with best deals and experiences' },
    { icon: '🏨', title: 'Best Hotels', description: 'Stay at the best hotels and resorts worldwide' },
    { icon: '💰', title: 'Affordable Price', description: 'Competitive prices with flexible payment options' },
    { icon: '🎯', title: 'Expert Support', description: '24/7 customer support for your peace of mind' },
  ];

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">✈️ Tours</div>
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#tours">Tours</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <button className="book-btn">Book Now</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop" alt="Hero background" />
        </div>
        <div className="hero-content">
          <h1>Your world of joy</h1>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="🔍 Select destination" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
            <input 
              type="number" 
              placeholder="👥 Travelers" 
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why choose Tours</h2>
        <div className="features-grid">
          {whyChooseUs.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="trending-destinations">
        <div className="section-header">
          <h2>Trending destinations</h2>
          <a href="#see-all" className="see-all">See all</a>
        </div>
        <div className="destinations-carousel">
          {destinationCategories.map((dest) => (
            <div key={dest.id} className="destination-card">
              <img src={dest.image} alt={dest.name} />
              <h3>{dest.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Tours */}
      <section className="popular-tours">
        <div className="section-header">
          <h2>Find Popular Tours</h2>
          <a href="#see-all" className="see-all">See all</a>
        </div>
        <div className="tours-grid">
          {popularTours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div className="tour-image">
                <img src={tour.image} alt={tour.title} />
                <span className="duration">{tour.duration}</span>
              </div>
              <div className="tour-info">
                <h3>{tour.title}</h3>
                <p className="location">📍 {tour.location}</p>
                <div className="tour-rating">
                  <span className="stars">⭐ {tour.rating}</span>
                  <span className="reviews">({tour.reviews})</span>
                </div>
                <div className="tour-footer">
                  <span className="price">${tour.price}</span>
                  <button className="view-btn">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Section */}
      <section className="promo">
        <div className="promo-content">
          <div className="promo-text">
            <h2>Grab up to <span className="discount">35% off</span> on your favorite Destination</h2>
            <p>Limited time offer. Don't miss this opportunity!</p>
            <button className="promo-btn">Claim Offer</button>
          </div>
          <div className="promo-image">
            <img src="https://images.unsplash.com/photo-1606214174585-fe31582dc1d2?w=400&h=400&fit=crop" alt="Promo" />
          </div>
        </div>
      </section>

      {/* Popular Things to Do */}
      <section className="popular-things">
        <h2>Popular things to do</h2>
        <div className="things-grid">
          <div className="thing-card large">
            <img src="https://images.unsplash.com/photo-1516426122078-823fac7934ca?w=400&h=400&fit=crop" alt="Safari" />
            <h3>Safari Adventure</h3>
          </div>
          <div className="thing-card">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop" alt="Mountain" />
            <h3>Mountain Hiking</h3>
          </div>
          <div className="thing-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" alt="Beach" />
            <h3>Beach Relaxation</h3>
          </div>
          <div className="thing-card">
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=300&fit=crop" alt="Camping" />
            <h3>Camping</h3>
          </div>
          <div className="thing-card">
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=300&fit=crop" alt="Festival" />
            <h3>Festival Events</h3>
          </div>
          <div className="thing-card">
            <img src="https://images.unsplash.com/photo-1488381869869-56ace0e83b63?w=300&h=300&fit=crop" alt="Water Sports" />
            <h3>Water Sports</h3>
          </div>
        </div>
      </section>

      {/* Top Trending */}
      <section className="top-trending">
        <div className="section-header">
          <h2>Top Trending</h2>
          <a href="#see-all" className="see-all">See all</a>
        </div>
        <div className="trending-grid">
          {popularTours.slice(0, 4).map((tour) => (
            <div key={tour.id} className="trending-card">
              <img src={tour.image} alt={tour.title} />
              <div className="trending-info">
                <h3>{tour.title}</h3>
                <p className="location">📍 {tour.location}</p>
                <span className="price">${tour.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <img src={review.image} alt={review.name} className="review-avatar" />
              <h3>{review.name}</h3>
              <div className="review-rating">{'⭐'.repeat(review.rating)}</div>
              <p>"{review.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Get 5% of your 1st app booking</h2>
          <p>Subscribe to our newsletter and get exclusive deals and offers</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Travel Articles */}
      <section className="travel-articles">
        <h2>Travel Articles</h2>
        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} />
              <div className="article-content">
                <p className="article-category">{article.category}</p>
                <h3>{article.title}</h3>
                <p className="article-date">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>✈️ Tours</h4>
            <p>Your trusted travel companion</p>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#help">Help Center</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to get special offers and travel tips</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Tours. All rights reserved.</p>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
