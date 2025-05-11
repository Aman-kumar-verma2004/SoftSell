import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('softsell-theme');
    if (savedTheme) setIsDarkMode(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('softsell-theme', theme);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('Menu toggled, isOpen:', !isOpen);  // Debugging line to track state change
  };

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-3xl font-bold text-white">SoftSell</h1>
        <nav className="hidden md:flex space-x-6">
          {["Home", "How It Works", "Why Choose Us", "Testimonials", "Contact"].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace(/ /g, "-")}`} 
              className="text-gray-300 hover:text-white transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-2xl text-gray-300">
            {isDarkMode ? '🌙' : '☀️'}
          </button>
          <button 
            onClick={handleToggleMenu} 
            className="md:hidden text-2xl text-gray-300"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-black text-white shadow-md py-4 ${isOpen ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col space-y-4 px-6">
          {["Home", "How It Works", "Why Choose Us", "Testimonials", "Contact"].map((item, index) => (
            <a 
              key={index} 
              href={`#${item.toLowerCase().replace(/ /g, "-")}`} 
              className="text-gray-300 hover:text-white transition-all duration-300"
              onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
