import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export type RelatedLink = {
  label: string;
  to: string;
};

type Props = {
  title?: string;
  items: RelatedLink[];
};

export default function RelatedResources({
  title = 'Related',
  items,
}: Props): React.ReactElement {
  if (!items.length) {
    return <></>;
  }
  return (
    <aside className={styles.related} aria-label={title}>
      <h3 className={styles.heading}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
