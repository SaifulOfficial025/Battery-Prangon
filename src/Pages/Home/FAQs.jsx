import React, { useState } from 'react';
import Container from '../../Layout/Container/Container';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const faqsData = [
  {
    id: 1,
    question: 'Lithium battery কত বছর চলে?',
    answer: 'সঠিক ব্যবহারে আমাদের lithium battery ১০-১২ বছর পর্যন্ত স্থিতিশীল পারফরম্যান্স দেয় এবং ৩০০০+ charge cycle সাপোর্ট করে।'
  },
  {
    id: 2,
    question: 'IPS এর সাথে ব্যবহার করা যাবে?',
    answer: 'হ্যাঁ, আমাদের লিথিয়াম ব্যাটারিগুলো বাজারের যেকোনো আধুনিক আইপিএস (IPS) এবং ইউপিএস (UPS) সিস্টেমের সাথে সম্পূর্ণ সামঞ্জস্যপূর্ণ।'
  },
  {
    id: 3,
    question: 'Solar compatible কি?',
    answer: 'হ্যাঁ, সোলার চার্জ কন্ট্রোলার বা হাইব্রিড ইনভার্টারের মাধ্যমে এটি সোলার সিস্টেমের সাথে চমৎকারভাবে কাজ করে এবং দ্রুত চার্জিং নিশ্চিত করে।'
  },
  {
    id: 4,
    question: 'Delivery কত দিনে?',
    answer: 'আমরা সাধারণত ঢাকা সিটির ভেতর ২৪ থেকে ৪৮ ঘণ্টার মধ্যে এবং ঢাকার বাইরে ৩ থেকে ৫ কার্যদিবসের মধ্যে দ্রুত ও নিরাপদ হোম ডেলিভারি নিশ্চিত করি।'
  },
  {
    id: 5,
    question: 'Warranty কিভাবে কাজ করে?',
    answer: 'প্রতিটি ব্যাটারির সাথে আমরা ১০ বছরের অফিসিয়াল রিপ্লেসমেন্ট ওয়ারেন্টি প্রদান করি। যেকোনো ধরনের উৎপাদনজনিত ত্রুটির জন্য আমাদের কাস্টমার কেয়ারে যোগাযোগ করলে দ্রুত সমাধান পেয়ে যাবেন।'
  }
];

function FAQs() {
  // First item is expanded by default to match the reference image
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        
        {/* Section Heading */}
        <h2 className="text-[#1a1a1a] font-extrabold text-2xl md:text-3xl text-center font-sans mb-12">
          প্রশ্ন ও উত্তর
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
                className="flex items-center justify-between w-full text-left font-bold text-[#1a1a1a] text-[15px] sm:text-[17px] md:text-lg focus:outline-none select-none hover:text-[#C51C1C] transition-colors duration-200"
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