interface TicketPageProps {
  params: { ticketId: string };
}

export default function TicketPage({ params }: TicketPageProps) {
  return <h2 className="text-lg">Ticket Page {params.ticketId}</h2>;
}
