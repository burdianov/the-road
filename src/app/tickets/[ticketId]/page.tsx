import Link from "next/link";

import Placeholder from "@/components/custom/placeholder";
import { Button } from "@/components/ui/button";
import TicketItem from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { ticketsPath } from "@/paths";

interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

export default async function TicketPage({ params }: TicketPageProps) {
  const ticket = await getTicket((await params).ticketId);

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
    <div className="flex w-full justify-center mx-auto animate-fade-in-from-top max-w-[420px]">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
}
