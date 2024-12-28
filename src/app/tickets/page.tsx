import Link from "next/link";

import { initialTickets } from "@/data";

export default function TicketsPage() {
  return (
    <div>
      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2 className="text-lg">{ticket.title}</h2>
          <Link href={`/tickets/${ticket.id}`} className="text-sm underline">
            View
          </Link>
        </div>
      ))}
    </div>
  );
}
