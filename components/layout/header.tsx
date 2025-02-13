import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            BookTrails
          </Link>
          <div className="space-x-4">
            <Link href="/books" className="hover:text-gray-600">
              Books
            </Link>
            <Link href="/paths" className="hover:text-gray-600">
              Reading Paths
            </Link>
            <Link href="/login" className="hover:text-gray-600">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
