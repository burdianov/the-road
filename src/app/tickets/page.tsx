import { DocumentIcon } from "@heroicons/react/24/outline";
import { CheckIcon, PencilIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";

import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  OPEN: <DocumentIcon className="size-6" />,
  IN_PROGRESS: <PencilIcon className="size-6" />,
  DONE: <CheckIcon className="size-6" />,
};

export default function TicketsPage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets Page</h2>
        <p className="text-sm text-muted-foreground">
          All your tickets at one place
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="w-full max-w-[420px] p-4 border border-slate-100 rounded"
          >
            <div>{TICKET_ICONS[ticket.status]}</div>
            <h3 className="text-lg font-semibold truncate">{ticket.title}</h3>
            <p
              className={clsx("text-sm text-slate-500 truncate", {
                "line-through": ticket.status === "DONE",
              })}
            >
              {ticket.content}
            </p>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
