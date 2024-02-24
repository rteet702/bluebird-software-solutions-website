import Link from "next/link";
import Navlink from "./Navlink";
import { useState } from "react";

const Links = [
    <Navlink href="/about">About Us</Navlink>,
    <Navlink href="/services">Services</Navlink>,
    <Navlink href="/contact">Contact Us</Navlink>,
];

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-white shadow flex justify-between items-center h-12">
            <Link
                href="/"
                className="h-full px-4 py-2 text-2xl bg-gradient-to-b from-white to-orange-500 via-white via-90% to-90%"
            >
                Bluebird Software Solutions, LLC
            </Link>
            <div className="flex h-full">
                {Links.map((link, id) => {
                    return (
                        <Navlink key={id} href={link.props.href}>
                            {link.props.children}
                        </Navlink>
                    );
                })}
            </div>
        </nav>
    );
}
