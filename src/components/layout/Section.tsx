import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  label: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export default function Section({
  id,
  label,
  children,
  className = "",
  contentClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto grid max-w-3xl gap-4 px-6 py-10 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-0 sm:py-12">
        <div className="sm:pr-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-black">
            {label}
          </p>
        </div>

        <div className={`min-w-0 sm:pl-10 ${contentClassName}`}>{children}</div>
      </div>
    </section>
  );
}
