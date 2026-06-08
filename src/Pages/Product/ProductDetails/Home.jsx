import React from 'react';
import Header from '../../../Shared/Header';
import Footer from '../../../Shared/Footer';
import Container from '../../../Layout/Container/Container';
import Images from './Images';
import Details from './Details';

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header at the top */}
      <Header />

      {/* Main Product Detail Content */}
      <main className="flex-grow py-10 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start relative">
            
            {/* Left Side: Product Images (Fixed/Sticky on large screens) */}
            <div className="w-full lg:w-[48%] lg:sticky lg:top-[100px] z-20">
              <Images />
            </div>

            {/* Right Side: Scrollable Product Details */}
            <div className="w-full lg:w-[52%] flex flex-col">
              <Details />
            </div>

          </div>
        </Container>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default Home;