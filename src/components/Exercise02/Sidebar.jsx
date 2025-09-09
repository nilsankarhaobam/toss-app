import React, { useState, useRef, useEffect } from "react";
import menu from "./../../assets/menu.png";
import arrow_drop from "./../../assets/arrow_drop_up.svg";

const Sidebar = () => {
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const docsRef = useRef(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (docsRef.current && !docsRef.current.contains(e.target)) {
        setIsDocsOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") setIsDocsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <main className="flex">
        {/* Sidebar */}
        <aside className="w-60 bg-amber-600 min-h-screen text-white p-4">
          <h2 className="text-2xl font-bold mb-6">Sidebar</h2>

          <ul className="space-y-2">
            {/* Simple menu item */}
            <li>
              <button
                type="button"
                className="flex items-center gap-2 p-2 w-full hover:bg-amber-700 rounded-lg"
              >
                <img src={menu} alt="Menu" width={24} height={24} />
                <span>Menu</span>
              </button>
            </li>

            {/* Docs with toggle */}
            <li ref={docsRef} className="relative">
              <button
                type="button"
                aria-expanded={isDocsOpen}
                onClick={() => setIsDocsOpen(prev => !prev)}
                className="flex items-center justify-between gap-2 p-2 w-full hover:bg-amber-700 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <span>📄</span>
                  <span>Docs</span>
                </div>

                {/* Arrow rotates when open */}
                <img
                  src={arrow_drop}
                  alt="toggle submenu"
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isDocsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Submenu - animated using max-height + opacity */}
              <div
                className={`mt-2 overflow-hidden transition-all duration-200 ease-in-out ${
                  isDocsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="pl-6 space-y-1 text-sm">
                  <li className="p-2 hover:bg-amber-700 rounded">Getting Started</li>
                  <li className="p-2 hover:bg-amber-700 rounded">API Reference</li>
                  <li className="p-2 hover:bg-amber-700 rounded">Tutorials</li>
                </ul>
              </div>
            </li>

            {/* Another item */}
            <li>
              <button
                type="button"
                className="flex items-center gap-2 p-2 w-full hover:bg-amber-700 rounded-lg"
              >
                <span>⚙️</span>
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-6">
          <div className="text-2xl font-semibold">This is the Body</div>
        </section>
      </main>
    </div>
  );
};

export default Sidebar;
