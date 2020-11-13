import React from "react";
import Link from "next/link";

const Nav = () => (
  <header className="navbar">
    <div className="navbar-content">
      <Link href="/" passHref>
        <a className="h-12 sm:h-16">
          <img
            className="h-full cursor-pointer"
            src={
              "https://res.cloudinary.com/dta9vptzh/image/upload/c_scale,w_150/v1602325989/dennisStassen/logoDennis-1.png"
            }
          />
        </a>
      </Link>

      <nav className="flex mr-4">
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
          <a className="btn shadow hover:bg-hoverColor1 transition duration-500 ease-in-out">
            Contact
          </a>
        </Link>





      </nav>
    </div>
  </header>
);

export default Nav;
