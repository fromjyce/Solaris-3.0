import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-3">
            <Image src="/ecosphere_logo.png" alt="EcoSphere Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold kumbhSans text-[#239d12ff] hover:text-[#072000ff]">EcoSphere</h1>
          </div>
          <nav className="flex space-x-6 afacad font-bold text-lg text-[#072000ff]">
            <a href="#home" className='hover:text-[#239d12ff]'>Home</a>
            <a href="#features" className='hover:text-[#239d12ff]'>Features</a>
            <a href="#how-it-works" className='hover:text-[#239d12ff]'>How It Works</a>
            <a href="/sign-in" className='hover:text-[#239d12ff]'>Sign In</a>
            <a href="/sign-up" className='hover:text-[#239d12ff]'>Sign Up</a>
          </nav>
        </div>
      </header>
      <section id="home" className="bg-gradient-to-br from-green-500 to-blue-600 text-white py-8">
        <div className="container mx-auto text-center px-8">
          <h2 className="text-4xl font-bold mb-4 gabarito">Join the Green Revolution</h2>
          <p className="text-2xl mb-6 afacad">
            Redefining Energy with Decentralized Trading & Solar Ownership.
          </p>
          <div className="mx-auto w-3/4 lg:w-1/2 relative">
            <Image 
              src="/main.png" 
              alt="Hero Visual" 
              layout="responsive" 
              width={668} 
              height={374} 
            />
          </div>
        </div>
      </section>
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-12 kumbhSans">Key Features</h3>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/blockchain.png" alt="Feature 1" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Blockchain-Based Energy Trading</h4>
              <p className='afacad'>Decentralized, transparent, and tamper-proof trading of renewable energy credits.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/solar.png" alt="Feature 2" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Fractional Solar Ownership</h4>
              <p className='afacad'>Own fractions of solar projects as programmable NFTs and trade them easily.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/price.png" alt="Feature 3" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">AI-Driven Dynamic Pricing</h4>
              <p className='afacad'>AI optimizes energy trading by predicting peak generation and market demands.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12 kumbhSans">How It Works</h3>
          <div className="flex flex-col lg:flex-row lg:space-x-10">
            <div className="lg:w-1/3 mb-10 lg:mb-0 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/account.png" alt="Step 1" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Create an Account</h4>
              <p className='afacad'>Sign up and set up your profile for renewable energy trading and ownership.</p>
            </div>
            <div className="lg:w-1/3 mb-10 lg:mb-0 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/explore.png" alt="Step 2" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Explore Features</h4>
              <p className='afacad'>Buy/sell RECs, invest in solar projects, and take part in sustainability challenges.</p>
            </div>
            <div className="lg:w-1/3 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/coins.png" alt="Step 3" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Trade & Earn</h4>
              <p className='afacad'>Start trading and earning through AI-driven pricing and blockchain technology.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#072000ff] text-white py-2">
        <div className="container mx-auto text-center kumbhSans">
         Developed by <strong>Team Simpsons</strong> for <strong>I ❤️ Hackathon</strong>
        </div>
      </footer>
    </div>
  );
}
