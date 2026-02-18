![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D18-green)
![Status](https://img.shields.io/badge/status-template-blue)

# LAD Docs Template

A lightweight documentation template for building a personal or team knowledge base with Markdown + simple Node.js tooling.

Use it to organize notes, procedures, and AI-assisted workflow docs in a structure that stays easy to maintain.

## Why this template

- Keeps docs consistent with reusable templates
- Reduces setup friction with small CLI scripts
- Works well for both human readers and AI assistants
- Flexible enough for solo work, client projects, or team internal docs

## Use this as a GitHub template

1. Click **Use this template** on GitHub
2. Create your new repository
3. Clone it locally
4. Install dependencies and start creating docs

```bash
npm install
npm run new
```

## Repository structure

```text
lad-docs/
├── docs/           # General documentation and notes
├── procedures/     # Procedures, commands, and how-tos
├── ai-procedures/  # AI workflow templates and sprint cycles
├── templates/      # Reusable document templates
└── scripts/        # Utility scripts for document management
```

## CLI commands

```bash
# Interactive document creation
npm run new

# Create a directory with a README
npm run create-dir docs/backend/api

# Search filenames and file content
npm run search "authentication"

# List docs by category
npm run list docs
npm run list procedures
npm run list ai-procedures

# List all docs
npm run list-all
```

## Included templates

- **note**: General notes and references
- **procedure**: Step-by-step procedures with prerequisites and troubleshooting
- **ai-sprint**: Structured AI-assisted planning and implementation workflow

## Quick examples

```bash
# Create a new procedure
npm run new

# Create nested project folders
npm run create-dir docs/projects/project-alpha/backend

# Find references fast
npm run search "docker compose"
```

## Customization

- Add new template files in `templates/` (for example, `templates/decision-record.md`)
- Extend scripts in `scripts/` to match your workflow

## Related docs

- [Getting Started](./docs/getting-started.md)
- [Docs README](./docs/README.md)
- [Procedures README](./procedures/README.md)
- [AI Procedures README](./ai-procedures/README.md)
- [Quick Reference](./QUICK-REFERENCE.md)
- [Contributing](./CONTRIBUTING.md)

## License

MIT — see [LICENSE](./LICENSE).
