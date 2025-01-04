import { Ticket } from "../types";

import { initialTickets } from "@/data";

export const getTickets = async (): Promise<Ticket[]> => {
    await new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });

    return new Promise((resolve) => {
        resolve(initialTickets);
    });
};