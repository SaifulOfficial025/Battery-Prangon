import React, { useState } from 'react';
import Container from '../../Layout/Container/Container';
import Button from '../../Shared/Button';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Enquire() {
  const [activeCategory, setActiveCategory] = useState('AUTOMOTIVE BATTERIES');
  
  // Form input states
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    query: ''
  });

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry Submitted:', {
      category: activeCategory,
      ...formData
    });
    // Add logic here if required
  };

  const categories = [
    'AUTOMOTIVE BATTERIES',
    'E- RICKSHAW VEHICLES',
    'SOLAR & INVERTER BATTERIES'
  ];

  return (
    <section id="contact" className="py-4 sm:py-8 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Enquiry Form Card */}
          <form 
            onSubmit={handleSubmit}
            className="bg-white  border border-gray-100 shadow-sm p-4 sm:p-6 md:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Form Title */}
              <h2 className="text-[#C51C1C] font-semibold text-xl md:text-2xl text-left mb-6 font-sans">
                Enquire about
              </h2>

              {/* Category Options Row */}
              {/* <div className="flex flex-wrap items-center gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider transition-all duration-200 select-none uppercase border ${
                      activeCategory === cat
                        ? 'border-neutral-500 bg-white text-slate-800'
                        : 'border-transparent bg-transparent text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div> */}

              {/* Form Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  className="w-full bg-white text-slate-800 placeholder-slate-400 border border-gray-200  py-3 px-5 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] focus:border-[#C51C1C] text-sm font-medium"
                  required
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="w-full bg-white text-slate-800 placeholder-slate-400 border border-gray-200  py-3 px-5 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] focus:border-[#C51C1C] text-sm font-medium"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full bg-white text-slate-800 placeholder-slate-400 border border-gray-200  py-3 px-5 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] focus:border-[#C51C1C] text-sm font-medium"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="w-full bg-white text-slate-800 placeholder-slate-400 border border-gray-200  py-3 px-5 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] focus:border-[#C51C1C] text-sm font-medium"
                  required
                />
              </div>

              {/* Query Description Textarea */}
              <textarea
                name="query"
                value={formData.query}
                onChange={handleInputChange}
                placeholder="Query description"
                className="w-full h-32 bg-white text-slate-800 placeholder-slate-400 border border-gray-200  py-3.5 px-5 focus:outline-none focus:ring-1 focus:ring-[#C51C1C] focus:border-[#C51C1C] text-sm font-medium mb-4 resize-none"
                required
              />
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-4 mt-2">
              <Button 
                type="submit" 
                variant="primary" 
                className="w-[125px] py-2.5 font-bold shadow-sm"
              >
                Submit
              </Button>
              <button
                type="button"
                onClick={handleClear}
                className="w-[125px] py-3 bg-white border border-gray-200 text-slate-700 font-bold hover:bg-slate-50 hover:border-gray-300 active:scale-[0.98] transition-all duration-200 text-sm"
              >
                Clear
              </button>
            </div>

          </form>

          {/* Right Column: Google Maps & Find Dealer Block */}
          <div id="dealer-locations" className="flex flex-col gap-4">
            
            {/* Embedded Google Map */}
            <div className="w-full h-[250px] sm:h-[300px] lg:h-full min-h-[250px] sm:min-h-[300px]  overflow-hidden border border-gray-100 shadow-sm relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58412.38423750341!2d90.41957757603694!3d23.79106033459578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1780891339067!5m2!1sen!2sbd" 
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
              className="w-full py-4  bg-[#ffd2d2]/70 hover:bg-[#ffbcc4] flex items-center justify-center gap-2.5 transition-all duration-200 hover:scale-[1.01] cursor-pointer"
            >
              <FaMapMarkerAlt className="text-xl text-[#C51C1C]" />
              <span className="text-slate-800 text-[15px] font-bold select-none">
                Find your nearest dealer
              </span>
            </a>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Enquire;