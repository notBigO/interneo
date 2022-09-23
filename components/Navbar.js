import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const Navbar = () => {

    const {data: session} = useSession();
    const NavItems = [
        {
          name: "Projects",
          link: "/projects",
        },
        {
            name: "Connect",
            link: "/connect",
          },
      ];
  return (
    <nav className="flex flex-row justify-between items-center px-48 py-6 ">
      <div id="branding">
        <Image src="/interneo-logo.svg" width="220px" height="52px" />
      </div>
      <div className="flex flex-row items-center gap-10">
        <ul className="flex md:flex-row gap-10 font-sans text-xl">
          {NavItems.map((navItem) => (
            <li key={navItem.name}>
              <Link href={navItem.link}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
        {!session?<button className="rounded-md bg-blue-500 text-white text-xl px-5 py-1" onClick={signIn}>Sign In</button>:(
            <div className="flex flex-row gap-2 items-center">
                <p className="text-xl">{session.user.name}</p>
                <Image src={session.user.image} width={40} height={40} className="rounded-full"/>
                <button className="rounded-md bg-white text-red-400 text-xl px-3 py-1" onClick={signOut}>Sign Out</button>
            </div>
        
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;








