// app/page.tsx
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <a
        href="/about"
        className="mt-4 text-lg text-blue-500 underline hover:text-blue-700"
      >
        Go to About Page
      </a>
    </div>
  );
}
