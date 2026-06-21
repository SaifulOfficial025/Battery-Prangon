import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../Layout/Container/Container';
import Button from '../../Shared/Button';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { submitContact, resetContactStatus } from '../../Redux/Contact';
import { getContactInfo } from '../../Shared/ContactInfo';

const translations = {
  en: {
    heading: 'Enquire about',
    name: 'Full name',
    address: 'Address',
    email: 'Email',
    phone: 'Phone/WhatsApp',
    query: 'Query description',
    submit: 'Submit',
    clear: 'Clear',
    findDealer: 'Find your nearest dealer',
    submitting: 'Submitting...',
    success: 'Thank you! Your enquiry has been sent successfully.',
    error: 'Failed to send enquiry. Please try again.'
  },
  bn: {
    heading: 'অনুসন্ধান করুন',
    name: 'পূর্ণ নাম',
    address: 'ঠিকানা',
    email: 'ইমেইল',
    phone: 'ফোন/হোয়াটসঅ্যাপ',
    query: 'অনুসন্ধানের বিবরণ',
    submit: 'সাবমিট',
    clear: 'মুছে ফেলুন',
    findDealer: 'আপনার নিকটস্থ ডিলার খুঁজুন',
    submitting: 'সাবমিট হচ্ছে...',
    success: 'ধন্যবাদ! আপনার অনুসন্ধান সফলভাবে পাঠানো হয়েছে।',
    error: 'অনুসন্ধান পাঠাতে ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।'
  }
};

function Enquire() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const { loading, successMessage, error } = useSelector((state) => state.contact);
  const t = translations[lang] || translations.en;
  const info = getContactInfo(lang);

  // Form input states
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    query: ''
  });

  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClear = () => {
    setFormData({
      name: '',
      address: '',
      email: '',
      phone: '',
      query: ''
    });
    dispatch(resetContactStatus());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContact(formData));
  };

  useEffect(() => {
    if (successMessage) {
      setToast({ show: true, message: t.success, type: 'success' });
      // Reset form on success
      setFormData({
        name: '',
        address: '',
        email: '',
        phone: '',
        query: ''
      });
      // Clear toast and status after 4 seconds
      const timer = setTimeout(() => {
        setToast({ show: false, message: '', type: '' });
        dispatch(resetContactStatus());
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, t.success, dispatch]);

  useEffect(() => {
    if (error) {
      setToast({ show: true, message: `${t.error} (${error})`, type: 'error' });
      const timer = setTimeout(() => {
        setToast({ show: false, message: '', type: '' });
        dispatch(resetContactStatus());
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error, t.error, dispatch]);

  return (
    <section id="contact" className="py-4 sm:py-8 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Enquiry Form Card */}
          <form 
            onSubmit={handleSubmit}
            className="bg-white border border-gray-100 shadow-sm p-4 sm:p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Form Title */}
              <h2 className="text-[#C51C1C] font-semibold text-xl md:text-2xl text-left mb-6 font-sans">
                {t.heading}
              </h2>

              {/* Toast/Notification Message */}
              {toast.show && (
                <div className={`p-4 mb-4 text-sm font-medium border rounded-sm ${
                  toast.type === 'success' 
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-100' 
                    : 'bg-rose-50 text-rose-800 border-rose-100'
                }`}>
                  {toast.message}
                </div>
              )}

              {/* Form Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t.name}
                  className="w-full bg-white text-slate-800 placeholder-slate-400 border border-gray-200 py-3 px-5 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] focus:border-[#C51C1C] text-sm font-medium"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder={t.address}
                  className="w-full bg-white text-slate-800 placeholder-slate-400 border border-gray-200 py-3 px-5 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] focus:border-[#C51C1C] text-sm font-medium"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t.email}
                  className="w-full bg-white text-slate-800 placeholder-slate-400 border border-gray-200 py-3 px-5 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] focus:border-[#C51C1C] text-sm font-medium"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t.phone}
                  className="w-full bg-white text-slate-800 placeholder-slate-400 border border-gray-200 py-3 px-5 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] focus:border-[#C51C1C] text-sm font-medium"
                  required
                />
              </div>

              {/* Query Description Textarea */}
              <textarea
                name="query"
                value={formData.query}
                onChange={handleInputChange}
                placeholder={t.query}
                className="w-full h-32 bg-white text-slate-800 placeholder-slate-400 border border-gray-200 py-3.5 px-5 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] focus:border-[#C51C1C] text-sm font-medium mb-4 resize-none"
                required
              />
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-4 mt-2">
              <Button 
                type="submit" 
                variant="primary" 
                className="w-[125px] py-2.5 font-bold shadow-sm"
                disabled={loading}
              >
                {loading ? t.submitting : t.submit}
              </Button>
              <button
                type="button"
                onClick={handleClear}
                disabled={loading}
                className="w-[125px] py-3 bg-white border border-gray-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-gray-300 active:scale-[0.98] transition-all duration-200 text-sm disabled:opacity-50"
              >
                {t.clear}
              </button>
            </div>

          </form>

          {/* Right Column: Google Maps & Find Dealer Block */}
          <div id="dealer-locations" className="flex flex-col gap-4">
            
            {/* Embedded Google Map */}
            <div className="w-full h-[250px] sm:h-[300px] lg:h-full min-h-[250px] sm:min-h-[300px] overflow-hidden border border-gray-100 shadow-sm relative">
              <iframe 
                src={info.mapEmbedUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Dealer Location Map"
              ></iframe>
            </div>

            {/* Find Dealer Locator Button */}
            <a 
              href="#dealer-locations"
              className="w-full py-4 bg-[#ffd2d2]/70 hover:bg-[#ffbcc4] flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-[1.01] cursor-pointer"
            >
              <FaMapMarkerAlt className="text-xl text-[#C51C1C]" />
              <span className="text-slate-800 text-[15px] font-bold select-none">
                {t.findDealer}
              </span>
            </a>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Enquire;