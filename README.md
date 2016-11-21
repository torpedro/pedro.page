# torpedro.com

Code for my personal website: [torpedro.com](http://torpedro.com/)

## Development

To build the website run one of the following:

```bash
# Run the dev server. Serving at http://localhost:8080/
npm run dev

# Build the website into the build/ directory
npm run build
```

## Prerequisites

To initialize the repository do:

```bash
npm install
typings install
```

### Global Tools

 * [typings](https://github.com/typings/typings) (npm install -g typings)

### Setting up latest version of Node

Use [nvm (node version manager)](https://github.com/creationix/nvm).

Get the latest nodejs version:

```bash
nvm install 5.0
nvm use 5.0
```

## HTTPS Certificate

I'm using [Let's Encrypt](https://letsencrypt.org/) to get a free HTTPS certificate.

 * [Let's Encrypt - Getting Started](https://letsencrypt.org/getting-started/)
 * [Certbot - Documentation](https://certbot.eff.org/)
 
```bash
# Run the certbot.
./certbot-auto

# Renew all certificates.
./certbot-auto renew
```
