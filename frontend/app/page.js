import React from 'react';
import Image from 'next/image';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans">
      <div>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-3">
            <Image src="/ecosphere_logo.png" alt="EcoSphere Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold kumbhSans text-[#239d12ff] hover:text-[#072000ff]">Solaris 2.0</h1>
          </div>
          <nav className="flex space-x-6 afacad font-bold text-lg text-[#072000ff]">
            <a href="#home" className='hover:text-[#239d12ff]'>Home</a>
            <a href="#features" className='hover:text-[#239d12ff]'>Features</a>
            <a href="#how-it-works" className='hover:text-[#239d12ff]'>How It Works</a>
            <Link href="/sign-in" className='hover:text-[#239d12ff]'>Sign In</Link>
            <Link href="/sign-up" className='hover:text-[#239d12ff]'>Sign Up</Link>
          </nav>
        </div>
      </header>
    </div>
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
                <Image src="/features/blockchain.png" alt="Feature 1" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Blockchain-Based Energy Trading</h4>
              <p className='afacad'>Transparent, tamper-proof trading of renewable energy credits (RECs) powered by blockchain technology.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/features/solar.png" alt="Feature 2" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Fractional Solar Ownership</h4>
              <p className='afacad'>Own fractions of renewable energy projects as tokenized assets for easy access and trading.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/features/price.png" alt="Feature 3" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">AI-Driven Dynamic Pricing</h4>
              <p className='afacad'>Advanced AI algorithms ensure fair and optimized pricing for energy credits based on real-time market conditions.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/features/gamification.png" alt="Feature 4" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Eco-Gamification Rewards</h4>
              <p className='afacad'>Earn tokenized rewards for supporting eco-friendly practices like carbon offsetting and green project investments.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/features/border.png" alt="Feature 5" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Cross-Border REC Exchange</h4>
              <p className='afacad'>Seamless trading of renewable energy credits across borders, enabling global accessibility and participation.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/features/security.png" alt="Feature 6" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Quantum-Resistant Security</h4>
              <p className='afacad'>Future-proof transactions with lattice-based encryption to ensure data security in the post-quantum era.</p>
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
                <Image src="/steps/account.png" alt="Step 1" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Register and Invest</h4>
              <p className='afacad'>Start your journey towards clean energy ownership in just a few clicks!</p>
            </div>
            <div className="lg:w-1/3 mb-10 lg:mb-0 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/steps/energy.png" alt="Step 2" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Monitor Energy Generation</h4>
              <p className='afacad'>Track real-time solar energy production and performance effortlessly.</p>
            </div>
            <div className="lg:w-1/3 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/steps/trade.png" alt="Step 3" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Trade Renewable Energy Credits (RECs)</h4>
              <p className='afacad'>Buy, sell, or stake energy credits securely on a global marketplace.</p>
            </div>
            <div className="lg:w-1/3 flex flex-col items-center text-center">
              <div className="flex justify-center items-center h-32 w-32 mb-4">
                <Image src="/steps/coins.png" alt="Step 3" width={100} height={100} />
              </div>
              <h4 className="text-xl font-bold mb-2 gabarito">Earn Dividends and Rewards</h4>
              <p className='afacad'>Reap financial benefits and sustainability rewards for every investment.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
