const Sidebar = () => {
  return (
    <div className="sidebar bg-black text-white  p-4 rounded-md w-56 h-screen">
      <h1 className="text-2xl  mb-4">
        <span className="font-bold">Transactions</span>
        <br />
        History
      </h1>
      <section className="flex flex-col space-y-4 ">
        <div className="bg-gray-300 p-2 rounded-md" >
          <p className="text-white">Start Year</p>
          <input
            type="date"
            className="text-black"
            min="2021"
            max="2025"
          />
        </div>
        <div className="bg-gray-300 p-2 rounded-md">
          <p className="text-white">End Year</p>
          <input
            type="date"
            className="text-black"
            min="2021"
            max="2025"
          />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
