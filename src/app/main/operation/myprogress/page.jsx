import TableNetwork from '@/components/network/network_table';
import React from 'react'
import { MdArrowDropDown } from "react-icons/md";

const page = () => {
  return (
    <div>
    <div className="w-full px-5 py-5 mt-4">
      <div className="w-full flex justify-between items-center">
        <span className="text-[#0066AE] font-semibold">My Progress</span>
        <span className="text-end flex"> sort by <MdArrowDropDown className="ml-1 mt-auto" /></span>
      </div>
    </div>
    <div className="flex-grow justify-center items-center min-h-screen mt-4">
    <TableNetwork/>
    </div>
    </div>
  );
}

export default page