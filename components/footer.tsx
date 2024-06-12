import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="max-w-sm m-auto flex flex-col items-center gap-2 pb-2">
      <div className="flex gap-1">
        {SOCIAL_LINKS.map((link) => {
          return (
            <Button
              variant="link"
              className="text-2xl hover:text-primary-foreground"
            >
              <a href={link.href} target="_blank">
                <link.icon />
              </a>
            </Button>
          );
        })}
      </div>
      <div className="text-muted-foreground">
        &copy; {new Date().getFullYear()} Emanuel Pontoni
      </div>
    </footer>
  );
}
