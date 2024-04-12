import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import AudioGearSection from "../components/AudioGearSection";
import SectionProducts from "../components/SectionProducts"

function xx59Headphones() {
  return (
    <>
      <Header />
      <div className="text-black-400  mt-4 md:mt-8 lg:mt-20 mb-6 lg:mb-14">
        <Link href="/"><button>GoBack</button></Link>
      </div>
      <div className="flex flex-col items-center md:flex-row md:space-x-20 lg:space-x-32 ">
        <div className="max-w-[540px] md:w-[281px] lg:w-auto mb-8 rounded-xl overflow-hidden flex-shrink-0">
          <picture>
            <source media="(min-width: 1110px)" srcSet="/img/product-xx59-headphones/desktop/image-product.jpg" />
            <source media="(min-width: 768px)" srcSet="/img/product-xx59-headphones/tablet/image-product.jpg" />
            <Image src="/img/product-xx59-headphones/mobile/image-product.jpg" alt="xx59 headphones" width={250} height={250} />
          </picture>
        </div>
        <div className="text-left">
          <span className="overline-text text-orange-600 mb-6 inline-block">New product</span>
          <h1 className="mb-6">XX59 HEADPHONES</h1>
          <p className="mb-6">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
          <span className=" mb-8 inline-block">$8&nbsp;99</span>
          <div className="flex flex-row space-x-4">
            <div className="w-[120px]">
              <div role="slider" aria-valuenow="1" aria-valuemin="0" tabIndex="0" className="number-input">
                <button tabIndex="-1">-</button><span>1</span><button tabIndex="-1">+</button>
              </div>
            </div>
            <button className="" value="xx99-mark-two-headphones">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[640px]">
        <h2 className=" md:h3 mb-6 md:mb-8">Features</h2>
        <p className="mb-6">These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</p>
      </div>
      <div className="mt-24 md:mt-28 lg:mt-0 md:flex md:flex-row lg:flex-col md:space-x-40 lg:space-x-0">
        <h2 className="mb-6 md:mb-8 ">In the box</h2>
        <ul>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> Headphone unit</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">2x</span> Replacement earcups</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> User manual</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> 3.5mm 5m audio cable</li>
        </ul>
      </div>
      <div className=" mt-20 md:flex md:space-x-[20px] lg:space-x-8 ">
        <div className="md:space-y-[20px] lg:space-y-8">
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-xx59-headphones/desktop/image-gallery-1.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-xx59-headphones/tablet/image-gallery-1.jpg" />
              <Image src="/img/product-xx59-headphones/mobile/image-gallery-1.jpg" alt="gallery item 1" width={250} height={250} />
            </picture>
          </div>
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-xx59-headphones/desktop/image-gallery-2.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-xx59-headphones/tablet/image-gallery-2.jpg" />
              <Image src="/img/product-xx59-headphones/mobile/image-gallery-2.jpg" alt="gallery item 2" width={250} height={250} />
            </picture>
          </div>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-xx59-headphones/desktop/image-gallery-3.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-xx59-headphones/tablet/image-gallery-3.jpg" />
              <Image src="/img/product-xx59-headphones/mobile/image-gallery-3.jpg" alt="gallery item 3" width={250} height={250} />
            </picture>
          </div>
        </div>
      </div>
      <section className="mt-[120px] ">
        <h2 className=" md:h3 mb-10 text-center">You may also like</h2>
        <div className="space-y-14 md:space-y-0 md:space-x-4 lg:space-x-8 md:flex md:flex-row">
          <div className="flex flex-col items-center justify-between">
            <div className="rounded-xl overflow-hidden mb-8">
              <picture>
                <source media="(min-width: 1110px)" srcSet="/img/shared/desktop/image-xx99-mark-two-headphones.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/shared/tablet/image-xx99-mark-two-headphones.jpg" />
                <Image src="/img/shared/mobile/image-xx99-mark-two-headphones.jpg" alt="xx99 mark one headphones"  width={250} height={250}/>
              </picture>
            </div>
            <h3 className=" mb-8 text-center">XX99 MARK II</h3>
            <Link href="/product/xx99-mark-two-headphones">
              <button className="button-one">See Product</button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="rounded-xl overflow-hidden mb-8">
              <picture>
                <source media="(min-width: 1110px)" srcSet="/img/shared/desktop/image-xx99-mark-one-headphones.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/shared/tablet/image-xx99-mark-one-headphones.jpg" />
                <Image src="/img/shared/mobile/image-xx99-mark-one-headphones.jpg" alt="xx59 headphones" width={250} height={250} />
              </picture>
            </div>
            <h3 className=" mb-8 text-center">XX59</h3>
            <Link href="/product/xx99-mark-one-headphones">
              <button className="button-one">See Product</button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="rounded-xl overflow-hidden mb-8">
              <picture>
                <source media="(min-width: 1110px)" srcSet="/img/shared/desktop/image-zx9-speaker.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/shared/tablet/image-zx9-speaker.jpg" />
                <Image src="/img/shared/mobile/image-zx9-speaker.jpg" alt="zx9 speaker" width={250} height={250}/>
              </picture>
            </div>
            <h3 className=" mb-8 text-center">ZX9 Speaker</h3>
            <Link href="/product/zx9-speaker"><button className="button-one">See Product</button></Link>
          </div>
        </div>
      </section>
      <SectionProducts/>
      <AudioGearSection />
      <Footer />
    </>
  );
}

export default xx59Headphones;
