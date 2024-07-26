// lucide-react icons
import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Dashboard",
          active: pathname.includes("/"),
          icon: LayoutDashboard,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/posts",
          label: "Posts",
          active: pathname.includes("/posts"),
          icon: Newspaper,
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
              active: pathname === "/posts",
            },
            {
              href: "/posts/new",
              label: "New Post",
              active: pathname === "/posts/new",
            },
          ],
        },
        {
          href: "/categories",
          label: "Categories",
          active: pathname.includes("/categories"),
          icon: Folders,
          submenus: [],
        },
        {
          href: "/billing",
          label: "Billing",
          active: pathname.includes("/billing"),
          icon: CreditCard,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/profile",
          label: "Profile",
          active: pathname.includes("/profile"),
          icon: User,
          submenus: [],
        },
        {
          href: "/settings",
          label: "Settings",
          active: pathname.includes("/settings"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
