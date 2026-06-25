import { ButtonLink as ButtonLinkBase } from "../ButtonLink";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof ButtonLinkBase>, "variant"> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({ variant = "primary", ...props }: Props) {
  return <ButtonLinkBase variant={variant} {...props} />;
}
