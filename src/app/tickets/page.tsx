"use client";

import { useEffect, useState } from "react";

import Heading from "@/components/custom/heading";
import TicketItem from "@/features/ticket/components/ticket-item";
import { getTickets } from "@/features/ticket/queries/get-tickets";
import { Ticket } from "@/features/ticket/types";

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const tickets = await getTickets();
      setTickets(tickets);
    };
    fetchTickets();
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />

      <div className="w-full mx-auto flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}
