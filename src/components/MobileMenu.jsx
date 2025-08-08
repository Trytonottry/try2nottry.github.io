export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-gray-800 mt-4 rounded-lg overflow-hidden shadow-xl">
      <ul className="flex flex-col space-y-2 p-4">
        {['#home', '#projects', '#skills', '#about', '#contact'].map((href, i) => {
          const text = href.slice(1).charAt(0).toUpperCase() + href.slice(2);
          return (
            <li key={i}>
              <a
                href={href}
                onClick={onClose}
                className="block py-2 px-4 rounded hover:bg-purple-600 transition"
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}