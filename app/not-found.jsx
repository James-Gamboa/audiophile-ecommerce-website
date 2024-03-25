import Link from "next/link"

function NotFound() {
  return (
    <div className="main-container">
      <Link href="/">
        <button className="back-to-home-button">Back to Home</button>
      </Link>
      <h2 className="title">Page not found</h2>
      <p className="not-found-text">Could not find requested resource</p>
    </div>
  );
}

export default NotFound;