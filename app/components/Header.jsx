import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <>
        <header>
            <div>
                <nav className="space-x-10  lg:flex justify-center py-4">
                <Image className="mx-8" src="/img/shared/desktop/logo.svg" alt="logo" height={25} width={143} />
                <Link href="/">Home</Link>
                <Link href="../headphones">Headphones</Link>
                <Link href="../speakers">Speakers</Link>
                <Link href="../earphones">Earphones</Link>
                <Image src="/img/shared/desktop/icon-cart.svg" alt="icon-cart" height={25} width={25} />
                </nav>
            </div>
        </header>
        </>
    )
};

export default Header;