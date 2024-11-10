"use client";

import Header from "@/Components/header";
import "../../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  BookOpen,
  Home,
  GraduationCap,
  ClipboardList,
} from "lucide-react";

export default function Layout({ children }) {
  const pathname = usePathname();

  const pages = [
    { label: "Dashboard", icon: <Home />, path: "/admin" },
    { label: "Courses", icon: <BookOpen />, path: "/admin/courses" },
    { label: "Trainers", icon: <GraduationCap />, path: "/admin/trainers" },
    { label: "Students", icon: <Users />, path: "/admin/students" },
    { label: "Batches", icon: <ClipboardList />, path: "/admin/batches" },
  ];

  return (
    <html lang="en">
      <head>
        <title>
          {pages.find((page) => page.path === pathname)?.label ||
            "My Page Title"}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Description of my page." />
      </head>
      <body>
        <div>
          <Header />
        </div>
        <main className="flex">
          <nav className="h-screen w-60 dashboard">
            <ul className="mt-20 space-y-4">
              {pages.map((page) => (
                <Link
                  key={page.label}
                  href={page.path}
                  aria-label={page.label}
                  className="links flex items-center space-x-2"
                >
                  <li className={pathname === page.path ? "active" : ""}>
                    {page.icon} {page.label}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <div className="px-6  ui-show h-screen flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
