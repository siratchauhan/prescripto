import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="logo"
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/"><li className="py-1">Home</li></NavLink>
        <NavLink to="/doctors"><li className="py-1">ALL DOCTORS</li></NavLink>
        <NavLink to="/about"><li className="py-1">ABOUT</li></NavLink>
        <NavLink to="/contact"><li className="py-1">CONTACT</li></NavLink>

        {/* ✅ Admin Panel Button */}
        <a
          href="https://admin-prescripto.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="py-1 px-3 border rounded-full hover:bg-black hover:text-white transition"
        >
          Admin Panel
        </a>
      </ul>

      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="profile" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate("/my-profile")} className="hover:text-black cursor-pointer">MY Profile</p>
                <p onClick={() => navigate("/my-appointments")} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
            >
              Create account
            </button>
            <img
              onClick={() => setShowMenu(true)}
              className="w-6 md:hidden"
              src={assets.menu_icon}
              alt="menu"
            />
          </div>
        )}

        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full h-screen" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="logo" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="close"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/"><p className="px-4 py-2 rounded inline-block">Home</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors"><p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about"><p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact"><p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>

            {/* ✅ Admin Panel Link in Mobile */}
          <a
  href="https://admin-panel-git-main-siratchauhans-projects.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  <p className="px-4 py-2 rounded inline-block">Admin Panel</p>
</a>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




// import React, { useContext, useState } from "react";
// import { assets } from "../assets/assets";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";


// const Navbar = () => {
//   const navigate = useNavigate();
//   const { token, setToken, userData } = useContext(AppContext);
//   const [showMenu, setShowMenu] = useState(false);

//   const logout = () => {
//     setToken(null);  // update context
//     localStorage.removeItem("token");  // remove from storage
//     navigate("/login");  // redirect to login
//   };

//   return (
//     <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
//       <img
//         onClick={() => navigate("/")}
//         className="w-44 cursor-pointer"
//         src={assets.logo}
//         alt="logo"
//       />

//       <ul className="hidden md:flex items-start gap-5 font-medium">
//         <NavLink to="/">
//           <li className="py-1">Home</li>
//         </NavLink>
//         <NavLink to="/doctors">
//           <li className="py-1">ALL DOCTORS</li>
//         </NavLink>
//         <NavLink to="/about">
//           <li className="py-1">ABOUT</li>
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="py-1">CONTACT</li>
//         </NavLink>
//       </ul>

//       <div className="flex items-center gap-4">
//         {token && userData ? (
//           <div className="flex items-center gap-2 cursor-pointer group relative">
//             <img className="w-8 rounded-full" src={assets.profile_pic} alt="profile" />
//             <img className="w-2.5" src={assets.dropdown_icon} alt="dropdown" />
//             <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
//                 <p
//                   onClick={() => navigate("/my-profile")}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   MY Profile
//                 </p>
//                 <p
//                   onClick={() => navigate("/my-appointments")}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   My Appointments
//                 </p>
//                 <p
//                   onClick={logout}
//                   className="hover:text-black cursor-pointer"
//                 >
//                   Logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => navigate("/login")}
//               className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
//             >
//               Create account
//             </button>
//             <img
//               onClick={() => setShowMenu(true)}
//               className="w-6 md:hidden"
//               src={assets.menu_icon}
//               alt="menu"
//             />
//           </div>
//         )}

//         {/* Mobile Menu */}
//         <div
//           className={`${
//             showMenu ? "fixed w-full h-screen" : "h-0 w-0"
//           } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
//         >
//           <div className="flex items-center justify-between px-5 py-6">
//             <img className="w-36" src={assets.logo} alt="logo" />
//             <img
//               className="w-7"
//               onClick={() => setShowMenu(false)}
//               src={assets.cross_icon}
//               alt="close"
//             />
//           </div>
//           <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
//             <NavLink onClick={() => setShowMenu(false)} to="/">
//               <p className="px-4 py-2 rounded inline-block">Home</p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/doctors">
//               <p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/about">
//               <p className="px-4 py-2 rounded inline-block">ABOUT</p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/contact">
//               <p className="px-4 py-2 rounded inline-block">CONTACT</p>
//             </NavLink>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
 
