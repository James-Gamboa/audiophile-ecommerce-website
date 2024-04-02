import Image from "next/image"
import Link from "next/link";

function Products () {
  return(
    <div>
      <div>
      <Image src="/img/shared/desktop/image-headphones.png" alt="headphones" height={200} width={300} />
      <h4>HEADPHONES</h4>
      <button>
        <Link href="/">SHOP</Link>
      </button>
      </div>
      <div>
      <Image src="/img/shared/desktop/image-speakers.png" alt="speakers" height={200} width={300} />
      <h4>SPEAKERS</h4>
      <button>
        <Link href="/">SHOP</Link>
      </button>
      </div>
      <div>
      <Image src="/img/shared/desktop/image-earphones.png" alt="earphones" height={200} width={300} />
      <h4>EARPHONES</h4>
      <button>
        <Link href="/">SHOP</Link>
      </button>
      </div>
    </div>
  )
}

export default Products;