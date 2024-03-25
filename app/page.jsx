import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <span>New product</span>
      <h1>XX99 Mark II Headphones</h1>
      <Link href="./product-xx99-mark-two-headphones">
        <button>See product</button>
      </Link>
    </>
  );
}
