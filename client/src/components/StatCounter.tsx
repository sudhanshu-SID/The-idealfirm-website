interface StatCounterProps {
  value: string;
  label: string;
  suffix?: string;
}

export default function StatCounter({ value, label, suffix = "" }: StatCounterProps) {
  return (
    <div className="text-center" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="mb-2 text-5xl font-black text-primary lg:text-6xl">
        {value}
        {suffix && <span className="text-primary">{suffix}</span>}
      </div>
      <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
