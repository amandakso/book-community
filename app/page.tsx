import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Book Community
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Track your reading journey, discover new books, and connect with
          fellow readers.
        </p>
        <div className="space-x-4">
          <Link href="/register">Get Started</Link>
          <Link href="/books">Browse Books</Link>
        </div>
      </section>
    </div>
  );
}
