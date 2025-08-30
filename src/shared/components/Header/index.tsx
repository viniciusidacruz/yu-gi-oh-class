import { FieldSearch, Logo, MiniCart } from "@/shared/components";

export const Header = () => (
  <header className="bg-[#131A0A] w-full py-8">
    <div className="flex h-full items-center justify-between container mx-auto px-8 flex-col lg:flex-row gap-4">
      <Logo />

      <div className="flex items-center gap-4">
        <FieldSearch />

        <div className="flex items-center gap-4">
          <MiniCart className="block lg:hidden" />
        </div>
      </div>

      <MiniCart className="hidden lg:block" />
    </div>
  </header>
);
