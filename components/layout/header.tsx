import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link href="/">BookTrails</Link>
          <div>
            <Link href="/books">Books</Link>
            <Link href="/paths">Reading Paths</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
