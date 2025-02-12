export default function Layout({ children }) {
  return (
    <>
      <nav className="bg-slate-50 px-8 py-4">
        <a href="/" className="text-2xl font-bold tracking-wide text-sky-400">
          FinTools
        </a>
      </nav>
      <main>{children}</main>
    </>
  );
}
