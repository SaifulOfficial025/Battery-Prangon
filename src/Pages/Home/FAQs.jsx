import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from '../../Layout/Container/Container';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const faqsData = {
  en: [
    {
      id: 1,
      question: 'How long does the battery last?',
      answer: 'Generally, it can be used for 5 to 10 years.'
    },
    {
      id: 2,
      question: 'Can it be used in solar systems?',
      answer: 'Yes, it is fully compatible.'
    },
    {
      id: 3,
      question: 'How many days for delivery?',
      answer: 'Usually within 1–3 days all over Bangladesh.'
    },
    {
      id: 4,
      question: 'Can I get a dealership?',
      answer: 'Yes, dealership opportunities are available nationwide.'
    },
    {
      id: 5,
      question: 'Is the battery safe?',
      answer: 'Yes, our battery is fully protected by BMS and safe.'
    }
  ],
  bn: [
    {
      id: 1,
      question: 'ব্যাটারি কতদিন চলে?',
      answer: 'সাধারণত ৫ থেকে ১০ বছর পর্যন্ত ব্যবহার করা যায়।'
    },
    {
      id: 2,
      question: 'সোলার সিস্টেমে ব্যবহার করা যাবে?',
      answer: 'হ্যাঁ, সম্পূর্ণভাবে সামঞ্জস্যপূর্ণ (compatible)।'
    },
    {
      id: 3,
      question: 'ডেলিভারি কত দিনে?',
      answer: 'সাধারণত ১–৩ দিনের মধ্যে সারা বাংলাদেশে।'
    },
    {
      id: 4,
      question: 'ডিলার নেওয়া যাবে?',
      answer: 'হ্যাঁ, সারা দেশে ডিলারের সুযোগ রয়েছে।'
    },
    {
      id: 5,
      question: 'ব্যাটারি কি নিরাপদ?',
      answer: 'হ্যাঁ, আমাদের ব্যাটারি সম্পূর্ণ BMS সুরক্ষিত এবং নিরাপদ।'
    }
  ]
};

function FAQs() {
  const lang = useSelector((state) => state.lang.lang);
  // First item is expanded by default to match the reference image
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const currentFaqs = faqsData[lang] || faqsData.en;
  const sectionTitle = lang === 'bn' ? 'FAQ (সাধারণ প্রশ্ন)' : 'FAQ (Frequently Asked Questions)';

  return (
    <section className="py-4 sm:py-8 bg-white">
      <Container>
        
        {/* Section Heading */}
        <h2 className="text-[#1a1a1a] font-semibold text-xl sm:text-2xl md:text-3xl text-center font-sans mb-6 sm:mb-8 md:mb-12">
          {sectionTitle}
        </h2>

        {/* Accordion List Wrapper */}
        <div className="max-w-4xl mx-auto flex flex-col">
          {currentFaqs.map((faq, index) => (
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