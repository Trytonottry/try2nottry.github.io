import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Avatar from './Avatar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold flex items-center space-x-2">
            <Avatar />
            <span>Trytonottry</span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex space-x-8">
            {['Главная', 'Проекты', 'Навыки', 'Обо мне', 'Контакты'].map((text, i) => {
              const href = {
                'Главная': '#home',
                'Проекты': '#projects',
                'Навыки': '#skills',
                'Обо мне': '#about',
                'Контакты': '#contact'
              }[text];
              return (
                <li key={i}>
                  <a href={href} className="hover:text-purple-400 transition duration-200">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </nav>
  );
}