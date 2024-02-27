import Link from "next/link";
import { PropsWithChildren } from "react";

interface INavlinkProps extends PropsWithChildren {
    href: string;
    active?: boolean;
}

export default function Navlink({ href, children }: INavlinkProps) {
    return (
        <Link
            className="px-4 h-full flex items-center bg-gradient-to-b from-transparent to-transparent hover:to-orange-500 via-transparent via-90% to-90%"
            href={href}
        >
            {children}
        </Link>
    );
}
