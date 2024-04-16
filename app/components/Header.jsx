"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header>
                <div className="container mx-auto px-4">
                    <nav className="flex justify-between items-center py-4">
                        <Image className="mx-8" src="/img/shared/desktop/logo.svg" alt="logo" height={25} width={143} />
                        <div className="hidden lg:flex space-x-10">
                            <Link href="/">Home</Link>
                            <Link href="../headphones">Headphones</Link>
                            <Link href="../speakers">Speakers</Link>
                            <Link href="../earphones">Earphones</Link>
                            <Image src="/img/shared/desktop/icon-cart.svg" alt="icon-cart" height={25} width={25} />
                        </div>
                        <div className="lg:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "close menu" : "open menu"}>
                                <Image src="/img/shared/tablet/icon-hamburger.svg" alt="menu" height={20} width={20} />
                            </button>
                            {isOpen && (
                                <div className="absolute top-16 left-0 w-full bg-white py-4 rounded-lg shadow-lg">
                                    <button className="absolute top-2 right-2" onClick={() => setIsOpen(false)} aria-label="close menu">
                                        <Image src="/img/shared/mobile/icon-close.svg" alt="close" height={20} width={20} />
                                    </button>
                                    <div className="flex flex-col space-y-4 items-center">
                                        <Link href="/">Home</Link>
                                        <Link href="../headphones">Headphones</Link>
                                        <Link href="../speakers">Speakers</Link>
                                        <Link href="../earphones">Earphones</Link>
                                        <Image src="/img/shared/desktop/icon-cart.svg" alt="icon-cart" height={25} width={25} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
