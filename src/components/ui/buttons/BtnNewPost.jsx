import { Icon } from "@iconify/react/dist/iconify.js";

export const BtnNewPost = () => {
  return (
    <button className="mt-4 flex bg-primary hover:bg-primary/90 font-semibold p-2 px-4  rounded-full items-center justify-center gap-2 transition-all cursor-pointer">
      <Icon icon="ic:baseline-add" width={20} height={20} />
      <span className="hidden sm:block">Nueva Publicacion</span>
    </button>
  );
};
