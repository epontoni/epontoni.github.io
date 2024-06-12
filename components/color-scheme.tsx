"use client";

import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { COLOR_SCHEMES } from "@/constants";
import { Dispatch, SetStateAction } from "react";

export default function ColorScheme({
  setColorScheme,
}: {
  setColorScheme: Dispatch<SetStateAction<string>>;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {COLOR_SCHEMES.map((scheme) => {
          return (
            <DropdownMenuItem onClick={() => setColorScheme(scheme)}>
              {scheme.split("-")[1][0].toUpperCase()}
              {scheme.split("-")[1].slice(1)}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
