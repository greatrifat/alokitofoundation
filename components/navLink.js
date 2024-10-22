
import Link from "next/link";


export default function NavLink({ href, title }) {
  const isRegister = title === "Register/Login";
  

  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-lg rounded md:p-0 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white 
        ${isRegister ? " text-blue-700 hover:text-blue-400" : "text-[#abb9c4]"}`}
    >
      {title}
    </Link>
  );
};

