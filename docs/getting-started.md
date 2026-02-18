# Getting Started with LAD Docs

**Created:** 2024-02-18  
**Category:** Documentation  
**Tags:** #getting-started #guide #setup

## Overview

Welcome to LAD Docs! This repository is your personal knowledge base for storing notes, procedures, commands, and AI workflow templates. This guide will help you get started quickly.

## Quick Setup

### 1. Clone and Install

```bash
# Clone the repository (if not already done)
git clone https://github.com/carlardron/lad-docs.git
cd lad-docs

# Install dependencies (currently none, but good practice)
npm install
```

### 2. Try the Scripts

```bash
# List all documents
npm run list-all

# Create a new directory
npm run create-dir docs/my-project

# Search for content
npm run search "docker"
```

## Creating Your First Document

### Interactive Creation

```bash
npm run new
```

Follow the prompts:
1. **Category**: Choose `docs`, `procedures`, or `ai-procedures`
2. **Title**: Enter a descriptive title
3. **Template**: Choose `note`, `procedure`, or `ai-sprint`
4. **Subdirectories**: Optional - organize hierarchically

### Example: Create a Note

```bash
npm run new

# Responses:
# Category: docs
# Title: My First Note
# Template: note
# Subdirectories: getting-started
```

This creates: `docs/getting-started/my-first-note.md`

## Organizing Your Knowledge Base

### Recommended Structure

```
docs/
├── projects/           # Project-specific documentation
│   ├── project-a/
│   └── project-b/
├── technologies/       # Technology references
│   ├── nodejs/
│   ├── docker/
│   └── databases/
├── meetings/          # Meeting notes
└── ideas/             # Ideas and brainstorming

procedures/
├── development/       # Development procedures
├── deployment/        # Deployment procedures
├── maintenance/       # Maintenance tasks
└── troubleshooting/   # Problem-solving guides

ai-procedures/
├── active/           # Current sprints
├── completed/        # Completed sprints
└── templates/        # Custom workflow templates
```

### Creating the Structure

```bash
# Create project directories
npm run create-dir docs/projects/my-app
npm run create-dir docs/projects/my-app/backend
npm run create-dir docs/projects/my-app/frontend

# Create procedure categories
npm run create-dir procedures/deployment
npm run create-dir procedures/troubleshooting

# Create AI procedure organization
npm run create-dir ai-procedures/active
npm run create-dir ai-procedures/completed
```

## Using Templates

### Note Template
Best for:
- Quick notes and observations
- Reference information
- Research findings
- Meeting notes

### Procedure Template
Best for:
- Step-by-step instructions
- Command sequences
- Troubleshooting guides
- Setup procedures

### AI Sprint Template
Best for:
- AI-assisted development projects
- Structured workflows
- Sprint planning
- Complex feature development

## Search and Discovery

### Search by Content

```bash
# Find all documents mentioning "API"
npm run search API

# Find Docker commands
npm run search "docker compose"

# Find configuration files
npm run search "config"
```

### Browse by Category

```bash
# List everything
npm run list-all

# List specific category
npm run list docs
npm run list procedures
npm run list ai-procedures
```

## Tips for Effective Use

### 1. Be Consistent with Naming
- Use lowercase with hyphens: `my-document-name.md`
- Be descriptive but concise
- Include context: `nodejs-async-patterns.md` not `async.md`

### 2. Use Tags and Metadata
Add tags at the top of documents:
```markdown
**Tags:** #nodejs #async #patterns #advanced
```

### 3. Link Related Documents
Create connections between related content:
```markdown
## Related
- [Node.js Basics](../basics/nodejs-intro.md)
- [Async Procedure](../../procedures/async-handling.md)
```

### 4. Keep Templates Updated
Modify templates in `templates/` to match your evolving needs.

### 5. Regular Maintenance
- Archive old documents
- Update outdated procedures
- Consolidate similar notes
- Use search to find duplicates

## Working with AI

### Point AI to Templates
When working with AI assistants:
```
"Use the AI Sprint template at ai-procedures/templates/ai-sprint.md 
to plan the user authentication feature"
```

### Define Constraints
Create a constraints document:
```bash
npm run new
# Category: ai-procedures
# Title: Global Constraints
# Template: note
```

### Reference Examples
Point AI to completed sprints as examples:
```
"Follow the pattern in ai-procedures/example-user-auth-sprint.md"
```

## Advanced Usage

### Create Custom Templates

1. Add a new template file:
```bash
touch templates/my-custom-template.md
```

2. Use it with the new command:
```bash
npm run new
# Template: my-custom-template
```

### Extend Scripts

Scripts are in `scripts/` directory. You can:
- Modify existing scripts
- Add new utility scripts
- Create shortcuts in package.json

Example - Add a backup script to package.json:
```json
"scripts": {
  "backup": "tar -czf backup-$(date +%Y%m%d).tar.gz docs/ procedures/ ai-procedures/"
}
```

### Use with Git

```bash
# Regular commits
git add .
git commit -m "Add procedure for database backup"
git push

# Create topic branches
git checkout -b feature/api-documentation
# ...make changes...
git push -u origin feature/api-documentation
```

## Next Steps

1. **Create your first documents**
   - A note in `docs/`
   - A procedure in `procedures/`
   - Try the AI Sprint template

2. **Organize your structure**
   - Plan your directory hierarchy
   - Create directories with `npm run create-dir`

3. **Start capturing knowledge**
   - Document procedures as you perform them
   - Record commands for future reference
   - Plan projects with AI Sprint templates

4. **Explore and iterate**
   - Search your knowledge base
   - Find gaps in documentation
   - Refine your organization

## Getting Help

- Check the main [README.md](../README.md) for detailed information
- Review example documents:
  - [Example AI Sprint](../ai-procedures/example-user-auth-sprint.md)
  - [Docker Compose Guide](../procedures/docker-compose-guide.md)
- Look at templates in `templates/` directory

## References

- [Main README](../README.md)
- [Docs README](../docs/README.md)
- [Procedures README](../procedures/README.md)
- [AI Procedures README](../ai-procedures/README.md)

---

**Happy documenting! Start capturing your knowledge today. 📚✨**
