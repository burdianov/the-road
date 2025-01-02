import { Kanban } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";

import { buttonVariants } from "@/components/ui/button";
import { homePath, ticketsPath } from "@/paths";

export default function Header() {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-10 bg-background/95 backdrop-blur w-full flex justify-between py-2.5 px-5 border-b">
      <div>
        <Button asChild variant="ghost">
          <Link href={homePath()}>
            <Kanban />
            <h1 className="ml-2 text-lg font-semibold">TicketBounty</h1>
          </Link>
        </Button>
      </div>
      <div>
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
      </div>
    </nav>
  );
}
