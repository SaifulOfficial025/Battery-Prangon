import React, { useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import Button from '../../../Shared/Button';

function Details() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('info');
  const [expandedSection, setExpandedSection] = useState('shipping'); // 'shipping', 'faq', 'warranty', or null

  // Tab contents
  const tabs = {
    info: 'The ultimate dual purpose lithium battery for engine starting and deep cycle power. With 1,000 CCA, a high continuous discharge rate, and up to 5X the power of traditional batteries, the DL+ 135Ah fits in a case 25% smaller than a 100Ah marine battery, plus internal even-heat technology for extreme hot and cold conditions.',
    desc: 'This high-performance lithium battery is engineered to deliver exceptional starting power and reliable deep-cycle energy. Perfect for marine, RV, solar, and industrial applications, it outperforms standard lead-acid batteries in lifespan, weight, and efficiency.',
    tech: (
      <div className="flex flex-col gap-2 max-w-md">
        <div className="flex justify-between border-b border-gray-100 py-1 text-sm">
          <span className="text-slate-500 font-medium">Nominal Voltage</span>
          <span className="text-slate-900 font-semibold">12.8V</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 py-1 text-sm">
          <span className="text-slate-500 font-medium">Capacity</span>
          <span className="text-slate-900 font-semibold">135Ah</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 py-1 text-sm">
          <span className="text-slate-500 font-medium">Cold Cranking Amps (CCA)</span>
          <span className="text-slate-900 font-semibold">1000A</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 py-1 text-sm">
          <span className="text-slate-500 font-medium">Terminals</span>
          <span className="text-slate-900 font-semibold">M8 Bolt</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 py-1 text-sm">
          <span className="text-slate-500 font-medium">Dimensions</span>
          <span className="text-slate-900 font-semibold">9.5" x 6.9" x 7.5"</span>
        </div>
      </div>
    ),
  };

  const toggleAccordion = (section) => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  return (
    <div className="w-full flex flex-col text-left">
      
      {/* Product Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight mb-5 font-sans">
        Basic hooded sweatshirt in pink
      </h1>

      {/* Bullet Features List */}
      <ul className="list-disc pl-5 text-slate-500 text-[14px] leading-relaxed flex flex-col gap-2 mb-8 font-medium">
        <li>Weight: 27.2 lbs</li>
        <li>Best for trolling, golf carts, and RVs</li>
        <li>IP65 and Even-Heat Technology</li>
      </ul>

      {/* Dynamic Tab Navigation */}
      <div className="flex gap-8 border-b border-gray-200 mb-6 w-full select-none">
        <button
          type="button"
          onClick={() => setActiveTab('info')}
          className={`pb-3 font-sans font-semibold text-[15px] transition-all relative focus:outline-none -mb-[1px] ${
            activeTab === 'info' 
              ? 'text-black border-b-2 border-[#C51C1C]' 
              : 'text-slate-500 hover:text-black border-b-2 border-transparent'
          }`}
        >
          Information
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('desc')}
          className={`pb-3 font-sans font-semibold text-[15px] transition-all relative focus:outline-none -mb-[1px] ${
            activeTab === 'desc' 
              ? 'text-black border-b-2 border-[#C51C1C]' 
              : 'text-slate-500 hover:text-black border-b-2 border-transparent'
          }`}
        >
          Description
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('tech')}
          className={`pb-3 font-sans font-semibold text-[15px] transition-all relative focus:outline-none -mb-[1px] ${
            activeTab === 'tech' 
              ? 'text-black border-b-2 border-[#C51C1C]' 
              : 'text-slate-500 hover:text-black border-b-2 border-transparent'
          }`}
        >
          Technical speak
        </button>
      </div>

      {/* Tab Content Display */}
      <div className="min-h-[120px] font-sans text-slate-650 text-[14.5px] leading-relaxed mb-8">
        {typeof tabs[activeTab] === 'string' ? (
          <p>{tabs[activeTab]}</p>
        ) : (
          tabs[activeTab]
        )}
      </div>

      {/* Price & Purchase Actions Card */}
      <div className="border border-gray-200 p-4 sm:p-6 flex flex-col gap-5 sm:gap-6 bg-gray-100 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-4 w-full">
          
          {/* Price Block */}
          <div className="flex items-center gap-3.5">
            <div className="flex flex-col text-left">
              <span className="bg-[#C51C1C] text-white text-[11px] font-semibold px-2.5 py-1 select-none w-fit mb-2.5">
                20% OFF
              </span>
              <span className="text-sm sm:text-lg text-slate-400 line-through font-semibold leading-none mb-1">
                $1552
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 font-sans leading-none font-semibold">
                $1242
              </span>
            </div>
          </div>
          
          {/* Quantity & Cart Button Block */}
          <div className="flex flex-row items-center gap-3 w-full sm:w-auto">
            
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-200 h-11 bg-white select-none w-28 sm:w-32 flex-shrink-0">
              <button
                type="button"
                onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                className="flex-grow h-full flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors text-slate-655 text-base sm:text-lg focus:outline-none font-semibold"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="w-8 sm:w-10 text-center font-semibold border-x border-gray-200 h-full flex items-center justify-center text-slate-800 text-sm">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(prev => prev + 1)}
                className="flex-grow h-full flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors text-slate-655 text-base sm:text-lg focus:outline-none font-semibold"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            {/* Reusable primary red button */}
            <Button
              variant="primary"
              onClick={() => {
                const item = {
                  id: 101, // Unique ID for this product
                  name: 'Basic hooded sweatshirt in pink',
                  price: 1242,
                  originalPrice: 1242,
                  image: '/dummyproductimage.png',
                  quantity: quantity,
                };
                window.dispatchEvent(new CustomEvent('add-to-cart', { detail: item }));
                window.dispatchEvent(new CustomEvent('open-cart'));
              }}
              className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-4 sm:px-6 h-11 text-xs sm:text-sm font-semibold shadow-sm"
            >
              <BsCart className="text-sm sm:text-base flex-shrink-0" />
              <span>Add to cart</span>
            </Button>

          </div>
        </div>

        {/* Accepted Payment Methods */}
        <div className="border-t border-gray-100 pt-4 sm:pt-5 flex justify-center">
          <img 
            src="/payment-methods.png" 
            alt="Payment Methods" 
            className="h-8 sm:h-10 object-contain select-none"
          />
        </div>
      </div>

      {/* Additional Collapsible Information Container */}
      <div className="flex flex-col mt-4">
        <h2 className="text-[#1a1a1a] font-semibold text-base font-sans uppercase tracking-wider mb-4">
          Additional INFORMATION
        </h2>
        
        <div className="border border-gray-200 bg-white flex flex-col divide-y divide-gray-200">
          
          {/* Accordion 1: Shipping (Expanded by default) */}
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => toggleAccordion('shipping')}
              className="w-full flex items-center justify-between p-5 text-left font-sans font-semibold text-[15px] text-slate-800 hover:bg-gray-50/50 transition-colors focus:outline-none"
            >
              <span>Shipping</span>
              <FiChevronDown 
                className={`text-xl text-slate-500 transition-transform duration-200 ${
                  expandedSection === 'shipping' ? 'rotate-180' : 'rotate-0'
                }`} 
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 bg-white ${
                expandedSection === 'shipping' ? 'max-h-[800px] border-t border-gray-100' : 'max-h-0'
              }`}
            >
              <div className="p-6 flex flex-col gap-5 text-slate-600 text-[13px] leading-relaxed">
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1.5 font-sans">
                    Shipping policy
                  </h4>
                  <p>
                    At Dakota Lithium, our goal is to provide transparent and reliable shipping information for our customers. Orders are processed within 24-48 hours upon receipt, excluding weekends and holidays. Orders placed after 5 pm will be processed the next business day. Batteries ship FedEx and will arrive in 5-7 days to most of the US. For shipping quotes to countries outside the United States and Canada, please contact us at sales@dakotalithium.com.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1.5 font-sans">
                    Shipping Costs
                  </h4>
                  <p>
                    Shipping costs for Dakota Lithium batteries are calculated per battery due to their classification as hazardous materials (hazmat), ensuring safe and compliant handling and transportation. Shipping costs to Alaska and Hawaii may be higher due to federal law that requires that batteries ship Air Freight and have Hazmat protection. If you need to return a battery, a 10% restocking fee will apply. For details on our return policy, refunds, order edits, and exchanges, please visit our returns page. In case of lost or damaged orders, contact our support team for assistance. Orders may take longer to arrive due to variables outside of our control. We will communicate any potential delays and provide timeline estimates to keep you informed. After placing an order, you will receive a shipment confirmation email with tracking information. For any issues with lost packages, please contact support@dakotalithium.com for assistance. We appreciate your understanding and thank you for choosing Dakota Lithium.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion 2: FAQ */}
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => toggleAccordion('faq')}
              className="w-full flex items-center justify-between p-5 text-left font-sans font-semibold text-[15px] text-slate-800 hover:bg-gray-50/50 transition-colors focus:outline-none"
            >
              <span>FAQ</span>
              <FiChevronDown 
                className={`text-xl text-slate-500 transition-transform duration-200 ${
                  expandedSection === 'faq' ? 'rotate-180' : 'rotate-0'
                }`} 
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 bg-white ${
                expandedSection === 'faq' ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'
              }`}
            >
              <div className="p-6 text-slate-600 text-[13px] leading-relaxed">
                <p>
                  For common questions regarding charging, safety, shelf life, and battery management systems, please refer to our main FAQ page or get in touch with our technical support team.
                </p>
              </div>
            </div>
          </div>

          {/* Accordion 3: Warranty */}
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => toggleAccordion('warranty')}
              className="w-full flex items-center justify-between p-5 text-left font-sans font-semibold text-[15px] text-slate-800 hover:bg-gray-50/50 transition-colors focus:outline-none"
            >
              <span>Warranty</span>
              <FiChevronDown 
                className={`text-xl text-slate-500 transition-transform duration-200 ${
                  expandedSection === 'warranty' ? 'rotate-180' : 'rotate-0'
                }`} 
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 bg-white ${
                expandedSection === 'warranty' ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'
              }`}
            >
              <div className="p-6 text-slate-600 text-[13px] leading-relaxed">
                <p>
                  This battery is backed by an industry-leading 11-year manufacturer warranty. Our warranty covers defects in materials and workmanship, ensuring your peace of mind and long-term reliability.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Details;