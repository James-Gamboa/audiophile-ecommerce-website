import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionProducts from "../components/SectionProducts"
import AudioGearSection from "../components/AudioGearSection";

function Earphones () {
  return(
  <>
  <Header/>
    <h1>EARPHONES</h1>
    <div>
      <picture>
        <source media="(min-width: 1110px)" srcSet="/img/category-headphones/desktop/image-xx59.jpg" />
        <source media="(min-width: 768px)" srcSet="/img/category-earphones/tablet/image-yx1-earphones.jpg" />
      <Image src="/img/category-earphones/mobile/image-yx1-earphones.jpg" alt="yx1 earphones" width={540} height={922.41}/>
      </picture>
    <span>NEW PRODUCT</span>
    <h2>YX1 WIRELESS EARPHONES</h2>
    <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
    <Link href="./product-product-earphones">
      <button>See product</button>
    </Link>
    </div>
    <SectionProducts/>
    <AudioGearSection/>
    <Footer/>
  </>
  )
}

export default Earphones;