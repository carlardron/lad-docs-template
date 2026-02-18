# Docker Compose Setup and Common Commands

**Created:** 2024-02-18  
**Last Updated:** 2024-02-18  
**Category:** Development Tools  
**Status:** Active

## Purpose

This procedure covers setting up and using Docker Compose for local development environments, including common commands and troubleshooting steps.

## Prerequisites

- Docker Desktop installed (Mac/Windows) or Docker Engine + Docker Compose (Linux)
- Basic understanding of containers
- A docker-compose.yml file in your project

## Steps

### 1. Verify Docker Installation

```bash
# Check Docker version
docker --version

# Check Docker Compose version
docker compose version

# Verify Docker is running
docker ps
```

Expected output: Version information and empty container list (or existing containers).

---

### 2. Create Docker Compose File

Create a `docker-compose.yml` file in your project root:

```yaml
version: '3.8'

services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    
  database:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

---

### 3. Start Services

```bash
# Start all services in detached mode
docker compose up -d

# Start specific service
docker compose up -d web

# Start with rebuilding images
docker compose up -d --build
```

Expected output: Services starting, networks created, volumes mounted.

---

### 4. Check Service Status

```bash
# List running services
docker compose ps

# View logs for all services
docker compose logs

# View logs for specific service
docker compose logs web

# Follow logs in real-time
docker compose logs -f
```

---

### 5. Execute Commands in Containers

```bash
# Run command in running container
docker compose exec web sh

# Run one-off command
docker compose run web ls -la

# Run database migrations
docker compose exec database psql -U user -d myapp
```

---

### 6. Stop and Remove Services

```bash
# Stop services (keeps containers)
docker compose stop

# Stop and remove containers
docker compose down

# Stop and remove containers + volumes
docker compose down -v

# Stop and remove everything including images
docker compose down --rmi all -v
```

---

## Expected Results

After running `docker compose up -d`, you should see:
- All services in "Up" state when running `docker compose ps`
- Services accessible on their configured ports
- Persistent data in volumes maintained between restarts

## Troubleshooting

### Issue 1: Port Already in Use
**Problem:** `Error: bind: address already in use`
**Solution:** 
```bash
# Find process using the port
lsof -i :8080  # Mac/Linux
netstat -ano | findstr :8080  # Windows

# Kill the process or change port in docker-compose.yml
```

### Issue 2: Container Won't Start
**Problem:** Container exits immediately after starting
**Solution:**
```bash
# Check logs for error messages
docker compose logs <service_name>

# Validate docker-compose.yml syntax
docker compose config

# Try running in foreground to see errors
docker compose up <service_name>
```

### Issue 3: Permission Denied on Volumes
**Problem:** Cannot write to mounted volumes
**Solution:**
```bash
# Check file permissions
ls -la ./mounted-directory

# Fix permissions
chmod -R 755 ./mounted-directory

# Or run container with user permissions
# Add to service in docker-compose.yml:
# user: "${UID}:${GID}"
```

### Issue 4: Services Can't Communicate
**Problem:** One service can't reach another
**Solution:**
```bash
# Use service names as hostnames
# In web service, connect to: postgresql://database:5432

# Check networks
docker compose network ls
docker network inspect <network_name>

# Ensure services are on same network
```

## Common Workflows

### Development Workflow

```bash
# 1. Start services
docker compose up -d

# 2. Watch logs while developing
docker compose logs -f web

# 3. Rebuild after code changes
docker compose up -d --build

# 4. Stop when done
docker compose down
```

### Testing Workflow

```bash
# Run tests in container
docker compose run --rm web npm test

# Run with fresh database
docker compose down -v
docker compose up -d database
docker compose run --rm web npm run test:integration
```

### Production Deployment Check

```bash
# Use production compose file
docker compose -f docker-compose.prod.yml config

# Pull latest images
docker compose -f docker-compose.prod.yml pull

# Deploy with no downtime
docker compose -f docker-compose.prod.yml up -d --no-deps --build web
```

## Notes

- Always use `docker compose` (v2) instead of `docker-compose` (v1) for newer features
- Store sensitive data in `.env` files, never commit them to git
- Use named volumes for persistent data
- Use bind mounts for development code
- Health checks help ensure services are truly ready
- Resource limits prevent one service from consuming all resources

## Related Procedures

- [Docker Networking](./docker-networking.md)
- [Container Security Best Practices](./container-security.md)
- [Local Development Environment Setup](./dev-environment-setup.md)
