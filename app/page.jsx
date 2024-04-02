import Header from "./components/Header";
import Link from "next/link";
import SectionProducts from "./components/SectionProducts"
import Image from "next/image";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <span>New product</span>
      <h1>XX99 Mark II Headphones</h1>
      <Link href="./product-xx99-mark-two-headphones">
        <button>See product</button>
      </Link>
      <SectionProducts/>
      <div>
      <Image src="/img/shared/desktop/image-speakers.png" alt="speakers" height={200} width={300} />
      <h2>ZX9 SPEAKER</h2>
      <p>  Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
      <Link href="/">
        <button>See Product</button>
      </Link>
      </div>
      <Image src="/img/product-zx7-speaker/desktop/image-gallery-3.jpg" alt="speaker" height={200} width={300} />
      <div>
      <Image src="/img/product-yx1-earphones/desktop/image-gallery-2.jpg" alt="earphones" height={200} width={300} />
      <h2>YX1 WIRELESS EARPHONES</h2>
      <Link href="/">
        <button>See Product</button>
      </Link>
      </div>
      <Image src="/img/shared/desktop/image-best-gear.jpg" alt="best gear" height={200} width={300} />
      <h2>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
      <p> Bringing you the best audio gear
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
          earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
          rooms available for you to browse and experience a wide range of our products. Stop by our store 
          to meet some of the fantastic people who make Audiophile the best place to buy your portable 
          audio equipment.</p>
      <Footer/>
    </>
  );
}