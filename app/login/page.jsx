import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <div className="relative bg-black">
        <div className="z-10 relative">
          <Header />
        </div>
        <div className="text-gray-600 opacity-100 mx-6 md:mx-10 lg:mx-auto lg:max-w-1110 mt-4 md:mt-8 lg:mt-20 mb-6 lg:mb-14">
          <Link href="/">
            <button className="bg-opacity-30 bg-orange-600 text-gray-200 px-4 py-2 rounded">GoBack</button>
          </Link>
        </div>
        <div className="mx-6 md:mx-10 lg:mx-auto lg:max-w-1110 flex justify-center">
          <div className="mb-32">
            <h2 className="font-semibold uppercase text-center mb-6">Login</h2>
            <form action="#" id="login">
              <div className="flex flex-col items-center">
                <div className="flex flex-col mb-6">
                  <label htmlFor="email" className="relative text-sm font-bold inline-block mb-2">
                    Email
                    <input name="email" id="email" placeholder="jjguevarag@gmail.com" type="email" className="w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 ring-opacity-100 ring-gray-800 focus:ring-orange-500 focus:ring-2 outline-none border-none bg-white mb-6" value=""/>
                  </label>
                  <label htmlFor="password" className="relative text-sm font-bold inline-block mb-2">
                    Password
                    <input name="password" id="password" placeholder="123456" type="password" className="w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 ring-opacity-100 ring-gray-800 focus:ring-orange-500 focus:ring-2 outline-none border-none bg-white mb-6" value=""/>
                  </label>
                </div>
                <button className="bg-opacity-30 bg-orange-600 text-gray-200 px-6 py-3 rounded mb-6" type="submit">Login</button>
                <p className="text-gray-600 opacity-100 text-center">
                  Don't have an account? 
                  <Link href="/register" className="underline">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Login;
