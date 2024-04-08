import Image from "next/image";
import Link from "next/link";

function Footer () {
  return(
  <footer>
    <div>
      <div className="space-x-10  lg:flex justify-center py-4">
          <Link href="/">Home</Link>
          <Link href="/app/headphones">Headphones</Link>
          <Link href="/app/Speakers">Speakers</Link>
          <Link href="/app/Earphones">Earphones</Link>
          <Image src="/img/shared/desktop/icon-facebook.png" alt="icon-facebook" height={25} width={50} />
          <Image src="/img/shared/desktop/icon-twitter.png" alt="icon-twitter"  height={25} width={50} />
          <Image src="/img/shared/desktop/icon-instagram.png" alt="icon-instagram"  height={25} width={50} />
      </div>
    </div>
      <div>
      <Image className="mx-8" src="/img/shared/desktop/logo.svg" alt="logo" height={25} width={143} />
      <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
      <span>Copyright 2024. All Rights Reserved</span>
    </div>  
</footer>
  )
}

export default Footer;