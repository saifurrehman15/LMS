import Link from "next/link";

function Header() {
  return (
    <div className="header bg-black text-white">
      <div>logo</div>
      <nav className="navigation">
        <ul>
          <li>
            <Link href={"/courses"} className="">
              Courses
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="">
              About
            </Link>
          </li>
          <li>
            <Link href={"/admin"} className="">
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
