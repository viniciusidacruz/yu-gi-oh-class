import pineapple from "@assets/images/pinneaple.png";

export const Footer = () => (
  <footer className="w-full py-[38px] bg-[#131A0A] mt-[86px] relative">
    <div className="flex items-center justify-between container mx-auto px-8">
      <p className="text-xs text-white">
        &copy; 2023 FPR Animes - Todos os direitos reservados.
      </p>
    </div>

    <img src={pineapple} alt="pineapple" className="absolute -top-20 right-0" />
  </footer>
);
