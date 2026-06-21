import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiChevronDown, FiX } from 'react-icons/fi';

const translations = {
  en: {
    billingDetails: 'Add Billing details',
    phone: 'Phone',
    clearPhone: 'Clear phone input',
    name: 'Name',
    clearName: 'Clear name input',
    companyName: 'Company name (optional)',
    cityTown: 'City/Town',
    postCode: 'Post code',
    streetAddress: 'Street address',
    streetAddressPlaceholder: 'Apartment, Blok, Road no.',
    email: 'Email',
    clearEmail: 'Clear email input',
    addNotes: 'Add order notes?',
    notesPlaceholder: 'Notes about your order, e.g. special notes for delivery.',
    paymentOptions: 'Payment Options',
    codTitle: 'Cash on delivery',
    codDesc: 'pay wen product come to your hand',
    cardPayment: 'Make Card payment',
    cardPaymentAlt: 'Card payment options',
    orderSummary: 'Order summary',
    subtotal: 'Subtotal',
    shipment: 'Shipment',
    coupon: 'Coupon',
    total: 'Total',
    uk: 'uk',
    london: 'London',
    newyork: 'New York',
    dhaka: 'Dhaka',
    dummyProd1: 'Dakota Lithium DL+ 12V 135Ah Heated Dual Purpose LiFePO4 Battery (Open Box)',
    dummyProd2: 'Dakota Lithium DL+ 12V 135Ah Heated Dual Purpose LiFePO4 Battery (Open Box)',
    cityPlaceholder: 'Enter city or town',
    postCodePlaceholder: 'Enter post code',
    clearCity: 'Clear city input',
    clearPostcode: 'Clear post code input',
    emailPlaceholder: 'Enter your email'
  },
  bn: {
    billingDetails: 'বিলিং বিবরণ যোগ করুন',
    phone: 'ফোন',
    clearPhone: 'ফোন ইনপুট মুছুন',
    name: 'নাম',
    clearName: 'নাম ইনপুট মুছুন',
    companyName: 'কোম্পানির নাম (অপশনাল)',
    cityTown: 'শহর / নগর',
    postCode: 'পোস্ট কোড',
    streetAddress: 'রাস্তার ঠিকানা',
    streetAddressPlaceholder: 'অ্যাপার্টমেন্ট, ব্লক, রোড নম্বর',
    email: 'ইমেইল',
    clearEmail: 'ইমেইল ইনপুট মুছুন',
    addNotes: 'অর্ডার নোট যোগ করবেন?',
    notesPlaceholder: 'আপনার অর্ডার সম্পর্কিত নোট, যেমন ডেলিভারির জন্য বিশেষ নির্দেশাবলী।',
    paymentOptions: 'পেমেন্ট অপশন',
    codTitle: 'ক্যাশ অন ডেলিভারি',
    codDesc: 'পণ্য হাতে পাওয়ার পর মূল্য পরিশোধ করুন',
    cardPayment: 'কার্ডের মাধ্যমে পেমেন্ট করুন',
    cardPaymentAlt: 'কার্ড পেমেন্ট অপশন',
    orderSummary: 'অর্ডার সারসংক্ষেপ',
    subtotal: 'সাবটোটাল',
    shipment: 'শিপমেন্ট',
    coupon: 'কুপন',
    total: 'মোট',
    uk: 'যুক্তরাজ্য (UK)',
    london: 'লন্ডন',
    newyork: 'নিউ ইয়র্ক',
    dhaka: 'ঢাকা',
    dummyProd1: 'ডাকোটা লিথিয়াম DL+ 12V 135Ah হিটেড ডুয়াল পারপাস LiFePO4 ব্যাটারি (ওপেন বক্স)',
    dummyProd2: 'ডাকোটা লিথিয়াম DL+ 12V 135Ah হিটেড ডুয়াল পারপাস LiFePO4 ব্যাটারি (ওপেন বক্স)',
    cityPlaceholder: 'শহর বা নগর লিখুন',
    postCodePlaceholder: 'পোস্ট কোড লিখুন',
    clearCity: 'শহর মুছুন',
    clearPostcode: 'পোস্ট কোড মুছুন',
    emailPlaceholder: 'ইমেইল'
  }
};

