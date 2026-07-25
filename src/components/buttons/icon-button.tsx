import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/button";

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
  label: string;
}

export function IconButton({ icon, label, className, ...props }: IconButtonProps) {
  return (
    <Button
      size="icon"
      variant="ghost"
      aria-label={label}
      className={cn("rounded-full", className)}
      {...props}
    >
      {icon}
    </Button>
  );
}
