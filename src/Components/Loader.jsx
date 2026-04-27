import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#F8F5F2] z-50">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-[#4e342e] border-t-transparent rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-[#4e342e] font-semibold tracking-wide">
          Loading...
        </p>
      </div>
    </div>
  );
}
// temporary comment add kar

export default Loader;