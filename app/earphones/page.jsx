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
      <Image src="/img/category-earphones/desktop/image-yx1-earphones.jpg" alt="yx1 earphones" width={540} height={922.41}/>
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