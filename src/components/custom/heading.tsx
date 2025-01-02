import { Separator } from "../ui/separator";

interface HeadingProps {
  title: string;
  description?: string;
}

export default function Heading({ title, description }: HeadingProps) {
  return (
    <>
      <div className="px-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      <Separator />
    </>
  );
}
