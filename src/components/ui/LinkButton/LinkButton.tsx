import cn from "classnames";
import { Link, type LinkProps } from "react-router-dom";

import s from "./LinkButton.module.scss";

type Props = LinkProps & {
  variant?: "primary" | "secondary" | "light";
};

export default function LinkButton({
  children,
  className,
  variant = "primary",
  ...props
}: Props) {
  return (
    <Link className={cn(s.root, s[variant], className)} {...props}>
      {children}
    </Link>
  );
}
