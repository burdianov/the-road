import Link from "next/link";
import { use } from "react";

import Placeholder from "@/components/custom/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

export default function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = use(params);
  const ticket = initialTickets.find(
    (ticket) => ticket.id === Number(ticketId)
  );

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket not found"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Go to Tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  );
}
