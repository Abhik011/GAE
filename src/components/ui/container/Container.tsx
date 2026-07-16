import { cn } from "@/lib/utils";

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container({
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-5 lg:px-8",
        className
      )}
      {...props}
    />
  );
}