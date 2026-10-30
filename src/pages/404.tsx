import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound(): JSX.Element {
  return (
    <Layout title="Page not found" description="This page does not exist.">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h1 className="hero__title">Page not found</h1>
            <p>
              We could not find that page. Try one of these starting points, or open an
              issue if a link is broken.
            </p>
            <ul>
              <li>
                <Link to="/docs/React-Design-System">React Design System</Link>
              </li>
              <li>
                <Link to="/docs/improvements/glossary">Glossary</Link>
              </li>
              <li>
                <Link to="/docs/community-links">Community links</Link>
              </li>
              <li>
                <Link to="/blog">Blog archive</Link>
              </li>
              <li>
                <a href="https://github.com/LLazyEmail/documentation">GitHub repository</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
