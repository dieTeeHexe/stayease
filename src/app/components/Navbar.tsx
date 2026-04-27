export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-gray-600">
        <div className="text-xl font-bold">StayEase</div>

        <nav className="flex gap-6 text-sm text-gray-600">
  <a href="/">Home</a>
  <a href="/stays">Stays</a>
  <a href="/post">Post</a>
</nav>
      </div>
    </header>
  );
}