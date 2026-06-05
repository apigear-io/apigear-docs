import React from 'react';
import Link from '@docusaurus/Link';

export default function FinalCtaSection() {
  return (
    <div className="container text--center">
      <h2>Define once. Generate everywhere.</h2>
      <p>Install the CLI and generate your first SDK in minutes — free and open source.</p>
      <div className="margin-top--lg">
        <Link
          className="button button--primary button--lg margin-right--sm"
          to="/docs/guide/quick-start">
          Get Started
        </Link>
        <Link
          className="button button--secondary button--lg"
          to="https://github.com/apigear-io">
          View on GitHub
        </Link>
      </div>
    </div>
  );
}
