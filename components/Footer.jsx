import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-500 mx-auto w-full mt-32">
        <div className="max-w-7xl mx-auto w-full p-10 space-y-10 text-white">
          <Link href="/">
            <a className="text-lg font-semibold flex justify-center">
              Cuartero NHS - Special Program in the Arts
            </a>
          </Link>
          <span className="flex justify-center text-center text-sm">
            &#169;2022 Cuartero NHS - Special Program in the Arts. All Rights
            Reserved. <br />
            Made with 🧡 by Jed Adrian Denosta 🍊
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
