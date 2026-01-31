import React, { useState, useEffect } from 'react';
import { notifySuccess } from './Utilies';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";


export default function ECommerceIndex() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedInUser , setLoggedInUser ] = useState("");
  

    useEffect(() =>{
      setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, []);


  const navigate = useNavigate();


  const handleLogout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    notifySuccess('User Logged Out');
    setTimeout(()=>{
     navigate('/login');
    }, 1000)
   }


  const featuredProducts = [
    {
      id: 1,
      name: 'Minimal Leather Tote',
      price: 289,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=800&fit=crop',
      category: 'Bags'
    },
    {
      id: 2,
      name: 'Ceramic Coffee Set',
      price: 145,
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=800&fit=crop',
      category: 'Home'
    },
    {
      id: 3,
      name: 'Merino Wool Sweater',
      price: 198,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop',
      category: 'Clothing'
    },
    {
      id: 4,
      name: 'Handcrafted Vase',
      price: 112,
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=800&fit=crop',
      category: 'Home'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap');
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        
        .product-card {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease;
        }
        
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }
        
        .product-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
        
        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #1c1917;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .hero-title {
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        
        .icon-btn {
          width: 20px;
          height: 20px;
          display: inline-block;
          vertical-align: middle;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <h1 className="text-2xl font-light tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {loggedInUser}
              </h1>
              <div className="hidden md:flex gap-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                <a href="#" className="nav-link text-sm text-stone-700 hover:text-stone-900">New Arrivals</a>
                <a href="#" className="nav-link text-sm text-stone-700 hover:text-stone-900">Collections</a>
                <a href="#" className="nav-link text-sm text-stone-700 hover:text-stone-900">About</a>
                <a href="#" className="nav-link text-sm text-stone-700 hover:text-stone-900">Journal</a>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Search Icon */}
              <button className="text-stone-700 hover:text-stone-900 transition-colors">
                <svg className="icon-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              {/* User Icon */}
              <button className="text-stone-700 hover:text-stone-900 transition-colors">
                <svg className="icon-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              {/* Heart Icon */}
              <button className="text-stone-700 hover:text-stone-900 transition-colors">
                <svg className="icon-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              {/* Shopping Bag Icon */}
              <button className="text-stone-700 hover:text-stone-900 transition-colors">
                <svg className="icon-btn" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
                  <ToastContainer />
              <button className='bg-black text-white px-7 py-2 border m-2 cursor-pointer' onClick={handleLogout}>LOGOUT</button>
              {/* Menu Icon */}
              <button 
                className="md:hidden text-stone-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-stone-200 pt-4">
              <div className="flex flex-col gap-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                <a href="#" className="text-sm text-stone-700 hover:text-stone-900">New Arrivals</a>
                <a href="#" className="text-sm text-stone-700 hover:text-stone-900">Collections</a>
                <a href="#" className="text-sm text-stone-700 hover:text-stone-900">About</a>
                <a href="#" className="text-sm text-stone-700 hover:text-stone-900">Journal</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-stone-100 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=1200&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-50/40" />
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl fade-in">
            <p className="text-sm tracking-widest mb-4 text-stone-700" style={{ fontFamily: "'Inter', sans-serif" }}>
              SPRING COLLECTION 2026
            </p>
            <h2 className="hero-title text-6xl md:text-7xl font-light mb-6 text-stone-900">
              Timeless Design,<br />Modern Living
            </h2>
            <p className="text-lg text-stone-600 mb-8 font-light max-w-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              Curated pieces for the mindful home. Each item tells a story of craftsmanship and intention.
            </p>
            <button className="bg-stone-900 text-white px-8 py-3 text-sm tracking-wider hover:bg-stone-800 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
              EXPLORE COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-4xl font-light mb-2">Featured Selection</h3>
            <p className="text-stone-600 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Handpicked for the season
            </p>
          </div>
          <a href="#" className="text-sm tracking-wider text-stone-700 hover:text-stone-900 transition-colors hidden md:block" style={{ fontFamily: "'Inter', sans-serif" }}>
            VIEW ALL →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-card fade-in stagger-${index + 1} bg-white group cursor-pointer`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-full object-cover"
                />
              </div>
              <div className="px-2">
                <p className="text-xs tracking-widest text-stone-500 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {product.category.toUpperCase()}
                </p>
                <h4 className="text-lg font-light mb-2">{product.name}</h4>
                <p className="text-stone-900 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            CRAFTED WITH CARE
          </p>
          <h3 className="text-4xl md:text-5xl font-light mb-6">
            Every piece has a purpose
          </h3>
          <p className="text-stone-300 max-w-2xl mx-auto font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            From sustainable materials to ethical production, we believe in creating products that honor both people and planet.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-light mb-12">Shop by Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Living', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=600&fit=crop' },
            { name: 'Wardrobe', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop' },
            { name: 'Accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=600&fit=crop' }
          ].map((category, index) => (
            <div key={category.name} className={`fade-in stagger-${index + 1} group cursor-pointer relative h-80 overflow-hidden`}>
              <img 
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <h4 className="text-white text-3xl font-light tracking-wider">{category.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h5 className="text-xl font-light mb-4">ATELIER</h5>
              <p className="text-stone-400 text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                Mindful living through thoughtful design.
              </p>
            </div>
            <div>
              <h6 className="text-sm tracking-widest mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>SHOP</h6>
              <div className="flex flex-col gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                <a href="#" className="text-stone-400 text-sm hover:text-white transition-colors">New Arrivals</a>
                <a href="#" className="text-stone-400 text-sm hover:text-white transition-colors">Best Sellers</a>
                <a href="#" className="text-stone-400 text-sm hover:text-white transition-colors">Sale</a>
              </div>
            </div>
            <div>
              <h6 className="text-sm tracking-widest mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>ABOUT</h6>
              <div className="flex flex-col gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                <a href="#" className="text-stone-400 text-sm hover:text-white transition-colors">Our Story</a>
                <a href="#" className="text-stone-400 text-sm hover:text-white transition-colors">Sustainability</a>
                <a href="#" className="text-stone-400 text-sm hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h6 className="text-sm tracking-widest mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>NEWSLETTER</h6>
              <p className="text-stone-400 text-sm mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                Subscribe for updates and exclusive offers.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="bg-white/10 border border-white/20 px-4 py-2 text-sm flex-1 focus:outline-none focus:border-white/40 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                <button className="bg-white text-stone-900 px-6 py-2 text-sm hover:bg-stone-100 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  →
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              © 2026 Atelier. All rights reserved.
            </p>
            <div className="flex gap-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              <a href="#" className="text-stone-400 text-sm hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-stone-400 text-sm hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-stone-400 text-sm hover:text-white transition-colors">Shipping</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