function Inputform() {
  const lang = useSelector((state) => state.lang.lang);
  const t = translations[lang] || translations.en;

  // Input fields state
  const [phone, setPhone] = useState('01711048578');
  const [name, setName] = useState('Jhon');
  const [company, setCompany] = useState('xxxx');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [email, setEmail] = useState('01711048578');
  const [paymentMethod, setPaymentMethod] = useState('cod'); // 'cod' or 'card'

  // Order notes state
  const [showNotes, setShowNotes] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');

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

  return (
    <div className="w-full flex flex-col gap-8 text-left font-sans">
      
      {/* 1. Billing Details Section */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-wide">
          {t.billingDetails}
        </h2>
        
        <div className="flex flex-col gap-5">
          {/* Phone */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[18px] font-semibold text-slate-800">
              {t.phone} <span className="text-[#C51C1C]">*</span>
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
                  aria-label={t.clearPhone}
                >
                  <FiX className="text-base" />
                </button>
              )}
            </div>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[18px] font-semibold text-slate-800">
              {t.name} <span className="text-[#C51C1C]">*</span>
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
                  aria-label={t.clearName}
                >
                  <FiX className="text-base" />
                </button>
              )}
            </div>
          </div>

          {/* Company Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[18px] font-semibold text-slate-850">
              {t.companyName}
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border border-gray-250 py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800"
            />
          </div>

          {/* City / Town Input */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[18px] font-semibold text-slate-800">
              {t.cityTown} <span className="text-[#C51C1C]">*</span>
            </label>
            <div className="relative w-full">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={t.cityPlaceholder}
                className="w-full border border-gray-250 py-2.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800"
              />
              {city && (
                <button
                  type="button"
                  onClick={() => setCity('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors focus:outline-none p-0.5"
                  aria-label={t.clearCity}
                >
                  <FiX className="text-base" />
                </button>
              )}
            </div>
          </div>

          {/* Post Code Input */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[18px] font-semibold text-slate-800">
              {t.postCode} <span className="text-[#C51C1C]">*</span>
            </label>
            <div className="relative w-full">
              <input
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder={t.postCodePlaceholder}
                className="w-full border border-gray-250 py-2.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800"
              />
              {postcode && (
                <button
                  type="button"
                  onClick={() => setPostcode('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors focus:outline-none p-0.5"
                  aria-label={t.clearPostcode}
                >
                  <FiX className="text-base" />
                </button>
              )}
            </div>
          </div>

          {/* Street Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[18px] font-semibold text-slate-800">
              {t.streetAddress} <span className="text-[#C51C1C]">*</span>
            </label>
            <input
              type="text"
              placeholder={t.streetAddressPlaceholder}
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              className="w-full border border-gray-250 py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800 placeholder-slate-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="text-[18px] font-semibold text-slate-800">
              {t.email} <span className="text-[#C51C1C]">*</span>
            </label>
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-250 py-2.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] text-sm text-slate-800"
                placeholder={t.emailPlaceholder}
              />
              {email && (
                <button
                  type="button"
                  onClick={() => setEmail('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors focus:outline-none p-0.5"
                  aria-label={t.clearEmail}
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
              {t.addNotes}
            </button>
            
            {showNotes && (
              <textarea
                placeholder={t.notesPlaceholder}
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
          {t.paymentOptions}
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
              <span className="text-[18px] font-semibold text-slate-900 leading-snug">
                {t.codTitle}
              </span>
              <span className="text-[18px] text-slate-500 font-medium">
                {t.codDesc}
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
                  alt={t.cardPaymentAlt} 
                  className="h-7 object-contain select-none opacity-90"
                />
              </div>
              <span className="text-[18px] text-slate-500 font-medium text-left">
                {t.cardPayment}
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* 3. Order Summary Box */}
      <div className="hidden lg:block">
        <h2 className="text-xl font-semibold text-slate-900 mb-6 uppercase tracking-wide">
          {t.orderSummary}
        </h2>

        <div className="border border-gray-200 p-4 sm:p-6 bg-white flex flex-col font-sans select-none">
          {/* Summary Items */}
          <div className="flex flex-col gap-4 pb-5">
            <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs sm:text-sm mb-2">
              <span className="font-semibold text-slate-800 text-left max-w-md">
                {t.dummyProd1}
              </span>
              <div className="flex justify-between sm:justify-end gap-8 flex-shrink-0">
                <span className="text-slate-400 font-medium">{formatPrice(310)} x {lang === 'bn' ? '১' : '1'}</span>
                <span className="font-semibold text-slate-900">{formatPrice(310)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs sm:text-sm">
              <span className="font-semibold text-slate-800 text-left max-w-md">
                {t.dummyProd2}
              </span>
              <div className="flex justify-between sm:justify-end gap-8 flex-shrink-0">
                <span className="text-slate-400 font-medium">{formatPrice(310)} x {lang === 'bn' ? '১' : '1'}</span>
                <span className="font-semibold text-slate-900">{formatPrice(310)}</span>
              </div>
            </div>
          </div>

          {/* Pricing Totals List */}
          <div className="border-t border-gray-200 pt-4 sm:pt-5 flex flex-col gap-3 sm:gap-4">
            
            {/* Subtotal */}
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-semibold text-slate-900">{t.subtotal}</span>
              <span className="font-semibold text-slate-900">{formatPrice(620)}</span>
            </div>

            {/* Shipment */}
            <div className="border-t border-dashed border-gray-200 pt-3.5 sm:pt-4 flex justify-between text-xs sm:text-sm">
              <span className="font-semibold text-slate-600">{t.shipment}</span>
              <span className="font-semibold text-slate-900">{formatPrice(30)}</span>
            </div>

            {/* Coupon Discount */}
            <div className="border-t border-dashed border-gray-200 pt-3.5 sm:pt-4 flex justify-between text-xs sm:text-sm">
              <span className="font-semibold text-slate-600">{t.coupon}</span>
              <span className="font-semibold text-[#C51C1C]">{formatPrice(14)}</span>
            </div>

            {/* Grand Total */}
            <div className="border-t border-gray-200 pt-4 sm:pt-5 flex justify-between items-end">
              <span className="text-sm sm:text-base font-semibold text-slate-900">{t.total}</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 leading-none font-semibold">
                {formatPrice(455)}
              </span>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Inputform;