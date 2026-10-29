import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const metrics = [
  {value: '6+', label: 'Doc sections', to: '/docs/React-Design-System'},
  {value: '20+', label: 'Blog posts', to: '/blog'},
  {value: '1', label: 'Glossary', to: '/docs/improvements/glossary'},
  {value: '3', label: 'Sister sites', to: '/docs/Awesome-email-marketing'}, // community-links page lands via #245
];

export default function MetricsStrip(): React.ReactElement {
  return (
    <section className={styles.strip} aria-label="Documentation metrics">
      <div className="container">
        <div className={styles.grid}>
          {metrics.map((metric) => (
            <Link key={metric.label} className={styles.metric} to={metric.to}>
              <span className={styles.value}>{metric.value}</span>
              <span className={styles.label}>{metric.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
