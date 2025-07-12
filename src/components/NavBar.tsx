const NavBar = () => {
  return (
    <nav className="text-white px-6 py-4 shadow-md bg-[#121212] flex justify-between items-center">
        <h1 className='text-2xl font-bold tracking-wide'>AlgoPulse</h1>
        <div className="space-x-4">
            <button className='hover:text-blue-400 transition'>Sorting</button>
            <button className='hover:text-blue-400 transition'>Pathfinding</button>
        </div>
    </nav>
  );
};

export default NavBar