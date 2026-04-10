import logo from '../../assets/logoB.png'
import { NavItems } from '../../Data/NavItems.js'
import { FaInstagram, FaWhatsapp, FaXTwitter, FaLinkedin, FaPinterest } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-deep)] border-t border-[var(--color-border)] pt-16 pb-10 px-8">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <img src={logo} alt="logo" className="h-14 mb-4" />
          <p className="text-sm text-[var(--color-muted)]">
            Building sustainable and future-ready EPC solutions for industries worldwide.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-xl text-[var(--color-muted)]">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaPinterest /></a>
          </div>
        </div>

        {/* Dynamic Menu Sections */}
        {NavItems.slice(0, 3).map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-4 text-[var(--color-text)]">
              {item.title}
            </h3>

            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
              {item.categories.slice(0, 5).map((cat, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[var(--color-text)] transition">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-muted)]">
        
        <p>
          © 2026 TreeBay Technology. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-[var(--color-text)]">Privacy Policy</a>
          <a href="#" className="hover:text-[var(--color-text)]">Terms</a>
          <a href="#" className="hover:text-[var(--color-text)]">Contact</a>
        </div>
      </div>

    </footer>
  )
}