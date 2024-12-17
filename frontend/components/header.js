import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
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
            <a href="/sign-in" className='hover:text-[#239d12ff]'>Sign In</a>
            <a href="/sign-up" className='hover:text-[#239d12ff]'>Sign Up</a>
          </nav>
        </div>
      </header>
    </div>
  );
}
