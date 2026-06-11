import React, { useState } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';

function Inputform() {
  // Input fields state
  const [phone, setPhone] = useState('01711048578');
  const [name, setName] = useState('Jhon');
  const [company, setCompany] = useState('xxxx');
  const [city, setCity] = useState('uk');
  const [postcode, setPostcode] = useState('uk');
  const [streetAddress, setStreetAddress] = useState('');
  const [email, setEmail] = useState('01711048578');
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' or 'card'

  // Order notes state
  const [showNotes, setShowNotes] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans">
      
      {/* 1. Billing Details Section */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-wide">
          Add Billing details
        </h2>
        
        <div className="flex flex-col gap-5">
          {/* Phone */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-semibold text-slate-800">
              Phone <span className="text-[#C51C1C]">*</span>
            </label>
            <div className="relative w-full">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-250 py-2.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800"
              />
              {phone && (
                <button
                  type="button"
                  onClick={() => setPhone('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors focus:outline-none p-0.5"
                  aria-label="Clear phone input"
                >
                  <FiX className="text-base" />
                </button>
              )}
            </div>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-semibold text-slate-800">
              Name <span className="text-[#C51C1C]">*</span>
            </label>
            <div className="relative w-full">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-250 py-2.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800"
              />
              {name && (
                <button
                  type="button"
                  onClick={() => setName('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors focus:outline-none p-0.5"
                  aria-label="Clear name input"
                >
                  <FiX className="text-base" />
                </button>
              )}
            </div>
          </div>

          {/* Company Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-slate-850">
              Company name (optional)
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border border-gray-250 py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800"
            />
          </div>

          {/* City / Town Dropdown */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-semibold text-slate-800">
              City/Town <span className="text-[#C51C1C]">*</span>
            </label>
            <div className="relative w-full">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border border-gray-250 py-2.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800 appearance-none bg-white cursor-pointer"
              >
                <option value="uk">uk</option>
                <option value="london">London</option>
                <option value="newyork">New York</option>
                <option value="dhaka">Dhaka</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-lg" />
            </div>
          </div>

          {/* Post Code Dropdown */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-semibold text-slate-800">
              Post code <span className="text-[#C51C1C]">*</span>
            </label>
            <div className="relative w-full">
              <select
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="w-full border border-gray-250 py-2.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800 appearance-none bg-white cursor-pointer"
              >
                <option value="uk">uk</option>
                <option value="ec1a">EC1A 1BB</option>
                <option value="1212">1212</option>
                <option value="90210">90210</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none text-lg" />
            </div>
          </div>

          {/* Street Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-slate-800">
              Street address <span className="text-[#C51C1C]">*</span>
            </label>
            <input
              type="text"
              placeholder="Apartment, Blok, Road no."
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              className="w-full border border-gray-250 py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800 placeholder-slate-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[13px] font-semibold text-slate-800">
              Email <span className="text-[#C51C1C]">*</span>
            </label>
            <div className="relative w-full">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-250 py-2.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800"
              />
              {email && (
                <button
                  type="button"
                  onClick={() => setEmail('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors focus:outline-none p-0.5"
                  aria-label="Clear email input"
                >
                  <FiX className="text-base" />
                </button>
              )}
            </div>
          </div>

          {/* Collapsible Order Notes Toggle Link */}
          <div className="text-left mt-1">
            <button
              type="button"
              onClick={() => setShowNotes(!showNotes)}
              className="text-sm font-semibold text-slate-800 underline hover:text-[#C51C1C] transition-colors focus:outline-none"
            >
              Add order notes?
            </button>
            
            {showNotes && (
              <textarea
                placeholder="Notes about your order, e.g. special notes for delivery."
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                rows={3}
                className="w-full border border-gray-250 mt-3 p-3 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800 placeholder-slate-400 font-sans"
              />
            )}
          </div>
        </div>
      </div>

      {/* 2. Payment Options Section */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-wide">
          Payment Options
        </h2>

        <div className="flex flex-col gap-5 select-none">
          {/* Cash on Delivery Option */}
          <label className="flex items-start gap-4.5 cursor-pointer group">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={() => setPaymentMethod('cod')}
              className="mt-1 accent-[#C51C1C] w-4.5 h-4.5 cursor-pointer"
            />
            <div className="flex flex-col ml-2">
              <span className="text-[15px] font-semibold text-slate-900 leading-snug">
                Cash on delivery
              </span>
              <span className="text-[13px] text-slate-500 font-medium">
                pay wen product come to your hand
              </span>
            </div>
          </label>

          {/* Card/Online Payment Option */}
          <label className="flex items-start gap-4.5 cursor-pointer group mt-1">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
              className="mt-1 accent-[#C51C1C] w-4.5 h-4.5 cursor-pointer"
            />
            <div className="flex flex-col gap-1.5 ml-2">
              {/* Payment Methods Logo Block */}
              <div className="flex items-center gap-2">
                <img 
                  src="/payment-methods.png" 
                  alt="Card payment options" 
                  className="h-7 object-contain select-none opacity-90"
                />
              </div>
              <span className="text-[13px] text-slate-500 font-medium text-left">
                Make Card payment
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* 3. Order Summary Box */}
      <div className="hidden lg:block">
        <h2 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-wide">
          Order summary
        </h2>

        <div className="border border-gray-200 p-4 sm:p-6 bg-white flex flex-col font-sans select-none">
          {/* Summary Items */}
          <div className="flex flex-col gap-4 pb-5">
            <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs sm:text-sm mb-2">
              <span className="font-semibold text-slate-800 text-left max-w-md">
                Dakota Lithium DL+ 12V 135Ah Heated Dual Purpose LiFePO4 Battery (Open Box)
              </span>
              <div className="flex justify-between sm:justify-end gap-8 flex-shrink-0">
                <span className="text-slate-400 font-medium">$310 x 1</span>
                <span className="font-semibold text-slate-900">$310</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs sm:text-sm">
              <span className="font-semibold text-slate-800 text-left max-w-md">
                Dakota Lithium DL+ 12V 135Ah Heated Dual Purpose LiFePO4 Battery (Open Box)
              </span>
              <div className="flex justify-between sm:justify-end gap-8 flex-shrink-0">
                <span className="text-slate-400 font-medium">$310 x 1</span>
                <span className="font-semibold text-slate-900">$310</span>
              </div>
            </div>
          </div>

          {/* Pricing Totals List */}
          <div className="border-t border-gray-200 pt-4 sm:pt-5 flex flex-col gap-3 sm:gap-4">
            
            {/* Subtotal */}
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-semibold text-slate-900">Subtotal</span>
              <span className="font-semibold text-slate-900">$620</span>
            </div>

            {/* Shipment */}
            <div className="border-t border-dashed border-gray-200 pt-3.5 sm:pt-4 flex justify-between text-xs sm:text-sm">
              <span className="font-semibold text-slate-600">Shipment</span>
              <span className="font-semibold text-slate-900">$30</span>
            </div>

            {/* Coupon Discount */}
            <div className="border-t border-dashed border-gray-200 pt-3.5 sm:pt-4 flex justify-between text-xs sm:text-sm">
              <span className="font-semibold text-slate-600">Coupon</span>
              <span className="font-semibold text-[#C51C1C]">$14</span>
            </div>

            {/* Grand Total */}
            <div className="border-t border-gray-200 pt-4 sm:pt-5 flex justify-between items-end">
              <span className="text-sm sm:text-base font-semibold text-slate-900">Total</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 leading-none font-semibold">
                $455
              </span>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Inputform;