![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D18-green)
![Status](https://img.shields.io/badge/status-template-blue)

# LAD Documentation

Welcome to the LAD documentation repository. This repository contains documentation, procedures, and guidelines for the LAD project.

## Contents

- [AI Assisted Coding Procedures](./ai-assisted-coding-procedures.md) - Guidelines and best practices for using AI-assisted coding tools

## Purpose

This repository serves as the central location for all LAD project documentation, including:
- Development procedures
- Coding standards
- Best practices
- Guidelines and workflows

## Contributing

Documentation is maintained and updated as the project evolves. For questions or suggestions, please reach out to the project maintainers.

---
*Documentation is a living resource - contributions and updates are welcome.*
# LAD Docs - Personal Knowledge Base

A flexible, Node.js-based documentation and knowledge management repository for organizing notes, procedures, commands, and AI workflow templates.

## 📚 Structure

```
lad-docs/
├── docs/           # General documentation and notes
├── procedures/     # Procedures, commands, and how-tos
├── ai-procedures/  # AI workflow templates and sprint cycles
├── templates/      # Reusable document templates
└── scripts/        # Utility scripts for document management
```

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Create a New Document

```bash
npm run new
```

This interactive command will guide you through:
- Selecting a category (docs/procedures/ai-procedures)
- Entering a document title
- Choosing a template (note/procedure/ai-sprint)
- Optionally specifying subdirectories for hierarchical organization

### Create a Directory

```bash
npm run create-dir docs/backend/api
```

Creates a new directory with a README file.

### Search Documents

```bash
npm run search "API endpoint"
```

Searches all markdown and JSON files for the specified query in both filenames and content.

### List Documents

```bash
# List all documents
npm run list-all

# List documents in a specific category
npm run list docs
npm run list procedures
npm run list ai-procedures
```

## 📝 Templates

### Note Template
For general notes and documentation. Includes:
- Overview
- Details
- References
- Notes section

### Procedure Template
For step-by-step procedures and commands. Includes:
- Purpose
- Prerequisites
- Numbered steps with code examples
- Expected results
- Troubleshooting
- Related procedures

### AI Sprint Template
For AI-assisted development workflows. Includes:
1. **Specifications/Requirements** - Project goals and requirements
2. **Constraints** - What AI must NOT do
3. **Plan** - Architecture, approach, and dependencies
4. **Tasks** - Atomic, testable work items
5. **Test Specifications** - Per task/sprint testing
6. **Implementation** - Progress tracking
7. **Validation & Documentation** - Quality gates
8. **Retrospective** - Lessons learned and rollback criteria

## 💡 Usage Examples

### Example 1: Create a Procedure

```bash
npm run new
# Category: procedures
# Title: Deploy to Production
# Template: procedure
# Subdirectories: deployment
```

### Example 2: Create an AI Sprint Cycle

```bash
npm run new
# Category: ai-procedures
# Title: User Authentication Feature
# Template: ai-sprint
# Subdirectories: backend/auth
```

### Example 3: Organize with Subdirectories

Create hierarchical organization:

```bash
npm run create-dir docs/projects/project-alpha/backend
npm run create-dir docs/projects/project-alpha/frontend
npm run create-dir docs/projects/project-alpha/deployment
```

### Example 4: Find Information

```bash
# Search for all documents mentioning "authentication"
npm run search authentication

# Search for specific command examples
npm run search "docker compose"
```

## 🎯 Use Cases

### For Personal Use
- 📋 Record notes and observations
- 📖 Document procedures and commands
- 🗂️ Organize project documentation
- 💾 Store configuration examples
- 🔍 Quickly find reference information

### For AI-Assisted Development
- 🤖 Provide structured templates for AI agents
- 📊 Track sprint cycles and progress
- ✅ Define constraints and requirements clearly
- 🔄 Maintain consistent development workflows
- 📝 Document decisions and rationale

## 🛠️ Customization

### Adding New Templates

1. Create a new template file in `templates/`:
```bash
touch templates/my-template.md
```

2. Use it with the `new` command:
```bash
npm run new
# Template type: my-template
```

### Extending Scripts

All scripts are in the `scripts/` directory and can be modified or extended:
- `new-doc.js` - Create new documents
- `create-dir.js` - Create directories
- `search.js` - Search functionality
- `list-docs.js` - List documents

## 📋 Best Practices

1. **Use Descriptive Titles** - Make document titles clear and searchable
2. **Organize Hierarchically** - Use subdirectories to group related documents
3. **Tag Your Documents** - Add tags in your notes for better organization
4. **Keep Templates Updated** - Modify templates as your needs evolve
5. **Regular Searches** - Use the search feature to find and consolidate similar information
6. **Version Control** - Commit changes regularly to track evolution of your knowledge base

## 🔄 Workflow for AI Procedures

The AI Sprint Cycle template provides a structured approach:

```
Planning → Requirements → Constraints → Architecture → Tasks → 
Testing → Implementation → Validation → Retrospective
```

This workflow helps both humans and AI:
- Understand project scope and limitations
- Break down work into manageable tasks
- Ensure quality through testing and validation
- Learn and improve through retrospectives

## 📖 Tips for AI

When pointing AI to documents in this repository:
- Reference the AI Sprint template for structured development
- Point to specific procedures for repeatable tasks
- Use constraints documents to define boundaries
- Reference examples for consistent patterns

## 🤝 Contributing

This is a personal knowledge base, but feel free to:
- Adapt the structure for your own use
- Suggest improvements to templates
- Share useful scripts or extensions

## 📄 License

MIT

---

**Happy documenting! 📚✨**
