import type { LucideIcon } from "lucide-react";
import type { PropsWithChildren } from "react";

type BentoCardProps = PropsWithChildren<{
  className?: string;
  icon: LucideIcon;
  title: string;
}>;

export function BentoCard({ children, className = "", icon: Icon, title }: BentoCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-white/65 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#3073ff]/35 hover:shadow-2xl hover:shadow-[#3073ff]/15 ${className}`}
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#3073ff]/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex h-full min-h-44 flex-col justify-between gap-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background transition group-hover:bg-[#3073ff]">
          <Icon aria-hidden className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
          <p className="mt-4 max-w-xl leading-7 text-muted">{children}</p>
        </div>
      </div>
    </article>
  );
}
