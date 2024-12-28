import { use } from "react";

import { initialTickets } from "@/data";

interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

export default function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = use(params);
  const ticket = initialTickets.find(
    (ticket) => ticket.id === Number(ticketId)
  );

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-sm">{ticket.content}</p>
    </div>
  );
}
