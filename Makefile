
# Validating Makefile for Next.js Project
# ----------------------------------------

# Variables
PORT := 3000
URL := http://localhost:$(PORT)

.PHONY: help install dev build start lint test clean open kill-port deploy

# Default target
help:
	@echo "Available commands:"
	@echo "  make install    - Install dependencies"
	@echo "  make dev        - Start development server and open browser"
	@echo "  make build      - Build the application for production"
	@echo "  make start      - Start production server"
	@echo "  make lint       - Run linter"
	@echo "  make test       - Run tests"
	@echo "  make clean      - Clean .next folder and node_modules"
	@echo "  make kill-port  - Kill process running on port $(PORT)"
	@echo "  make deploy     - Alias for 'make dev' (as requested)"

install:
	npm install

# Start dev server and open browser
# Note: We use 'open' (macOS) to launch the browser. 
dev: kill-port
	@echo "Opening $(URL)..."
	@open $(URL) || echo "Could not open browser automatically"
	npm run dev

# Alias as requested by user
deploy: dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

test:
	npm run test

clean:
	rm -rf .next node_modules
	@echo "Cleaned .next and node_modules"

open:
	open $(URL)

kill-port:
	@echo "Killing process on port $(PORT)..."
	@lsof -ti:$(PORT) | xargs kill -9 || true
	@echo "Removing stale lock file..."
	@rm -f .next/dev/lock
