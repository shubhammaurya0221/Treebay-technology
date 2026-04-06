import logo from  '../../assets/logo.png'
export default function Footer() {
  return (
    <footer className="py-12 px-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="flex items-center gap-2">
      <img src={logo} alt="treebay technology logo" className='h-16 md:14' />
    </div>
    
    <div className="text-sm text-[var(--color-muted)] text-center md:text-left">
      © 2026 EPC Eco Energy. All rights reserved. <br className="md:hidden" />
      <span className="hidden md:inline"> | </span> Pioneering sustainable infrastructure.
    </div>
    
    <div className="flex gap-6 text-sm text-[var(--color-text-muted)]">
      <a href="#" className="hover:text-[var(--color-text)] transition-colors">Privacy Policy</a>
      <a href="#" className="hover:text-[var(--color-text)] transition-colors">Terms of Service</a>
      <a href="#" className="hover:text-[var(--color-text)] transition-colors">Contact</a>
    </div>
  </footer>
  );
}