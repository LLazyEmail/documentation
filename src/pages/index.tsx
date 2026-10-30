import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import MetricsStrip from '@site/src/components/MetricsStrip';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/React-Design-System">
            Browse docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Documentation"
      description="Email templates, React design system, generators, and project docs for LLazyEmail.">
      <HomepageHeader />
      <MetricsStrip />
      <main>
        <HomepageFeatures />
        <section className={styles.sisterSites}>
          <div className="container">
            <p>
              Sister docs sites:{' '}
              <a href="https://github.com/LLazyEmail/awesome-email-marketing">
                Awesome Email Marketing
              </a>
              {' · '}
              <a href="https://github.com/LLazyEmail/awesome-newsletters">
                Awesome Newsletters
              </a>
              . Long-term these three Docusaurus sites share one foundation.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
