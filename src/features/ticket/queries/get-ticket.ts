import { Ticket } from "../types";

import { initialTickets } from "@/data";

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const maybeTicket = initialTickets.find((ticket) => ticket.id === ticketId);

  return new Promise((resolve) => {
    resolve(maybeTicket || null);
  });
};
