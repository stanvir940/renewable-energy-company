const Navbar2 = () => {
  return (
    <div className="hidden md:flex p-4 text-black font-thin">
      <div className=" w-full flex items-center justify-end space-x-8">
        <button className="bg-slate-100 p-2 rounded hover:bg-green-500">
          Purchase Smart Batteries
        </button>
        <button className="bg-slate-100 p-2 rounded hover:bg-green-500">
          Install Rooftop Solar
        </button>
        <button className="bg-slate-100 p-2 rounded hover:bg-green-500">
          Become a Supplier
        </button>
        <button className="bg-slate-100 p-2 rounded hover:bg-green-500">
          Become a Partner
        </button>
        <button className="bg-slate-100 p-2 rounded hover:bg-green-500">
          Become a Investor
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
