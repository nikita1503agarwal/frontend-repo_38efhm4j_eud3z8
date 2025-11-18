export default function Footer() {
  return (
    <footer className="relative py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Rian Digits. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
