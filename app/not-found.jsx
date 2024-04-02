import Link from "next/link"

function NotFound() {
  return (
    <div class="">
      <Link href="/">
        <button class="">Back to Home</button>
      </Link>
      <h2 class="">Page not found</h2>
      <p class="">Could not find requested resource</p>
    </div>
  );
}

export default NotFound;