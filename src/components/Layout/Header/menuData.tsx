import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  { id: 1, title: "Home", path: "/", newTab: false },
  { id: 2, title: "Collections", path: "/collections", newTab: false },
  { id: 3, title: "Casting", path: "/casting", newTab: false },
  {
    id: 4,
    title: "Manufacturing",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Diamond Manufacturing",
        path: "/manufacturing/diamond",
        newTab: false,
      },
      {
        id: 42,
        title: "Jewelry Manufacturing",
        path: "/manufacturing/jewelry",
        newTab: false,
      },
      {
        id: 43,
        title: "All Divisions",
        path: "/manufacturing",
        newTab: false,
      },
    ],
  },
  { id: 5, title: "Blog", path: "/blog", newTab: false },
  { id: 6, title: "Story", path: "/story", newTab: false },
  { id: 7, title: "Highlight", path: "/highlight", newTab: false },
  { id: 8, title: "Contact", path: "/contact", newTab: false },
];

export default menuData;
