export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">MyBlog</h1>
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-indigo-500">Home</a>
        <a href="#" className="hover:text-indigo-500">Articles</a>
        <a href="#" className="hover:text-indigo-500">About</a>
      </nav>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
        Subscribe
      </button>
    </header>
  );
}