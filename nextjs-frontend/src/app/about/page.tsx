// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-4xl font-bold">About Us</h1>
      <a
        href="/"
        className="mt-4 text-lg text-green-500 underline hover:text-green-700"
      >
        Back to Home
      </a>
    </div>
  );
}
