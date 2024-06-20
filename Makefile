publish:
# Build & Publish Core
	cd packages/core && pnpm i && pnpm build && npm publish --access=public

# Build & Publish Design System
	cd packages/design-system && pnpm i && pnpm build && npm publish --access=public

# Build & Publish Editor
	cd packages/editor && pnpm i && pnpm build && npm publish --access=public