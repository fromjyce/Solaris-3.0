import Image from 'next/image';
import Footer from '@/components/footer';
import Head from 'next/head';
import Link from 'next/link';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up | EcoSphere</title>
      </Head>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg flex w-3/4 lg:w-1/2">
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-3 gabarito">Create Your{" "}
              <Link href="/" className="text-[#3f8649ff] font-bold hover:underline hover:text-[#52925b]">
                EcoSphere
              </Link> {" "} Account
            </h2>
            <form className="space-y-4 afacad">
            <div>
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-[#3f8649ff] focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-[#3f8649ff] focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-[#3f8649ff] focus:outline-none"
                placeholder="Create a password"
              />
            </div>
            <button
              type="submit"
              className="w-full gabarito bg-[#3f8649ff] text-white py-2 rounded-lg hover:bg-[#52925b] transition"
            >
              Sign Up
            </button>
          </form>
            <p className="text-gray-600 text-sm mt-4 gabarito">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-[#3f8649ff] font-bold hover:underline hover:text-[#52925b]">
                Sign In
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
            <h2 className="text-3xl font-bold kumbhSans">EcoSphere</h2>
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
