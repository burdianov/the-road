import { use } from "react";

interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

export default function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = use(params);
  return <h2 className="text-lg">Ticket Page {ticketId}</h2>;
}
