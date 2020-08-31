import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav className="navbar">
    <div className="navbar-content">
      <Link href="/" passHref>
        <a className="h-12 sm:h-16">
          <img
            className="h-full cursor-pointer"
            src={require(`images/logoDennis.png`)}
          />
        </a>
      </Link>

      <div className="flex mr-4">
        <Link href="/materiaal" passHref>
          <a className="navlink">Materiaal/video's</a>
        </Link>

        <Link href="/about" passHref>
          <a className="navlink">Over Mij</a>
        </Link>

        <Link href="/blog" passHref>
          <a className="navlink">Blog</a>
        </Link>

        <Link href="/contact" passHref>
          <a className="btn shadow hover:bg-orange-500 ">Contact</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Nav;
