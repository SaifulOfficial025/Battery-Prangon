import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiTag } from 'react-icons/fi';
import Button from '../../Shared/Button';

const translations = {
  en: {
    remove: 'Remove',
    noItems: 'No items in your order.',
    orderSummary: 'Order summary',
    subtotal: 'Subtotal',
    shipment: 'Shipment',
    coupon: 'Coupon',
    total: 'Total',
    couponPlaceholder: 'Apply coupon code',
    makePayment: 'Make Payment'
  },
  bn: {
    remove: 'মুছুন',
    noItems: 'আপনার অর্ডারে কোন পণ্য নেই।',
    orderSummary: 'অর্ডার সারসংক্ষেপ',
    subtotal: 'সাবটোটাল',
    shipment: 'শিপমেন্ট',
    coupon: 'কুপন',
    total: 'মোট',
    couponPlaceholder: 'কুপন কোড প্রয়োগ করুন',
    makePayment: 'পেমেন্ট করুন'
  }
};

function ConfirmsectionRightside() {
  const lang = useSelector((state) => state.lang.lang);
  const t = translations[lang] || translations.en;

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

  // Format price helper with Taka sign and Bengali digits support
  const formatPrice = (amount) => {
    const formatted = amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
    if (lang === 'bn') {
      const bnDigits = {
        '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
        '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
      };
      return '৳' + formatted.split('').map(char => bnDigits[char] || char).join('');
    }
    return '৳' + formatted;
  };

  const subtotalValue = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

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
                  {formatPrice(item.originalPrice)}
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {formatPrice(item.price)}
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
                    {lang === 'bn' 
                      ? item.quantity.toString().split('').map(c => ({
                          '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪',
                          '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯'
                        })[c] || c).join('')
                      : item.quantity
                    }
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
                  {t.remove}
                </button>
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <div className="border border-dashed border-gray-300 p-8 text-center text-slate-400 text-sm">
            {t.noItems}
          </div>
        )}
      </div>

      {/* Order Summary (Mobile Only: hidden on lg screens and above) */}
      {items.length > 0 && (
        <div className="block lg:hidden border border-gray-200 p-4 bg-white flex flex-col font-sans select-none my-1">
          <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide text-left">
            {t.orderSummary}
          </h3>
          
          <div className="flex flex-col gap-3">
            {/* Subtotal */}
            <div className="flex justify-between text-xs font-semibold text-slate-900">
              <span>{t.subtotal}</span>
              <span>{formatPrice(subtotalValue)}</span>
            </div>

            {/* Shipment */}
            <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between text-xs font-semibold text-slate-600">
              <span>{t.shipment}</span>
              <span>{formatPrice(30)}</span>
            </div>

            {/* Coupon Discount */}
            <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between text-xs font-semibold text-slate-600">
              <span>{t.coupon}</span>
              <span className="text-[#C51C1C]">{formatPrice(14)}</span>
            </div>

            {/* Grand Total */}
            <div className="border-t border-gray-200 pt-4 flex justify-between items-end">
              <span>{t.total}</span>
              <span className="text-lg sm:text-xl font-black text-slate-900 leading-none font-semibold">
                {formatPrice(Math.max(0, subtotalValue + 30 - 14))}
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
            placeholder={t.couponPlaceholder}
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
        {t.makePayment}
      </Button>

    </div>
  );
}

export default ConfirmsectionRightside;