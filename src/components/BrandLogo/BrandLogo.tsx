import cn from "classnames";

import s from "./BrandLogo.module.scss";

type Props = {
  variant?: "dark" | "light";
  className?: string;
};

export default function BrandLogo({ variant = "dark", className }: Props) {
  return (
    <span className={cn(s.root, s[variant], className)}>
      <span className={s.mark} aria-hidden="true">
        <span className={s.corner} />
        <span className={s.monogram}>IS</span>
      </span>
      <span className={s.text}>
        <strong>Interior</strong>
        <span>Design Studio</span>
      </span>
    </span>
  );
}
