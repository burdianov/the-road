import Link from "next/link";
import { use } from "react";

import Placeholder from "@/components/custom/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";
import { ticketsPath } from "@/paths";

interface TicketPageProps {
  params: Promise<{ ticketId: string }>;
}

export default function TicketPage({ params }: TicketPageProps) {
  const { ticketId } = use(params);
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

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
