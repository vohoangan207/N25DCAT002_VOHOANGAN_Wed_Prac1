import Header from '../components/Header';
import BlogCard from '../components/BlogCard';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto p-5">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Danh sách bài viết</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 12).map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}