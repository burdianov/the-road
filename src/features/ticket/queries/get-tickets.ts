import { Ticket } from "../types";

import { initialTickets } from "@/data";

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  // console.log(process.env.DATABASE_URL);

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
};
