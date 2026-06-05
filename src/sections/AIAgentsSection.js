import React from 'react';
import Link from '@docusaurus/Link';

export default function AIAgentsSection() {
  return (
    <div className="container text--center">
      <span className="badge badge--primary">New</span>
      <h2 className="margin-top--sm">Works with your AI coding agent</h2>
      <p>
        ApiGear's CLI runs as an MCP server, so AI assistants like Claude and Cursor can
        design interfaces, validate specs, and generate SDKs from a plain-English
        description — right inside your editor.
      </p>
      <div className="margin-top--lg">
        <Link
          className="button button--primary button--lg"
          to="/blog/ai-meets-api-design-mcp">
          Read the setup guide
        </Link>
      </div>
    </div>
  );
}
