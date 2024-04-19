import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";

function Register() {
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
          <div className="flex justify-center mb-32">
            <div className="w-full">
              <h2 className="font-semibold uppercase text-center mb-6">Register</h2>
              <form action="#" id="user-info">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col mb-6">
                    <label htmlFor="name" className="relative text-[12px] font-bold inline-block mb-2 col-span-2">
                      Name
                      <input name="name" value="fein" id="name" placeholder="James Gamboa" className="w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 ring-opacity-100 ring-gray-800 focus:ring-orange-500 focus:ring-2 outline-none border-none bg-white mb-6"/>
                    </label>
                    <label htmlFor="email" className="relative text-[12px] font-bold inline-block mb-2 col-span-2">
                      Email
                      <input type="email" name="email" value="email@email.com" id="email" placeholder="jjguevarag@gmail.com" 
                      className="w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 ring-opacity-100 ring-gray-800 focus:ring-orange-500 focus:ring-2 outline-none border-none bg-white mb-6"/>
                    </label>
                    <label htmlFor="password" className="relative text-[12px] font-bold inline-block mb-2 col-span-2 text-red-600">
                      Password
                      <span className="text-red-600 inline-block float-right absolute right-0 top-0">Must have # and a-z</span>
                      <input name="password" value="dasdasdas" id="password" placeholder="123456" 
                        className="w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 ring-opacity-100 ring-gray-800 focus:ring-orange-500 focus:ring-2 outline-none border-none bg-white mb-6 ring-red-600"/>
                    </label>
                  </div>
                  <button className="button-one mb-6" type="submit">Register</button>
                  <p className="text-gray-600 opacity-100 text-center"> Don't have an account? 
                  <Link className="underline" href="/login">Please login</Link>
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

export default Register;
