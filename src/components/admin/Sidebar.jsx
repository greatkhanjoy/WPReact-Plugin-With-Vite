import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="mt-5 flex flex-col w-full">
        <Link
          to={"/"}
          className="py-2 px-10 hover:bg-gray-700 cursor-pointer focus:text-white hover:text-white bg:gray-500"
        >
          Dashboard
        </Link>
        <Link
          to={"/analytics"}
          className="py-2 px-10 hover:bg-gray-700 cursor-pointer focus:text-white hover:text-white bg:gray-500"
        >
          Analytics
        </Link>
        <Link
          to={"/reports"}
          className="py-2 px-10 hover:bg-gray-700 cursor-pointer focus:text-white hover:text-white bg:gray-500"
        >
          Reports
        </Link>
        <Link
          to={"/settings"}
          className="py-2 px-10 hover:bg-gray-700 cursor-pointer focus:text-white hover:text-white bg:gray-500"
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
