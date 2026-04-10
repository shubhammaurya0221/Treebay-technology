import React, { useState, useEffect, useRef } from 'react';
import { Search, Globe, ChevronRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. IMPORT LINK FROM REACT ROUTER
import { NavItems } from '../../Data/NavItems.js';
import logoA from '../../assets/logoA.png'
import logoB from '../../assets/logoB.png'
const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [activeCategory, setActiveCategory] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
    const [mobileActiveCategory, setMobileActiveCategory] = useState(null);

    // 1. New state to track scroll position
    const [isScrolled, setIsScrolled] = useState(false);

    const headerRef = useRef(null);

    // 2. Add scroll event listener
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 50);

            if (window.innerWidth >= 1024 && currentScrollY > lastScrollY) {
                setActiveMenu(null);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 3. Determine if background should be solid (Scrolled, OR a menu is open)
    const isSolidBackground = isScrolled || isMobileMenuOpen || activeMenu !== null;

    return (
        <>
            {/* 4. Update the header className with conditional template literals */}
            <header
                ref={headerRef}
                className={`fixed w-full top-0 z-50 text-white font-sans transition-all duration-300 ${isSolidBackground
                    ? 'bg-[var(--color-bg-deep)] border-b border-[var(--color-border-muted)] shadow-lg'
                    : 'bg-transparent border-b border-transparent'
                    }`}
            >
                <div className="max-w-8xl mx-auto px-6 h-20 flex items-center justify-around">

                    {/* Left: Logo */}
                    <div className="flex items-center m-3 space-x-6 h-full z-50">
                        <Link to="/" className="flex items-center">

                            <div className="relative h-24 md:h-20 w-[180px] md:w-[220px]">
                                <img
                                    src={logoA}
                                    alt="Logo A"
                                    className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${isSolidBackground ? 'opacity-0' : 'opacity-100'}`}
                                />

                                <img
                                    src={logoB}
                                    alt="Logo B"
                                    className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${isSolidBackground ? 'opacity-100' : 'opacity-0'}`}
                                />
                            </div>
                        </Link>
                    </div>
                    {/* Center: Desktop Navigation */}
                    <nav className="hidden lg:flex items-center h-full space-x-1">
                        {NavItems.map((item, index) => (
                            <div key={item.title} className="h-full flex items-center">
                                <button
                                    className="h-full flex items-center px-4 cursor-pointer hover:bg-[var(--color-bg)] transition-colors duration-200 focus:outline-none"
                                    onClick={() => {
                                        setActiveMenu(activeMenu === index ? null : index);
                                        setActiveCategory(0);
                                    }}
                                >
                                    <span className="text-[15px] font-semibold tracking-wide">{item.title}</span>
                                    <ChevronDown className={`text-xs ml-1 transition-transform duration-300 ${activeMenu === index ? 'rotate-180 text-[var(--color-primary)]' : ''}`} />
                                </button>

                                {/* Dropdown Menu Container */}
                                {activeMenu === index && (
                                    <div className="absolute top-[80px] left-0 w-full bg-[var(--color-bg)] shadow-2xl border-t border-[var(--color-border-muted)] overflow-hidden animate-drop-down" style={{ minHeight: '400px' }}>
                                        <div className="max-w-7xl mx-auto flex h-full p-10">

                                            {/* Column 1: Overview */}
                                            <div className="w-1/3 pr-10 border-r border-[var(--color-border-muted)] animate-column-1">
                                                <h3 className="text-2xl font-light mb-4">{item.overview.heading}</h3>
                                                <p className="text-[var(--color-muted)] leading-relaxed mb-6 text-sm">{item.overview.description}</p>
                                                {/* CHANGED to Link and using ctaPath from Data */}
                                                <Link
                                                    to={item.overview.ctaPath || '#'}
                                                    className="inline-block px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm font-medium rounded-full"
                                                >
                                                    {item.overview.cta}
                                                </Link>
                                            </div>

                                            {/* Column 2: Categories */}
                                            <div className="w-1/4 px-10 border-r border-[var(--color-border-muted)] animate-column-2">
                                                <ul className="space-y-4">
                                                    {item.categories.map((cat, catIdx) => (
                                                        <li
                                                            key={cat.name}
                                                            className={`flex justify-between items-center cursor-pointer text-[15px] pb-2 border-b border-[var(--color-border-muted)] transition-colors ${activeCategory === catIdx ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'}`}
                                                            onMouseEnter={() => setActiveCategory(catIdx)}
                                                        >
                                                            {cat.name}
                                                            <ChevronRight size={14} className={`transition-opacity ${activeCategory === catIdx ? 'opacity-100' : 'opacity-0'}`} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Column 3: Links */}
                                            <div className="w-5/12 pl-10">
                                                <ul key={activeCategory} className="grid grid-cols-2 gap-y-4 gap-x-8">
                                                    {item.categories[activeCategory]?.links.map((link, idx) => (
                                                        <li
                                                            key={link.path || link}
                                                            className="animate-link-reveal"
                                                            style={{ animationDelay: `${200 + (idx * 30)}ms` }}
                                                        >
                                                            {/* CHANGED to Link, supporting both {name, path} and old string formats */}
                                                            <Link
                                                                to={link.path || '#'}
                                                                onClick={() => setActiveMenu(null)} // Close menu on click
                                                                className="text-[var(--color-muted)] hover:text-[var(--color-text)] text-sm transition-colors duration-200"
                                                            >
                                                                {link.name || link}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right: Desktop Actions & Mobile Menu Toggle */}
                    <div className="flex items-center space-x-5 z-50">
                        {/* Desktop Only Actions */}
                        <div className="hidden lg:flex items-center space-x-6 h-full">
                            {/* CHANGED to Link */}
                            <Link to="/contact" className="text-[15px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                                Contact us
                            </Link>
                        </div>

                        {/* Mobile Controls */}
                        <div className="lg:hidden flex items-center space-x-5">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus:outline-none"
                            >
                                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                            </button>
                        </div>
                    </div>

                </div>

                {/* MOBILE MENU DRAWER */}
                <div
                    className={`lg:hidden fixed inset-0 top-20 bg-[var(--color-bg-deep)] overflow-y-auto transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col px-6 py-4 space-y-2">
                        {NavItems.map((item, index) => (
                            <div key={item.title} className="border-b border-[var(--color-border-muted)] pb-2 pt-2 overflow-hidden">
                                <button
                                    className="flex justify-between items-center w-full text-left font-semibold text-lg py-2 focus:outline-none"
                                    onClick={() => {
                                        if (!item.isSimple) {
                                            setMobileActiveMenu(mobileActiveMenu === index ? null : index);
                                            setMobileActiveCategory(null);
                                        }
                                    }}
                                >
                                    <span>{item.title}</span>
                                    {!item.isSimple && (
                                        <ChevronDown className={`transition-transform duration-300 ${mobileActiveMenu === index ? 'rotate-180 text-[var(--color-accent)]' : 'text-[var(--color-muted)]'
                                            }`} size={20} />
                                    )}
                                </button>

                                {mobileActiveMenu === index && !item.isSimple && (
                                    <div className="mt-2 flex flex-col space-y-2 pl-4">

                                        {/* 1. DESCRIPTION BOX */}
                                        <div
                                            className="mb-4 mt-2 bg-[var(--color-bg-alt)] p-4 rounded-lg animate-slide-left"
                                            style={{ animationDelay: '0ms' }}
                                        >
                                            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
                                                {item.overview.description}
                                            </p>
                                            {/* CHANGED to Link */}
                                            <Link
                                                to={item.overview.ctaPath || '#'}
                                                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                                                className="text-[var(--color-accent)] text-sm font-medium flex items-center hover:text-[var(--color-accent)] transition-colors"
                                            >
                                                {item.overview.cta} <ChevronRight size={16} className="ml-1" />
                                            </Link>
                                        </div>

                                        {/* 2. CATEGORIES */}
                                        {item.categories.map((cat, catIdx) => (
                                            <div
                                                key={cat.name}
                                                className="flex flex-col animate-slide-left"
                                                style={{ animationDelay: `${(catIdx + 1) * 60}ms` }}
                                            >
                                                <button
                                                    className={`flex justify-between items-center text-left py-3 focus:outline-none transition-colors ${mobileActiveCategory === catIdx ? 'text-[var(--color-accent)] font-medium' : 'text-[var(--color-text-muted)]'
                                                        }`}
                                                    onClick={() => setMobileActiveCategory(mobileActiveCategory === catIdx ? null : catIdx)}
                                                >
                                                    <span>{cat.name}</span>
                                                    <ChevronDown className={`transition-transform duration-300 ${mobileActiveCategory === catIdx ? 'rotate-180' : ''
                                                        }`} size={18} />
                                                </button>

                                                {/* Nested Links */}
                                                {mobileActiveCategory === catIdx && (
                                                    <ul className="flex flex-col space-y-3 pl-4 py-2 border-l border-[var(--color-border-muted)] ml-2 mb-2 animate-fade-in">
                                                        {cat.links.map((link, linkIdx) => (
                                                            <div className='animate-slide-left' key={linkIdx}>
                                                                <li>
                                                                    {/* CHANGED to Link */}
                                                                    <Link
                                                                        to={link.path || '#'}
                                                                        onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                                                                        className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                                                                    >
                                                                        {link.name || link}
                                                                    </Link>
                                                                </li>
                                                            </div>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="pt-6 pb-10 space-y-6">
                            {/* CHANGED to Link */}
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors w-full text-left font-semibold text-lg"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;