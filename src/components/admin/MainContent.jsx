const MainContent = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Sales</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            minus!
          </p>
        </div>
        <div className="bg-white shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Orders</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            porro!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
