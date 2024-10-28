import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div className="flex gap-2 mt-20 text-white">
        <Link href={"/courses/categories"}>Categories</Link>{" "}
        <Link href={"/courses/teacher"}>Teachers</Link>
      </div>
      {children}
    </div>
  );
}
