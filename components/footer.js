import Image from "next/image";
export default function Footer(){
    return(
        <footer className="footer bg-blue-100 border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-black">
      <div className=" container p-12 flex justify-between">
        <span>Alokito Foundation</span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
    )
}