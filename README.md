# pedro.page

Use Node.js 24 (`nvm use` if you use nvm), then run `npm ci` to install the locked dependencies.

Local development: `npm run dev`

Check TypeScript: `npm run typecheck`

Build for production: `npm run build`. Publish the generated `dist/` directory to your static host.

GitHub Actions runs type-checking and the production build on pull requests, pushes to `master`, and manual runs. Successful builds are available as the `site-dist` artifact for seven days. CI does not deploy the site.

Dependabot checks npm dependencies and GitHub Actions weekly and opens update pull requests. Include `package-lock.json` when updating dependencies.
