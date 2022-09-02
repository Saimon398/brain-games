install:
	npm ci # Подгружает зависимости, если node_modules удалена или репозиторий клонирован
brain-games:
	node bin/brain-games.js # Запускает исполняемый файл
publish:
	npm publish --dry-run # Имитирует публикацию приложения в NPM-пакет
link:
	npm link
lint:
	npx eslint .
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest . # Запускает тестирование
