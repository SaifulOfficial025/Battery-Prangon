import React, { useState } from 'react';
import Container from '../../Layout/Container/Container';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const faqsData = [
  {
    id: 1,
    question: 'How many years does a Lithium battery last?',
    answer: 'With proper usage, our lithium battery provides stable performance for 10-12 years and supports 3000+ charge cycles.'
  },
  {
    id: 2,
    question: 'Can it be used with an IPS?',
    answer: 'Yes, our lithium batteries are fully compatible with any modern IPS and UPS systems on the market.'
  },
  {
    id: 3,
    question: 'Is it Solar compatible?',
    answer: 'Yes, it works excellently with solar systems through a solar charge controller or hybrid inverter and ensures fast charging.'
  },
  {
    id: 4,
    question: 'How many days for Delivery?',
    answer: 'We typically ensure fast and safe home delivery within 24-48 hours inside Dhaka city and 3-5 working days outside Dhaka.'
  },
  {
    id: 5,
    question: 'How does the Warranty work?',
    answer: 'We provide a 10-year official replacement warranty with every battery. Contact our customer care for any manufacturing defects for a quick resolution.'
  }
];

function FAQs() {
  // First item is expanded by default to match the reference image
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-4 sm:py-8 bg-white">
      <Container>
        
        {/* Section Heading */}
        <h2 className="text-[#1a1a1a] font-semibold text-xl sm:text-2xl md:text-3xl text-center font-sans mb-6 sm:mb-8 md:mb-12">
          Questions & Answers
        </h2>

        {/* Accordion List Wrapper */}
        <div className="max-w-4xl mx-auto flex flex-col">
          {faqsData.map((faq, index) => (
            <div 
              key={faq.id} 
              className="border-b border-slate-100 py-5 flex flex-col"
            >
              
              {/* Question Header Row */}
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left font-semibold text-[#1a1a1a] text-[15px] sm:text-[17px] md:text-lg focus:outline-none select-none hover:text-[#C51C1C] transition-colors duration-200"
              >
                <span>{faq.question}</span>
                <span className="text-slate-600 font-normal">
                  {activeIndex === index ? (
                    <FiChevronUp className="text-xl" />
                  ) : (
                    <FiChevronDown className="text-xl" />
                  )}
                </span>
              </button>

              {/* Collapsible Answer Body */}
              <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index 
                    ? 'grid-rows-[1fr] mt-4 opacity-100' 
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden text-slate-600 text-sm sm:text-base leading-relaxed font-medium pr-8">
                  {faq.answer}
                </div>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default FAQs;