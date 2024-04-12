import Header from "./components/Header";
import Link from "next/link";
import SectionProducts from "./components/SectionProducts";
import Image from "next/image";
import Footer from "./components/footer";
import AudioGearSection from "./components/AudioGearSection";

function Home() {
  return (
    <>
      <Header />
      <div className="flex justify-center lg:justify-start">
        <picture>
          <source media="(min-width: 1110px)" srcSet="/img/home/desktop/image-hero.jpg" />
          <source media="(min-width: 768px)" srcSet="/img/home/tablet/image-hero.jpg" />
          <Image src="/img/home/mobile/image-hero.jpg" alt="Image Hero" width={250} height={250} />
        </picture>
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start pt-[198px] md:pt-[216px] lg:pt-[225px] text-white-100 md:max-w-[350px]">
          <span className="overline-text inline-block mb-4 md:mb-6 text-black-400">New product</span>
          <h1 className="md:h1 mb-6">XX99 Mark II Headphones</h1>
          <p className="mb-[28px] md:mb-10">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link href="./product-xx99-mark-two-headphones">
            <button className="button-one">See product</button>
          </Link>
        </div>
      </div>
      <SectionProducts />
      <div className="text-center">
        <Image src="/img/shared/desktop/image-speakers.png" alt="speakers" height={200} width={300} />
        <h2>ZX9 SPEAKER</h2>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link href="/">
          <button>See Product</button>
        </Link>
      </div>
      <div className="text-center">
        <Image src="/img/product-zx7-speaker/desktop/image-gallery-3.jpg" alt="speaker" height={200} width={300} />
        <h2>ZX7 SPEAKER</h2>
        <Link href="/">
          <button>See Product</button>
        </Link>
      </div>
      <div className="text-center">
        <Image src="/img/product-yx1-earphones/desktop/image-gallery-2.jpg" alt="earphones" height={200} width={300} />
        <h2>YX1 WIRELESS EARPHONES</h2>
        <Link href="/">
          <button>See Product</button>
        </Link>
      </div>
      <AudioGearSection />
      <Footer />
    </>
  );
}

export default Home;
