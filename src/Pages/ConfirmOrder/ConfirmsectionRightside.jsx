import React, { useState } from 'react';
import { FiTag } from 'react-icons/fi';
import Button from '../../Shared/Button';

function ConfirmsectionRightside() {
  const [items, setItems] = useState([
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

  const [coupon, setCoupon] = useState('');

  const updateQuantity = (id, delta) => {
    setItems(prevItems =>
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
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      
      {/* Items List */}
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div 
            key={item.id}
            className="border border-gray-200 p-5 bg-white flex flex-col sm:flex-row gap-4"
          >
            {/* Product Image Section */}
            <div className="w-20 h-20 bg-[#f5f5f5] flex items-center justify-center p-2 flex-shrink-0 mx-auto sm:mx-0">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-contain select-none"
              />
            </div>

            {/* Product Details Section */}
            <div className="flex flex-col justify-between flex-grow text-left">
              <h3 className="text-sm font-semibold   text-slate-900 leading-snug">
                {item.name}
              </h3>

              {/* Price Details */}
              <div className="flex items-center gap-3 mt-2">
                <span className="text-sm text-slate-400 line-through">
                  ${item.originalPrice}
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  ${item.price}
                </span>
              </div>

              {/* Action Buttons: Quantity Selector & Remove Link */}
              <div className="flex items-center gap-4 mt-3">
                {/* Quantity Controls */}
                <div className="flex items-center border border-gray-200 text-slate-600 text-sm h-8 bg-white select-none">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-full flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors focus:outline-none"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium border-x border-gray-200 h-full flex items-center justify-center text-slate-800">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-full flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors focus:outline-none"
                  >
                    +
                  </button>
                </div>

                {/* Remove item trigger */}
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-xs font-semibold text-slate-500 hover:text-[#C51C1C] underline transition-colors focus:outline-none"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="border border-dashed border-gray-300 p-8 text-center text-slate-400 text-sm">
            No items in your order.
          </div>
        )}
      </div>

      {/* Order Summary (Mobile Only: hidden on lg screens and above) */}
      {items.length > 0 && (
        <div className="block lg:hidden border border-gray-200 p-4 bg-white flex flex-col font-sans select-none my-1">
          <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide text-left">
            Order summary
          </h3>
          
          <div className="flex flex-col gap-3">
            {/* Subtotal */}
            <div className="flex justify-between text-xs font-semibold text-slate-900">
              <span>Subtotal</span>
              <span>${items.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</span>
            </div>

            {/* Shipment */}
            <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between text-xs font-semibold text-slate-600">
              <span>Shipment</span>
              <span>$30</span>
            </div>

            {/* Coupon Discount */}
            <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between text-xs font-semibold text-slate-600">
              <span>Coupon</span>
              <span className="text-[#C51C1C]">$14</span>
            </div>

            {/* Grand Total */}
            <div className="border-t border-gray-200 pt-4 flex justify-between items-end">
              <span className="text-xs sm:text-sm font-semibold text-slate-900">Total</span>
              <span className="text-lg sm:text-xl font-black text-slate-900 leading-none font-semibold">
                ${Math.max(0, items.reduce((acc, item) => acc + (item.price * item.quantity), 0) + 30 - 14)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Coupon Code Input */}
      <div className="relative w-full">
        <div className="bg-[#f5f5f5] py-3.5 px-4 flex items-center gap-3 w-full border border-transparent focus-within:border-gray-200">
          <FiTag className="text-slate-400 text-lg flex-shrink-0" />
          <input
            type="text"
            placeholder="Apply coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-sm text-slate-800 placeholder-slate-400 font-sans"
          />
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        variant="primary"
        onClick={() => console.log('Proceeding with payment for items:', items)}
        className="w-full py-4 text-base font-semibold"
        disabled={items.length === 0}
      >
        Make Payment
      </Button>

    </div>
  );
}

export default ConfirmsectionRightside;