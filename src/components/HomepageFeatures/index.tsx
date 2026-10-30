import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  to: string;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'React Design System',
    to: '/docs/React-Design-System',
    description: (
      <>
        Components, typography, tables, and remix templates for HTML email.
      </>
    ),
  },
  {
    title: 'Generators',
    to: '/docs/markdown-to-email',
    description: (
      <>
        Markdown-to-email pipeline notes, error handling, and improvement tasks.
      </>
    ),
  },
  {
    title: 'Glossary & improvements',
    to: '/docs/improvements/glossary',
    description: (
      <>
        Shared vocabulary plus bottlenecks, entities, and future steps for the stack.
      </>
    ),
  },
];

function Feature({title, to, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>
          <Link to={to}>{title}</Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
