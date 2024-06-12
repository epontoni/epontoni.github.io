import ColorScheme from "@/components/color-scheme";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

export default function Navbar({
  setColorScheme,
}: {
  setColorScheme: Dispatch<SetStateAction<string>>;
}) {
  return (
    <nav className="flex items-center gap-2">
      <ModeToggle />
      <ColorScheme setColorScheme={setColorScheme} />
      <Button>
        <a href="emanuelpontoni-cv.pdf" target="_blank">
          Curriculum
        </a>
      </Button>
    </nav>
  );
}
