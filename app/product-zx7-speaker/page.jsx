import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import AudioGearSection from "../components/AudioGearSection";
import SectionProducts from "../components/SectionProducts"

function Zx7Speaker() {
  return (
    <>
      <Header />
      <div className="text-black-400  mt-4 md:mt-8 lg:mt-20 mb-6 lg:mb-14">
        <Link href="/"><button>GoBack</button></Link>
      </div>
      <div className="flex flex-col items-center md:flex-row md:space-x-20 lg:space-x-32 ">
        <div className="max-w-[540px] md:w-[281px] lg:w-auto mb-8 rounded-xl overflow-hidden flex-shrink-0">
          <picture>
            <source media="(min-width: 1110px)" srcSet="/img/product-zx7-speaker/desktop/image-product.jpg" />
            <source media="(min-width: 768px)" srcSet="/img/product-zx7-speaker/tablet/image-product.jpg" />
            <Image src="/img/product-zx7-speaker/mobile/image-product.jpg" alt="zx7 speaker" width={250} height={250} />
          </picture>
        </div>
        <div className="text-left">
          <h1 className="mb-6">ZX7 SPEAKER</h1>
          <p className="mb-6">Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
          <span className=" mb-8 inline-block">$3&nbsp;500</span>
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
        <p className="mb-6">Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.</p>
        <p className="mb-6">The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.</p>
      </div>
      <div className="mt-24 md:mt-28 lg:mt-0 md:flex md:flex-row lg:flex-col md:space-x-40 lg:space-x-0">
        <h2 className="mb-6 md:mb-8 ">In the box</h2>
        <ul>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">2x</span> Speaker Unit</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">2x</span> Speaker Cloth Panel</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> User manual</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> 3.5mm 7.5m Audio Cable</li>
          <li className="mb-2"><span className="text-orange-600 font-bold tracking-wide mr-6">1x</span> 7.5m Optical Cable</li>
        </ul>
      </div>
      <div className=" mt-20 md:flex md:space-x-[20px] lg:space-x-8 ">
        <div className="md:space-y-[20px] lg:space-y-8">
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-zx7-speaker/desktop/image-gallery-1.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-zx7-speaker/tablet/image-gallery-1.jpg" />
              <Image src="/img/product-zx7-speaker/mobile/image-gallery-1.jpg" alt="gallery item 1" width={250} height={250} />
            </picture>
          </div>
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-zx7-speaker/desktop/image-gallery-2.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-zx7-speaker/tablet/image-gallery-2.jpg" />
              <Image src="/img/product-zx7-speaker/mobile/image-gallery-2.jpg" alt="gallery item 2" width={250} height={250} />
            </picture>
          </div>
        </div>
        <div>
          <div className="rounded-xl overflow-hidden mb-[20px] md:mb-0">
            <picture>
              <source media="(min-width: 1110px)" srcSet="/img/product-zx7-speaker/desktop/image-gallery-3.jpg" />
              <source media="(min-width: 768px)" srcSet="/img/product-zx7-speaker/tablet/image-gallery-3.jpg" />
              <Image src="/img/product-zx7-speaker/mobile/image-gallery-3.jpg" alt="gallery item 3" width={250} height={250} />
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
                <source media="(min-width: 1110px)" srcSet="/img/category-speakers/desktop/image-zx9.jpg" />
                <source media="(min-width: 768px)" srcSet="/img/category-speakers/tablet/image-zx9.jpg" />
                <Image src="/img/category-speakers/mobile/image-zx9.jpg" alt="image zx9"  width={250} height={250}/>
              </picture>
            </div>
            <h3 className=" mb-8 text-center">ZX9 SPEAKER</h3>
            <Link href="/product/zx9-speaker">
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
                <Image src="/img/category-headphones/mobile/image-xx59.jpg" alt="xx9 headphones" width={250} height={250}/>
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

export default Zx7Speaker;