import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";

function Checkout() {
  return (
      <div className="relative overflow-x-hidden">
        <div className="bg-black-900 text-white-100">
          <div className="flex items-center justify-between md:justify-start lg:justify-between py-8 ">
            <button className="lg:hidden "></button>
            <div className="md:ml-10 lg:ml-0">
            </div>
          <Header/>
            <div className="md:ml-auto lg:ml-0 flex items-center space-x-2">
              <button className=""></button>
            </div>
          </div>
        </div>
        <main>
          <div className="text-black-400  mt-4 md:mt-8 lg:mt-20 mb-6 lg:mb-14">
            <Link href="/"><button>GoBack</button></Link>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 lg:mb-[140px] ">
            <section className="px-6 lg:px-12  pt-6 md:pt-8 lg:pt-14 bg-white-100 rounded-lg mb-8">
              <h2 className="mb-8 lg:mb-10">Checkout</h2>
              <form action="#" id="user-info">
                <div className="border rounded-lg p-3 mb-6">
                  <button className="button-two mb-2">Login</button>
                  <p className="my-2">Or</p>
                  <p className="">Continue as guest:</p>
                </div>
                <div className="pb-2">
                  <h3 className="subtitle text-orange-600 mb-4">Billing Details</h3>
                  <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-4">
                    <label for="name" className="relative text-[12px] font-bold inline-block mb-2 col-span-2">
                      Name
                      <input name="name" id="name" placeholder="Alexei Ward" className="mt-2 w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 grey-ring focus:orange-ring focus:ring-2 outline-none border-none bg-white-100 mb-6 undefined" value="" />
                    </label>
                    <label for="email" className="relative text-[12px] font-bold inline-block mb-2 col-span-2">
                      Email Address
                      <input name="email" id="email" placeholder="alexei@gmail.com" type="email" className="mt-2 w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 grey-ring focus:orange-ring focus:ring-2 outline-none border-none bg-white-100 mb-6 undefined" value="" />
                    </label>
                    <label for="phone" className="relative text-[12px] font-bold inline-block mb-2 col-span-2">
                      Phone Number
                      <input name="phone" id="phone" placeholder="+1 202-555-1036" className="mt-2 w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 grey-ring focus:orange-ring focus:ring-2 outline-none border-none bg-white-100 mb-6 undefined" value="" />
                    </label>
                  </div>
                </div>
                <div className="pb-2">
                  <h3 className="subtitle text-orange-600 mb-4">Shipping Info</h3>
                  <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-4">
                    <label for="address" className="relative text-[12px] font-bold inline-block mb-2 col-span-2">
                      Address
                      <input name="address" id="address" placeholder="1137 Williams Avenue" className="mt-2 w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 grey-ring focus:orange-ring focus:ring-2 outline-none border-none bg-white-100 mb-6 undefined" value="" />
                    </label>
                    <label for="zip" className="relative text-[12px] font-bold inline-block mb-2">
                      ZIP Code
                      <input name="zip" id="zip" placeholder="10002" className="mt-2 w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 grey-ring focus:orange-ring focus:ring-2 outline-none border-none bg-white-100 mb-6 undefined" value="" />
                    </label>
                    <label for="city" className="relative text-[12px] font-bold inline-block mb-2">
                      City
                      <input name="city" id="city" placeholder="New York" className="mt-2 w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 grey-ring focus:orange-ring focus:ring-2 outline-none border-none bg-white-100 mb-6 undefined" value="" />
                    </label>
                    <label for="country" className="relative text-[12px] font-bold inline-block mb-2">
                      Country
                      <input name="country" id="country" placeholder="United States" className="mt-2 w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 grey-ring focus:orange-ring focus:ring-2 outline-none border-none bg-white-100 mb-6 undefined" value="" />
                    </label>
                  </div>
                </div>
                <div className="pb-2">
                  <h3 className="subtitle text-orange-600 mb-4">Payment Details</h3>
                  <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-4">
                    <div id="my-radio-group" className="text-[12px] font-bold mb-2">
                      Payment Method
                    </div>
                    <div role="group" aria-labelledby="my-radio-group" className="flex flex-col mb-2">
                      <label className="ring-1 ring-orange-600 rounded-lg py-3 px-6 max-w-[309px] hover:ring-orange-600 focus:ring-orange-600 outline-none focus:ring-2 mb-4 ">
                        <input name="payment_method" type="radio" className="mr-4 text-orange-600 border-black-200 focus:ring-white-100" value="emoney" checked="" />
                        e-money
                      </label>
                      <label className="ring-1 ring-black-200 rounded-lg py-3 px-6 max-w-[309px] hover:ring-orange-600 focus:ring-orange-600 outline-none focus:ring-2  mb-2 ">
                        <input name="payment_method" type="radio" className="mr-4 text-orange-600 border-black-200 focus:ring-white-100" value="cash" />
                        Cash on Delivery
                      </label>
                    </div>
                    <label for="emoney_number" className="relative text-[12px] font-bold inline-block mb-2">
                      e-money Number
                      <input name="emoney_number" id="emoney_number" placeholder="12345678911" className="mt-2 w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 grey-ring focus:orange-ring focus:ring-2 outline-none border-none bg-white-100 mb-6 undefined" value="" />
                    </label>
                    <label for="emoney_pin" className="relative text-[12px] font-bold inline-block mb-2">
                      e-moeny PIN
                      <input name="emoney_pin" id="emoney_pin" placeholder="1234" className="mt-2 w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 grey-ring focus:orange-ring focus:ring-2 outline-none border-none bg-white-100 mb-6 undefined" value="" />
                    </label>
                  </div>
                </div>
              </form>
            </section>
            <div className="lg:w-[350px] lg:flex-shrink-0">
              <aside className="p-6 bg-white-100 rounded-lg mb-24">
                <h3 className="text-lg uppercase font-bold mb-8">Summary</h3>
                <div className="">
                  <div className="flex justify-between items-center mb-6">
                    <div className="mr-4 max-w-[64px] rounded-lg overflow-hidden">
                      <Image src="/img/cart/image-xx99-mark-two-headphones.jpg" alt=""  width={250} height={250} />
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="font-bold uppercase">XX99</p>
                      <p className="text-black-400">$2&nbsp;999</p>
                    </div>
                    <div>
                      <p className="text-black-400">x1</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="font-extralight uppercase">Total</p>
                    <p className="font-bold text-lg">$ 2&nbsp;999</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="font-extralight uppercase">Shipping</p>
                    <p className="font-bold text-lg">$ 50</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="font-extralight uppercase">VAT (Included)</p>
                    <p className="font-bold text-lg">$ 599,80</p>
                  </div>
                  <div className="flex justify-between mb-8 pt-2">
                    <p className="font-extralight uppercase">Grand Total</p>
                    <p className="font-bold text-lg text-orange-600">$ 3&nbsp;648,80</p>
                  </div>
                </div>
                <button className="button-one w-full" type="submit" form="user-info">Continue &amp; Pay</button>
              </aside>
            </div>
          </div>
        </main>
        <Footer/> 
      </div>
  );
}


export default Checkout;