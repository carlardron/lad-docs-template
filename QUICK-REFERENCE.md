# Quick Reference

Essential commands and tips for using LAD Docs.

## 📝 Creating Documents

```bash
# Interactive document creation
npm run new

# Create a new directory with README
npm run create-dir path/to/directory
```

## 🔍 Finding Information

```bash
# Search all documents
npm run search "your search term"

# List all documents
npm run list-all

# List specific category
npm run list docs
npm run list procedures
npm run list ai-procedures
```

## 📁 Directory Structure

```
docs/           → General notes and documentation
procedures/     → Step-by-step guides and commands
ai-procedures/  → AI workflow templates and sprints
templates/      → Reusable document templates
scripts/        → Utility scripts
```

## 🎯 Common Patterns

### For Quick Notes
```bash
npm run new
# Category: docs
# Template: note
```

### For Procedures
```bash
npm run new
# Category: procedures
# Template: procedure
```

### For AI Sprints
```bash
npm run new
# Category: ai-procedures
# Template: ai-sprint
```

## 💡 Pro Tips

1. **Use subdirectories** - Organize hierarchically: `docs/project/backend/api`
2. **Search before creating** - Avoid duplicates: `npm run search "topic"`
3. **Link documents** - Connect related content with markdown links
4. **Tag everything** - Add tags in document headers: `#nodejs #docker`
5. **Regular reviews** - Use `npm run list-all` to audit your knowledge base

## 🤖 Working with AI

Point AI to:
- Templates: `templates/ai-sprint.md`
- Examples: `ai-procedures/example-user-auth-sprint.md`
- Constraints: Create a constraints doc and reference it

## 📚 Learn More

- [Getting Started Guide](docs/getting-started.md)
- [Main README](README.md)
- [Example AI Sprint](ai-procedures/example-user-auth-sprint.md)
- [Docker Compose Procedure](procedures/docker-compose-guide.md)
