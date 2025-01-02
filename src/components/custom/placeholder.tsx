import { MessageSquareWarning } from "lucide-react";
import React, { cloneElement } from "react";

interface PlaceholderProps {
  label: string;
  icon?: React.ReactElement<{ className?: string }>;
  button?: React.ReactElement<{ className?: string }>;
}

export default function Placeholder({
  label,
  icon = <MessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        className: "w-16 h-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
}
