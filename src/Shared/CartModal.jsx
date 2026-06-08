import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import Button from './Button';

function CartModal({ isOpen = true, onClose }) {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'GRAPH POWER Rigger Network Wiring Kit',
      price: 1242,
      originalPrice: 1242,
      image: '/dummyproductimage.png',
      quantity: 1,
    },
    {
      id: 2,
      name: 'GRAPH POWER Rigger Network Wiring Kit',
      price: 1242,
      originalPrice: 1242,
      image: '/dummyproductimage.png',
      quantity: 1,
    },
  ]);

  useEffect(() => {
    const handleAddToCart = (e) => {
      const newItem = e.detail;
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === newItem.id);
        if (existingItem) {
          return prevItems.map(item =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          );
        }
        return [...prevItems, newItem];
      });
    };
    window.addEventListener('add-to-cart', handleAddToCart);
    return () => window.removeEventListener('add-to-cart', handleAddToCart);
  }, []);

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Calculate Subtotal dynamically based on actual cart items
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* Backdrop overlay */}
      <div 
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Drawer Container (Using sharp corners to match project's design system) */}
      <div className={`relative w-full max-w-[420px] bg-white h-full shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-slate-900 font-sans">Your Cart</h2>
          <button 
            type="button" 
            onClick={onClose}
            className="text-2xl text-slate-800 hover:text-black transition-colors duration-200 p-1"
            aria-label="Close cart"
          >
            <IoClose />
          </button>
        </div>

        {/* Scrollable Cart Items List */}
        <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 py-12">
              <span className="text-lg font-medium">Your cart is empty</span>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id} 
                className="border border-gray-100 p-4 bg-white flex gap-4"
              >
                {/* Product Image Box */}
                <div className="w-20 h-20 bg-[#f5f5f5] flex items-center justify-center p-2 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain select-none"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug pr-2">
                      {item.name}
                    </h3>
                    
                    {/* Prices */}
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-sm text-slate-400 line-through">
                        ${item.originalPrice}
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        ${item.price}
                      </span>
                    </div>
                  </div>

                  {/* Quantity & Remove Actions */}
                  <div className="flex items-center gap-4 mt-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-gray-200 text-slate-600 text-sm h-8 bg-white">
                      <button 
                        type="button" 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-full flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium border-x border-gray-200 h-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                      <button 
                        type="button" 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-full flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Link */}
                    <button 
                      type="button" 
                      onClick={() => removeItem(item.id)}
                      className="text-xs font-semibold text-slate-500 hover:text-[#C51C1C] underline transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Area */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-white">
            <div className="flex items-center justify-between mb-6">
              <span className="text-base font-bold text-slate-900">Subtotal</span>
              <span className="text-base font-bold text-slate-900">
                ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            
            <Button 
              variant="primary" 
              className="w-full py-4 text-base font-bold"
              onClick={() => {
                navigate('/confirm-order');
                if (onClose) onClose();
              }}
            >
              Check Out
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}

export default CartModal;