import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import AudioGearSection from "../components/AudioGearSection";
import SectionProducts from "../components/SectionProducts"

function Zx9Speaker() {
  return (
    <>
      <Header />
      <div className="text-black-400  mt-4 md:mt-8 lg:mt-20 mb-6 lg:mb-14">
        <Link href="/"><button>GoBack</button></Link>
      </div>
      <div className="flex flex-col items-center md:flex-row md:space-x-20 lg:space-x-32 ">
        <div className="max-w-[540px] md:w-[281px] lg:w-auto mb-8 rounded-xl overflow-hidden flex-shrink-0">
          <picture>
            <source media="(min-width: 1110px)" srcSet="/img/product-zx9-speaker/desktop/image-product.jpg" />
            <source media="(min-width: 768px)" srcSet="/img/product-zx9-speaker/tablet/image-product.jpg" />
            <Image src="/img/product-zx9-speaker/mobile/image-product.jpg" alt="zx9 speaker" width={250} height={250} />
          </picture>
        </div>
        <div className="text-left">
          <span className="overline-text text-orange-600 mb-6 inline-block">New product</span>
          <h1 className="mb-6">ZX9 SPEAKER</h1>
          <p className="mb-6">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <span className=" mb-8 inline-block">$4&nbsp;500</span>
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
        <p className="mb-6">Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).</p>
        <p className="mb-6">Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.</p>
      </div>
      <div className="mt-24 md:mt-28 lg:mt-0 md:flex md:flex-row lg:flex-col md:space-x-40 lg:space-x-0">
        <h2 className="mb-6 md:mb-8 ">In the box</h2>
        <ul>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">2x</span> Speaker Unit</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">2x</span> Speaker Cloth Panel</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> User manual</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> 3.5mm 10m Audio Cable</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> 10m Optical Cable</li>
        </ul>
      </div>
      <div className=" mt-20 md:flex md:space-x-[20px] lg:space-x-8 ">
        <div className="md:space-y-[20px] lg:space-y-8">
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-zx9-speaker/desktop/image-gallery-1.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-zx9-speaker/tablet/image-gallery-1.jpg" />
              <Image src="/img/product-zx9-speaker/mobile/image-gallery-1.jpg" alt="gallery item 1" width={250} height={250} />
            </picture>
          </div>
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-zx9-speaker/desktop/image-gallery-2.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-zx9-speaker/tablet/image-gallery-2.jpg" />
              <Image src="/img/product-zx9-speaker/mobile/image-gallery-2.jpg" alt="gallery item 2" width={250} height={250} />
            </picture>
          </div>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-zx9-speaker/desktop/image-gallery-3.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-zx9-speaker/tablet/image-gallery-3.jpg" />
              <Image src="/img/product-zx9-speaker/mobile/image-gallery-3.jpg" alt="gallery item 3" width={250} height={250} />
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
                <source media="(min-width: 1110px)" srcSet="/img/category-speakers/desktop/image-zx7.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/category-speakers/tablet/image-zx7.jpg" />
                <Image src="/img/category-speakers/mobile/image-zx7.jpg" alt="zx7 speaker"  width={250} height={250}/>
              </picture>
            </div>
            <h3 className=" mb-8 text-center">ZX7 SPEAKER</h3>
            <Link href="/product/zx7-speaker">
              <button className="button-one">See Product</button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="rounded-xl overflow-hidden mb-8">
              <picture>
                <source media="(min-width: 1110px)" srcSet="/img/category-headphones/desktop/image-xx99-mark-one.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/category-headphones/tablet/image-xx99-mark-one.jpg" />
                <Image src="/img/category-headphones/mobile/image-xx99-mark-one.jpg" alt="xx99 mark one" width={250} height={250} />
              </picture>
            </div>
            <h3 className=" mb-8 text-center">XX99 MARK I</h3>
            <Link href="/product/xx99-mark-one-headphones">
              <button className="button-one">See Product</button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="rounded-xl overflow-hidden mb-8">
              <picture>
                <source media="(min-width: 1110px)" srcSet="/img/category-headphones/desktop/image-xx59.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/category-headphones/tablet/image-xx59.jpg" />
                <Image src="/img/category-headphones/mobile/image-xx59.jpg" alt="xx59 headphones" width={250} height={250}/>
              </picture>
            </div>
            <h3 className=" mb-8 text-center">XX59</h3>
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

export default Zx9Speaker;