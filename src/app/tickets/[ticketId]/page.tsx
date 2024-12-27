interface TicketPageProps {
  params: { ticketId: string };
}

export default async function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = await params;
  return <h2 className="text-lg">Ticket Page {ticketId}</h2>;
}
