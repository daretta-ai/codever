import styles from "./Logo.module.css";

type Variant = "full" | "abbrev";

export function Logo({
  variant = "full",
  size = 18,
  invert = false,
  className,
}: {
  variant?: Variant;
  size?: number;
  invert?: boolean;
  className?: string;
}) {
  const word = variant === "full" ? "CODEVER" : "C";
  return (
    <span
      className={[
        styles.logo,
        invert ? styles.invert : "",
        className ?? "",
      ].filter(Boolean).join(" ")}
      style={{ fontSize: size }}
      aria-label={variant === "full" ? "Codever" : "Codever — abbreviated"}
    >
      <span className={styles.br} aria-hidden="true">&lt;</span>
      <span className={styles.word}>{word}</span>
      <span className={styles.br} aria-hidden="true">&gt;</span>
    </span>
  );
}
