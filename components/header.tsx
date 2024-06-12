import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import { Dispatch, SetStateAction } from "react";

export default function Header({
  setColorScheme,
}: {
  setColorScheme: Dispatch<SetStateAction<string>>;
}) {
  return (
    <header className="max-w-screen-xl m-auto h-[5rem] flex justify-between items-center px-2">
      <Logo />
      <Navbar setColorScheme={setColorScheme} />
    </header>
  );
}
