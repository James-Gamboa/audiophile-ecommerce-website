import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <>
        <header>
            <div>
                <nav class="space-x-10  lg:flex justify-center py-4">
                <Image class="mx-8" src="/img/shared/desktop/logo.svg" alt="logo" height={25} width={143} />
                <Link href="/">Home</Link>
                <Link href="/app/headphones">Headphones</Link>
                <Link href="/app/Speakers">Speakers</Link>
                <Link href="/app/Earphones">Earphones</Link>
                <Image src="/img/shared/desktop/icon-cart.svg" alt="icon-cart" height={25} width={25} />
                </nav>
            </div>
        </header>
        </>
    )
};

export default Header;