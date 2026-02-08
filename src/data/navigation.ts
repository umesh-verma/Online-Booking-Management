import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";

const otherPageChildMenus: NavItemType[] = [
  { id: ncNanoId(), href: "/blog", name: "Blog" },
  { id: ncNanoId(), href: "/about", name: "About" },
  { id: ncNanoId(), href: "/contact", name: "Contact us" },
];

const accountChildMenus: NavItemType[] = [
  { id: ncNanoId(), href: "/login", name: "Login" },
  { id: ncNanoId(), href: "/signup", name: "Signup" },
  { id: ncNanoId(), href: "/account", name: "My Account" },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
  },
  {
    id: ncNanoId(),
    href: "/listing-car",
    name: "Browse Cars",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-car", name: "All Cars" },
      { id: ncNanoId(), href: "/listing-car-map", name: "Cars on Map" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "About",
    type: "dropdown",
    children: otherPageChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/account",
    name: "Account",
    type: "dropdown",
    children: accountChildMenus,
  },
];

// Simplified navigation for CG Rental
export const NAVIGATION_DEMO_2: NavItemType[] = NAVIGATION_DEMO;
