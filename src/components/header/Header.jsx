export default function Header({ title }) {
  return (
    <header className=" bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="sm:text-xl lg:text-4xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
      </div>
    </header>
  );
}
