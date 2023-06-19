const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white py-4 px-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <ul className="mt-6">
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
          Dashboard
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">
          Analytics
        </li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Reports</li>
        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
