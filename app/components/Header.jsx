import Link from "next/link";

function Header() {
    return (
        <>
        <header>
            <nav className="space-x-10 hidden lg:flex justify-center">
            <Link href="/">Home</Link>
            <Link href="/app/headphones">Headphones</Link>
            <Link href="/app/Speakers">Speakers</Link>
            <Link href="/app/Earphones">Earphones</Link>
            </nav>
        </header>
        </>
    )
};

export default Header;