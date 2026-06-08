import React from 'react';
import Header from '../../Shared/Header';
import Footer from '../../Shared/Footer';
import Container from '../../Layout/Container/Container';
import Inputform from './Inputform';
import ConfirmsectionRightside from './ConfirmsectionRightside';

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Header */}
      <Header />

      {/* Main Checkout Area */}
      <main className="flex-grow py-10 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">
            
            {/* Left Side: Scrollable Input Form */}
            <div className="w-full lg:w-[55%] flex flex-col">
              <Inputform />
            </div>

            {/* Right Side: Sticky Checkout Order Panel */}
            <div className="w-full lg:w-[45%] lg:sticky lg:top-[100px] z-20">
              <ConfirmsectionRightside />
            </div>

          </div>
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;