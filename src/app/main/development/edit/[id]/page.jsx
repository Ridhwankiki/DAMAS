import SDLCFormEdit from "@/components/sdlc/sdlc_form_edit";
import React from "react";

const page = () => {
    return (
        <div className="flex-grow justify-center items-center min-h-screen">
        <div>
          <div className="text-[#0066AE] font-semibold ml-10 mt-4">
            Edit
          </div>
          <div className="px-10 grid grid-cols-2 gap-3 mt-10 w-full">
            <SDLCFormEdit />
          </div>
        </div>
      </div>
    );
};

export default page;
