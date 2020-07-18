import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/aanbod">
      <a>Aanbod</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </nav>
);

export default Nav;
