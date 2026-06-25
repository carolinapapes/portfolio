import styles from "./TokenPreviewCard.module.css";
import { ButtonLink } from "./token-preview/ButtonLink";
import { Card } from "./token-preview/Card";
import { Divider } from "./token-preview/Divider";
import { Note } from "./token-preview/Note";
import { Tag } from "./token-preview/Tag";
import { Title } from "./token-preview/Title";

type ThemeId =
  | "minimal"
  | "neobrutalism"
  | "futuristic"
  | "soft-pop"
  | "terminal"
  | "luxury";

type TokenPreviewAction = {
  label: string;
  href: string;
};

type TokenPreviewCardProps = {
  themeId: ThemeId;
  themeName: string;
  tag: string;
  title: string;
  body: string;
  primaryAction: TokenPreviewAction;
  secondaryAction: TokenPreviewAction;
  note?: string;
};

export function TokenPreviewCard({
  themeId,
  themeName,
  tag,
  title,
  body,
  primaryAction,
  secondaryAction,
  note,
}: TokenPreviewCardProps) {
  return (
    <div
      className={styles.preview}
      data-theme={themeId}
      data-token-preview=""
    >
      <span className={styles.themeName}>{themeName}</span>

      <Card>
        <div>
          <Tag>{tag}</Tag>
          <Title>{title}</Title>
          <p className={styles.body}>{body}</p>
        </div>

        <div>
          <div className={styles.actions}>
            <ButtonLink href={primaryAction.href}>
              {primaryAction.label}
            </ButtonLink>

            <ButtonLink href={secondaryAction.href} variant="secondary">
              {secondaryAction.label}
            </ButtonLink>
          </div>

          {note ? (
            <>
              <Divider />
              <Note>{note}</Note>
            </>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
