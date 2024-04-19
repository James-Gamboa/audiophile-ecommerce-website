import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionProducts from "../components/SectionProducts"
import AudioGearSection from "../components/AudioGearSection";

function Speakers () {
  return(
  <>
  <Header/>
    <h1>SPEAKERS</h1>
    <div>
    <picture>
      <source media="(min-width: 1110px)" srcSet="/img/category-speakers/desktop/image-zx9.jpg" />
      <source media="(min-width: 768px)" srcSet="/img/category-speakers/tablet/image-zx9.jpg" />
      <Image src="/img/category-speakers/mobile/image-zx9.jpg" alt="zx9 speaker" width={540} height={922.41}/>
    </picture> 
    <span>NEW PRODUCT</span>
    <h2>ZX9 SPEAKER</h2>
    <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -creating new possibilities for more pleasing and practical audio setups.</p>
    <Link href="./product-zx9-speaker">
      <button>See product</button>
    </Link>
    </div>
    <div>
    <picture>
      <source media="(min-width: 1110px)" srcSet="img/category-speakers/desktop/image-zx7.jpg" />
      <source media="(min-width: 768px)" srcSet="img/category-speakers/tablet/image-zx7.jpg"/>
      <Image src="/img/category-speakers/mobile/image-zx7.jpg" alt="zx7 speaker" width={540} height={922.41}/>
      </picture> 
    <h2>ZX7 SPEAKER</h2>
    <p>Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
    <Link href="./product-zx7-speaker">
      <button>See product</button>
    </Link>
    </div>
    <SectionProducts/>
    <AudioGearSection/>
    <Footer/>
  </>
  )
}

export default Speakers;