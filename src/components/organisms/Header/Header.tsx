import Link from "next/link";
import { ProfileButton } from "./ProfileButton";
// import { ThemeSwitchButton } from "./ThemeSwitchButton";
// import { DocSearchButton } from "./DocSearchButton";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-8">
      <Link href={"/"} className="text-2xl font-bold sm:block">
        blog.kazizi.dev
      </Link>

      {/* TODO: kazizi.devの構築 */}
      {/* <ProfileButton /> */}

      {/* TODO: ロジックの実装 */}
      {/* <ThemeSwitchButton /> */}
      {/* <DocSearchButton /> */}
    </header>
  );
};
