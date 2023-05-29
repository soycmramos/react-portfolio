const Header = ({ children }) => {
  return (
    <header className="h-14 bg-white shadow-sm">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          { children }
        </div>
      </div>
    </header>
  );
};

export default Header
