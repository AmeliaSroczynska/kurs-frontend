import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NAV_LINKS } from "@/src/config";

export function Navbar() {
  return (
    <nav className="py-6 grid place-items-center">
      <Tabs defaultValue={NAV_LINKS[0].href}>
        <TabsList variant="line">
          {NAV_LINKS.map((link) => (
            <TabsTrigger key={link.id} value={link.href}>
              <Link href={link.href} className="after:absolute after:inset-0">
                {link.title}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
}
