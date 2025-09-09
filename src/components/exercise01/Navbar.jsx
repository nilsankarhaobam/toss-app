import React from 'react';

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar with Drawer --> */}
            <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            {/* <!-- Main Navbar --> */}
            <div className="drawer-content">
                <div className="navbar bg-black text-white px-4">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">MySite</a>
                </div>
                <div className="hidden sm:flex gap-4">
                    <a className="btn btn-ghost">HOME</a>
                    <a className="btn btn-ghost">ABOUT</a>
                </div>
                <div className="sm:hidden">
                    <label htmlFor="my-drawer" className="btn btn-ghost">☰</label>
                </div>
                </div>
            </div>

            {/* <!-- Drawer (Mobile Menu) --> */}
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <div className="w-64 min-h-full bg-base-200 text-base-content flex flex-col transition-transform duration-500 ease-out">
                <div className="flex justify-end p-2">
                    <label htmlFor="my-drawer" className="btn btn-sm btn-circle">✕</label>
                </div>
                <ul className="menu p-4 flex-1">
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                </ul>
                </div>
            </div>
            </div>
    </>
  );
}

export default Navbar;
