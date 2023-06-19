const Navbar = () => {
  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h2 className="text-lg font-semibold">Welcome, User!</h2>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
          Profile
        </button>
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
