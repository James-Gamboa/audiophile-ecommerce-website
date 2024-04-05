import Link from "next/link"

function NotFound() {
  return (
    <div className="">
      <Link href="/">
        <button className="">Back to Home</button>
      </Link>
      <h2 className="">Page not found</h2>
      <p className="">Could not find requested resource</p>
    </div>
  );
}

export default NotFound;