import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Link href="/home">home</Link> | <Link href="/login">login</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
