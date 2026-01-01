type DotGridProps = {
  rows?: number;
  cols?: number;
  width?: number;
  height?: number;
  gap?: number;
  className?: string;
  dotClassName?: string;
};

export function DotGrid({
  rows = 5,
  cols = 2,
  width = 63,
  height = 155,
  gap = 12,
  className = "",
  dotClassName = "",
}: DotGridProps) {
  const totalDots = rows * cols;

  return (
    <div
      className={`grid place-items-center ${className}`}
      style={{
        width,
        height,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        rowGap: gap,
        columnGap: gap,
      }}
    >
      {Array.from({ length: totalDots }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full bg-white ${dotClassName}`}
          style={{
            width: `calc(
              (100% - ${(cols - 1) * gap}px) / (${cols} * 2)
            )`,
            aspectRatio: "1 / 1",
          }}
        />
      ))}
    </div>
  );
}
