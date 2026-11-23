export function SectionHeader({
  index,
  label,
  right,
}: {
  index: string;
  label: string;
  right: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-foreground/20 pb-3">
      <span className="label-mono">[{index}]</span>
      <span className="label-mono">// {label}</span>
      <span className="label-mono">{right}</span>
    </div>
  );
}