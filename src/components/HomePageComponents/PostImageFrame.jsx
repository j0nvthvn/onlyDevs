import { useState } from "react";

export const PostImageFrame = () => {
  const [bgColor, setBgColor] = useState("#e5e7eb");
  
  return (
    <div className="rounded-lg overflow-hidden flex items-center justify-center max-h-[500px] bg-amber-600">
      <img
        src="https://images.unsplash.com/photo-1590099914662-a76f2f83b802?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="object-contain max-h-[500px]"
      />
    </div>
  );
};
