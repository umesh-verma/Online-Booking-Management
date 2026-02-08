import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-24" }) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      {/* Image-based logo - place your logo at /public/logo.svg and /public/logo-light.svg */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt={siteConfig.name}
          width={40}
          height={40}
          className="dark:hidden"
          priority
        />
        <Image
          src="/logo-light.svg"
          alt={siteConfig.name}
          width={40}
          height={40}
          className="hidden dark:block"
          priority
        />
        <span className="font-bold text-xl text-neutral-900 dark:text-white">
          {siteConfig.name}
        </span>
      </div>
    </Link>
  );
};

export default Logo;
