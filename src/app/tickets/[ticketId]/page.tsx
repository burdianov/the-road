import { notFound } from "next/navigation";

import TicketItem from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";

interface TicketPageProps {
  params: { ticketId: string };
}

export default async function TicketPage({ params }: TicketPageProps) {
  const ticket = await getTicket((await params).ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex w-full justify-center mx-auto animate-fade-in-from-top max-w-[420px]">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
}
