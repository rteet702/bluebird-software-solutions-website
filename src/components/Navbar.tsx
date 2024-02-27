import Link from "next/link";
import Navlink from "./Navlink";

const LinksTest = [
    { href: "/about", title: "About Us" },
    { href: "/services", title: "Services" },
    { href: "/contact", title: "Contact Us" },
];
export default function Navbar() {
    return (
        <nav className="fixed w-full bg-neutral-900 shadow-lg flex justify-between items-center h-24 text-slate-50 px-4">
            <Link
                href="/"
                className="h-full items-center flex px-4 py-2 text-2xl bg-gradient-to-b from-transparent to-transparent hover:to-orange-500 via-transparent via-90% to-90%"
            >
                Bluebird Software Solutions, LLC
            </Link>
            <div className="flex h-full">
                {LinksTest.map((link, id) => {
                    return (
                        <Navlink key={id} href={link.href}>
                            {link.title}
                        </Navlink>
                    );
                })}
            </div>
        </nav>
    );
}
