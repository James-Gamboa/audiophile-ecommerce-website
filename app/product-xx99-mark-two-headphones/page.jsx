import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import AudioGearSection from "../components/AudioGearSection";
import SectionProducts from "../components/SectionProducts"

function TwoHeadphones() {
  return (
    <>
      <Header />
      <div className="text-black-400 content-container mt-4 md:mt-8 lg:mt-20 mb-6 lg:mb-14">
        <Link href="/"><button>GoBack</button></Link>
      </div>
      <div className="flex flex-col items-center md:flex-row md:space-x-20 lg:space-x-32 ">
        <div className="max-w-[540px] md:w-[281px] lg:w-auto mb-8 rounded-xl overflow-hidden flex-shrink-0">
          <picture>
            <source media="(min-width: 1110px)" srcSet="/img/product-xx99-mark-two-headphones/desktop/image-product.jpg" />
            <source media="(min-width: 768px)" srcSet="/img/product-xx99-mark-two-headphones/tablet/image-product.jpg" />
            <Image src="/img/product-xx99-mark-two-headphones/mobile/image-product.jpg" alt="xx99 mark two headphone" width={250} height={250} />
          </picture>
        </div>
        <div className="text-left">
          <span className="overline-text text-orange-600 mb-6 inline-block">New product</span>
          <h2 className="h4 md:h3 lg:h2 mb-6">XX99 Mark II Headphones</h2>
          <p className="mb-6">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <span className="h6 mb-8 inline-block">$2&nbsp;999</span>
          <div className="flex flex-row space-x-4">
            <div className="w-[120px]">
              <div role="slider" aria-valuenow="1" aria-valuemin="0" tabIndex="0" className="number-input">
                <button tabIndex="-1">-</button><span>1</span><button tabIndex="-1">+</button>
              </div>
            </div>
            <button className="button-one" value="xx99-mark-two-headphones">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[640px]">
        <h2 className="h5 md:h3 mb-6 md:mb-8">Features</h2>
        <p className="mb-6">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
          The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
        </p>
      </div>
      <div className="mt-24 md:mt-28 lg:mt-0 md:flex md:flex-row lg:flex-col md:space-x-40 lg:space-x-0">
        <h2 className="h5 md:h3 mb-6 md:mb-8 ">In the box</h2>
        <ul>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> Headphone unit</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">2x</span> Replacement earcups</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> User manual</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> 3.5mm 5m audio cable</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> Travel bag</li>
        </ul>
      </div>
      <div className="content-container mt-20 md:flex md:space-x-[20px] lg:space-x-8 ">
        <div className="md:space-y-[20px] lg:space-y-8">
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg" />
              <Image src="/img/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg" alt="gallery item 1" width={250} height={250} />
            </picture>
          </div>
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg" />
              <Image src="/img/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg" alt="gallery item 1" width={250} height={250} />
            </picture>
          </div>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg" />
              <Image src="/img/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg" alt="gallery item 1" width={250} height={250} />
            </picture>
          </div>
        </div>
      </div>
      <section className="mt-[120px] content-container">
        <h2 className="h5 md:h3 mb-10 text-center">You may also like</h2>
        <div className="space-y-14 md:space-y-0 md:space-x-4 lg:space-x-8 md:flex md:flex-row">
          <div className="flex flex-col items-center justify-between">
            <div className="rounded-xl overflow-hidden mb-8">
              <picture>
                <source media="(min-width: 1110px)" srcSet="/img/shared/desktop/image-xx99-mark-one-headphones.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/shared/tablet/image-xx99-mark-one-headphones.jpg" />
                <Image src="/img/shared/mobile/image-xx99-mark-one-headphones.jpg" alt="xx59 headphones"  width={250} height={250}/>
              </picture>
            </div>
            <h3 className="h5 mb-8 text-center">XX99 Mark I</h3>
            <Link href="/product/xx99-mark-one-headphones"><button className="button-one">See Product</button></Link>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="rounded-xl overflow-hidden mb-8">
              <picture>
                <source media="(min-width: 1110px)" srcSet="/img/shared/desktop/image-xx59-headphones.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/shared/tablet/image-xx59-headphones.jpg" />
                <Image src="/img/shared/mobile/image-xx59-headphones.jpg" alt="xx59 headphones" width={250} height={250} />
              </picture>
            </div>
            <h3 className="h5 mb-8 text-center">XX59</h3>
            <Link href="/product/xx59-headphones"><button className="button-one">See Product</button></Link>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="rounded-xl overflow-hidden mb-8">
              <picture>
                <source media="(min-width: 1110px)" srcSet="/img/shared/desktop/image-zx9-speaker.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/shared/tablet/image-zx9-speaker.jpg" />
                <Image src="/img/shared/mobile/image-zx9-speaker.jpg" alt="xx59 headphones" width={250} height={250}/>
              </picture>
            </div>
            <h3 className="h5 mb-8 text-center">ZX9 Speaker</h3>
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

export default TwoHeadphones;
