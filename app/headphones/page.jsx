import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionProducts from "../components/SectionProducts"
import AudioGearSection from "../components/AudioGearSection";

function Headphones () {
  return(
    <>
    <Header/>
    <h1>HEADPHONES</h1>
    <div>
      <Image src="/img/category-headphones/desktop/image-xx99-mark-two.jpg" alt="xx99 mark two headphone" width={540} height={922.41}/>
    <span>NEW PRODUCT</span>
    <h2>XX99 MARK II HEADPHONES</h2>
    <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
    <Link href="./product-xx99-mark-two-headphones">
      <button>See product</button>
    </Link>
    </div>
    <div>
    <Image src="/img/category-headphones/desktop/image-xx99-mark-one.jpg" alt="xx99 mark one headphone" width={540} height={922.41}/>
    <h2>XX99 MARK I HEADPHONES</h2>
    <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
    <Link href="./product-xx99-mark-one-headphones">
      <button>See product</button>
    </Link>
    </div>
    <div>
    <Image src="/img/category-headphones/desktop/image-xx59.jpg" alt="xx59 headphone" width={540} height={922.41}/>
    <h2>XX59 HEADPHONES</h2>
    <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
    <Link href="./product-xx59-headphones">
      <button>See product</button>
    </Link>
    </div>
    <SectionProducts/>
    <AudioGearSection/>
    <Footer/>
    </>
  )
}

export default Headphones;