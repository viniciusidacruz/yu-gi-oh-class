import pineapple from "@assets/images/pinneaple.png";

export const Footer = () => (
  <footer className="w-full py-[38px] bg-[#131A0A] mt-[86px]">
    <div className="flex items-center justify-between container mx-auto px-8 relative">
      <p className="text-xs text-white">
        &copy; 2023 FPR Animes - Todos os direitos reservados.
      </p>
      <img
        src={pineapple}
        alt="pineapple"
        className="absolute -top-30 lg:-right-30 right-0"
      />
    </div>
  </footer>
);
