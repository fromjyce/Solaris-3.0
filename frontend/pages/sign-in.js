import Image from 'next/image';
import Footer from '@/components/footer';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/context/useAuth';
import { useRouter } from 'next/router';
import { TbInfoSquareRoundedFilled } from "react-icons/tb";

export default function SignIn() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      router.push('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
      <Head>
        <title>Sign In | Solaris 2.0</title>
      </Head>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg flex w-3/4 lg:w-1/2">
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-3 gabarito">Sign In to{" "}
              <Link href="/" className="text-[#3f8649ff] font-bold hover:underline hover:text-[#52925b]">
                Solaris 2.0
              </Link>
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-gray-700 afacad">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="afacad w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-[#3f8649ff] focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-700 afacad">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="afacad w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-[#3f8649ff] focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full gabarito bg-[#3f8649ff] text-white py-2 rounded-lg hover:bg-[#52925b] transition"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 p-2 border-2 border-yellow-500 bg-[#fbf0ce] flex items-center space-x-2 rounded-lg">
              <TbInfoSquareRoundedFilled className="text-yellow-500" size={45} />
              <p className="text-base text-gray-700 afacad">
                This is a demo page. You can use <strong className='text-[#52925b]'>root@gmail.com</strong> and <strong className='text-[#52925b]'>root123#</strong> as credentials.
              </p>
            </div>
            <p className="text-gray-600 text-sm mt-4 gabarito">
              Don’t have an account?{' '}
              <Link href="/sign-up" className="text-[#3f8649ff] font-bold hover:underline hover:text-[#52925b]">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="w-1/2 bg-[#3f8649ff] text-white flex flex-col justify-center items-center p-8 rounded-r-lg">
            <Image
              src="/image.png"
              alt="EcoSphere Logo"
              width={80}
              height={80}
              className="mb-4"
              priority
            />
            <h2 className="text-3xl font-bold kumbhSans">Solaris 2.0</h2>
            <p className="text-center mt-4 gabarito">
              Join the green revolution and trade renewable energy credits with ease.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
