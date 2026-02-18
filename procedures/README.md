# Procedures

This directory contains step-by-step procedures, commands, and how-to guides.

## Organization

Organize procedures by category:

```
procedures/
├── deployment/
│   ├── deploy-to-production.md
│   └── rollback-procedure.md
├── development/
│   ├── setup-dev-environment.md
│   └── running-tests.md
├── maintenance/
│   ├── database-backup.md
│   └── log-rotation.md
└── troubleshooting/
    ├── common-errors.md
    └── performance-issues.md
```

## Creating Procedures

```bash
npm run new
# Select: procedures
# Template: procedure
```

## Procedure Template Features

- **Purpose** - What the procedure accomplishes
- **Prerequisites** - What's needed before starting
- **Steps** - Numbered steps with commands
- **Expected Results** - What success looks like
- **Troubleshooting** - Common issues and solutions

## Tips

- Include example commands with explanations
- Document expected outputs
- Note any prerequisites or dependencies
- Link to related procedures
- Update procedures when they change
