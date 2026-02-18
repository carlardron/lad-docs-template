# AI Procedures

This directory contains AI workflow templates, sprint cycles, and structured approaches for AI-assisted development.

## Purpose

These templates help structure work for AI agents by providing:
- Clear requirements and goals
- Explicit constraints (what NOT to do)
- Structured planning and task breakdown
- Testing and validation criteria
- Retrospective and rollback procedures

## Organization

```
ai-procedures/
├── active-sprints/
│   ├── sprint-2024-01/
│   └── sprint-2024-02/
├── completed-sprints/
│   └── archive/
├── templates/
│   └── custom-workflows/
└── constraints/
    └── global-constraints.md
```

## Creating an AI Sprint

```bash
npm run new
# Select: ai-procedures
# Template: ai-sprint
```

## Sprint Cycle Workflow

1. **Specifications/Requirements** - Define what you want to build
2. **Constraints** - Define boundaries and what AI must NOT do
3. **Plan** - Outline architecture and approach
4. **Tasks** - Break down into atomic work items
5. **Test Specifications** - Define how to validate success
6. **Implementation** - Track progress and issues
7. **Validation & Documentation** - Ensure quality
8. **Retrospective** - Learn and improve

## Using with AI

When working with AI agents:

1. **Start with a Sprint Document** - Creates shared understanding
2. **Reference Constraints** - Prevents unwanted changes
3. **Break Down Tasks** - Makes work manageable and trackable
4. **Define Tests First** - Ensures measurable success criteria
5. **Document Decisions** - Captures rationale for future reference

## Tips

- Keep constraints updated as you learn
- Review completed sprints for patterns
- Adapt the template to your workflow
- Use subdirectories to separate different projects
- Link related sprints together

## Example Constraints

```markdown
### What AI Must NOT Do
- ❌ Do not modify database schema without explicit approval
- ❌ Do not remove existing tests
- ❌ Do not introduce breaking API changes
- ❌ Do not bypass security validations
```

## Example Task

```markdown
### Task: Implement User Login Endpoint
**Priority:** High
**Status:** In Progress

**Description:**
Create a POST /api/login endpoint that accepts email and password.

**Acceptance Criteria:**
- [ ] Validates email format
- [ ] Hashes password comparison
- [ ] Returns JWT token on success
- [ ] Returns 401 on invalid credentials
- [ ] Rate limits to 5 attempts per minute

**Tests:**
- [ ] Unit test for validation
- [ ] Integration test for login flow
- [ ] Security test for rate limiting
```
