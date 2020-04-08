# Makefile
install:
	npm install
start:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
build:
	rm -rf dist
	npm run build
