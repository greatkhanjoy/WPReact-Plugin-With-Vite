const Analytics = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Website Traffic</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            minus!
          </p>
        </div>
        <div className="bg-white shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">User Engagement</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            porro!
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Sales Performance</h3>
        <div className="bg-white shadow-md p-4">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            optio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
