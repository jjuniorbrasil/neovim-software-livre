import { ReactNode } from "react";
import { Info, AlertTriangle } from "lucide-react";

interface AlertProps {
  title: string;
  children: ReactNode;
  variant?: "info" | "warning";
}

export function Alert({ title, children, variant = "info" }: AlertProps) {
  const isInfo = variant === "info";

  return (
    <div
      className={`
      w-full my-6 flex gap-4 p-6 border-l-4 rounded-sm
      ${
        isInfo
          ? "bg-emerald-500/5 border-emerald-500 text-emerald-200/90"
          : "bg-amber-500/5 border-amber-500 text-amber-200/90"
      }
    `}
    >
      <div className="shrink-0 mt-1">
        {isInfo ? (
          <Info className="w-6 h-6 text-emerald-500" />
        ) : (
          <AlertTriangle className="w-6 h-6 text-amber-500" />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span
          className={`font-bold text-lg ${isInfo ? "text-emerald-400" : "text-amber-400"}`}
        >
          {title}
        </span>
        <div className="text-base leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
