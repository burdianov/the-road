import { Suspense } from "react";

import Heading from "@/components/custom/heading";
import TicketList from "@/features/ticket/components/ticket-list";

export default function TicketsPage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets Page"
        description="All your tickets at one place"
      />

      <Suspense fallback={<div>Loading...</div>}>
        <TicketList />
      </Suspense>
    </div>
  );
}
