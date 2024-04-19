import Header from "./components/Header";
import Link from "next/link";
import SectionProducts from "./components/SectionProducts";
import Image from "next/image";
import Footer from "./components/footer";
import AudioGearSection from "./components/AudioGearSection";

function Home() {
    return (
        <>
            <div className="relative bg-black">
                <div className="z-10 relative">
                <Header />
                </div>
                <div className="flex justify-center lg:justify-start items-center relative z-0">
                    <picture className="w-full">
                        <source media="(min-width: 1110px)" srcSet="/img/home/desktop/image-hero.jpg" />
                        <source media="(min-width: 768px)" srcSet="/img/home/tablet/image-hero.jpg" />
                        <Image src="/img/home/mobile/image-hero.jpg" alt="Image Hero" className="w-full h-auto" width={250} height={250} />
                    </picture>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center lg:text-left text-white md:max-w-[350px] px-4 lg:px-0">
                        <span className="overline-text inline-block mb-4 md:mb-6 text-black-400">New product</span>
                        <h1 className="md:h1 mb-6">XX99 Mark II Headphones</h1>
                        <p className="mb-[28px] md:mb-10">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                        <Link href="./product-xx99-mark-two-headphones">
                            <button className="button-one">See product</button>
                        </Link>
                    </div>
                </div>
            </div>
            <SectionProducts />
            <div className="text-center">
                <picture>
                    <source media="(min-width: 1110px)" srcSet="/img/shared/desktop/image-speakers.png" />
                    <source media="(min-width: 768px)" srcSet="/img/shared/tablet/image-speakers.png" />
                    <Image src="/img/shared/mobile/image-speakers.png" alt="speakers" height={200} width={300} />
                </picture> 
                <h2>ZX9 SPEAKER</h2>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Link href="/">
                    <button>See Product</button>
                </Link>
            </div>
            <div className="text-center">
                <picture>
                    <source media="(min-width: 1110px)" srcSet="img/product-zx7-speaker/desktop/image-gallery-3.jpg" />
                    <source media="(min-width: 768px)" srcSet="img/product-zx7-speaker/tablet/image-gallery-3.jpg" />
                    <Image src="/img/product-zx7-speaker/mobile/image-gallery-3.jpg" alt="speaker" height={200} width={300} />
                </picture> 
                <h2>ZX7 SPEAKER</h2>
                <Link href="/">
                    <button>See Product</button>
                </Link>
            </div>
            <div className="text-center">
                <picture>
                    <source media="(min-width: 1110px)" srcSet="img/product-yx1-earphones/desktop/image-gallery-2.jpg" />
                    <source media="(min-width: 768px)" srcSet="img/product-yx1-earphones/tablet/image-gallery-2.jpg"/>
                    <Image src="/img/product-yx1-earphones/mobile/image-gallery-2.jpg" alt="earphones" height={200} width={300} />
                </picture> 
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
