export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
      <p className="text-sm text-[#4A4E69]">
        &copy; {new Date().getFullYear()} Joyce Wang • Carpe Diem
      </p>
    </footer>
  );
}
