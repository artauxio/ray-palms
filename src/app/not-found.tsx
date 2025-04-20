
import Header from '@/components/Header';
import Link from 'next/link';

const NotFound = () => {
  return (
    <main className="relative flex flex-col items-center justify-center bg-green-50 text-lime-700 min-h-screen px-4">
      
      <Header />

      <div className="flex flex-col items-center justify-center mx-auto flex-grow py-16">
        <div className="flex items-center justify-center flex-col text-center">
          <span className="text-6xl font-medium px-3.5 py-1 rounded-md bg-lime-600 text-white shadow-md">
            404
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mt-5">
            Page Not Found
          </h1>

          <p className="text-base text-lime-600 font-medium mt-5 max-w-xl">
            The page you’re looking for doesn’t seem to exist.
            <br /> But don’t worry! You can always{" "}
            <Link href="/" className="underline hover:text-lime-800 font-semibold">
              contact us
            </Link>
            .
          </p>

          <Link href="/">
            <button className="mt-8 bg-lime-600 hover:bg-lime-700 text-white p-2 rounded-md cursor-pointer">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>

    </main>
  );
};

export default NotFound;
