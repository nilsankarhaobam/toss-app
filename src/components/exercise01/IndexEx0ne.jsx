

import React from 'react';

const IndexEx0ne = () => {
  return (
    <div>
      <h1 className='text-red-600'>hello react</h1>

      <div class="flex flex-col min-h-screen bg-gray-200">

  <div class="flex-grow">
    {/* <!-- Navbar with Drawer --> */}
    <div class="drawer drawer-end">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />

      {/* <!-- Main Navbar --> */}
      <div class="drawer-content">
        <div class="navbar bg-black text-white px-4">
          <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">MySite</a>
          </div>
          <div class="hidden sm:flex gap-4">
            <a class="btn btn-ghost">HOME</a>
            <a class="btn btn-ghost">ABOUT</a>
          </div>
          <div class="sm:hidden">
            <label for="my-drawer" class="btn btn-ghost">☰</label>
          </div>
        </div>
      </div>

      {/* <!-- Drawer (Mobile Menu) --> */}
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <div class="w-64 min-h-full bg-base-200 text-base-content flex flex-col transition-transform duration-500 ease-out">
          <div class="flex justify-end p-2">
            <label for="my-drawer" class="btn btn-sm btn-circle">✕</label>
          </div>
          <ul class="menu p-4 flex-1">
            <li><a>HOME</a></li>
            <li><a>ABOUT</a></li>
          </ul>
        </div>
      </div>
    </div>

    {/* <!-- Main Layout --> */}
    <section class="flex flex-col md:flex-row">
      
      {/* <!-- Left Sidebar (Menu) --> */}
      <aside class="md:w-60 hidden lg:block min-h-screen border-r-2 border-gray-400 bg-white">
        <div class="m-1">
          <div class="text-center text-2xl font-bold py-3 border-b">MENU</div>
          <div class="mt-5 px-2 space-y-2">
            <p><a href="#" class="hover:text-blue-600">General Knowledge 1</a></p>
            <p><a href="#" class="hover:text-blue-600">General Knowledge 2</a></p>
            <p><a href="#" class="hover:text-blue-600">General Knowledge 3</a></p>
            <p><a href="#" class="hover:text-blue-600">General Knowledge 4</a></p> 
          </div>
        </div>
      </aside>

      {/* <!-- Center Content --> */}
      <aside class="flex-1">
        <div class="text-center text-2xl sm:text-3xl font-bold text-blue-950 mt-5">WELCOME TO QUIZ</div>

        <div class="mt-5 md:mt-10 md:w-2/3 lg:w-1/2 mx-auto">
          <div class="bg-amber-400 p-5 rounded-2xl mx-1 shadow-lg">
            <div class="p-2 text-center font-semibold"><label>General Knowledge 1</label></div>
            <div class="p-2">
              <div><label><span>1.</span> Who is the father of Biology ?</label></div>
              <div class="p-2"><button class="btn w-full">(a) Aristotle </button></div>
              <div class="p-2"><button class="btn w-full">(b) Darwin</button></div>
              <div class="p-2"><button class="btn w-full">(c) Hippocrates</button></div>
              <div class="p-2"><button class="btn w-full">(d) Newton</button></div>
            </div>

            <div class="flex justify-between p-2">
              <button class="btn btn-primary">PREV</button>
              <button class="btn btn-secondary">NEXT</button>
            </div>
          </div>
        </div>
      </aside>

      {/* <!-- Right Sidebar --> */}
      <aside class="md:w-60 hidden md:block bg-gray-500 mt-20 mb-20 mx-2 rounded-xl shadow-lg">
        <div class="m-3">
          <div class="flex flex-wrap gap-2">
            <button class="btn">1</button>
            <button class="btn">2</button>
            <button class="btn">3</button>
            <button class="btn">4</button>
            <button class="btn">5</button>
            <button class="btn">6</button>
            <button class="btn">7</button>
            <button class="btn">8</button>
            <button class="btn">9</button>
            <button class="btn">10</button>
          </div>
        </div>
        <hr/>
        <div class="m-3 text-amber-50 space-y-2">
          <label>Information :</label>
          <div><button class="btn m-1 pointer-events-none">1</button><span>- Unattempt</span></div>
          <div><button class="btn btn-success m-1 pointer-events-none">1</button><span>- Attempted</span></div>
        </div>
      </aside>
    </section>
  </div>

  {/* <!-- Footer --> */}
  <footer class="footer p-10 bg-neutral text-neutral-content grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <nav class="mx-auto">
      <h6 class="footer-title">Services</h6> 
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
    </nav> 
    <nav class="mx-auto">
      <h6 class="footer-title">Company</h6> 
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
    </nav> 
    <nav class="mx-auto">
      <h6 class="footer-title">Legal</h6> 
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
    </nav>
    <nav class="mx-auto">
      <h6 class="footer-title">More</h6> 
      <a class="link link-hover">FAQ</a>
      <a class="link link-hover">Support</a>
    </nav>
  </footer>

</div>
    </div>
  );
}

export default IndexEx0ne;
