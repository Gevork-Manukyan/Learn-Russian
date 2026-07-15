export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-gray-500 sm:flex-row">
        <span>© {year} Gevork Manukyan</span>
        <a
          href="https://gevorkmanukyan.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 transition-colors hover:text-gray-300"
        >
          Built by Gevork Manukyan
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </footer>
  );
}
