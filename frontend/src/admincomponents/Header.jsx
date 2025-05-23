import React from 'react';
import { FaBell, FaUserCircle, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // ✅ Import added

function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white p-4 flex justify-between fixed top-0 w-full items-center z-50">
      {/* Logo or Title */}
      <div className="flex items-center space-x-4">
        <h1 className="text-xl md:text-2xl font-semibold">Paw Connect Admin Panel</h1>
      </div>

      {/* Right-side of the header: User & Notifications */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Notifications Icon */}
      

        {/* User Profile Icon */}
      

        {/* Settings Icon */}
        <div onClick={() => navigate("/adminpanel/settings")} className="cursor-pointer">
          <FaCog className="text-lg md:text-xl" />
        </div>
      </div>
    </div>
  );
}

export default Header;
