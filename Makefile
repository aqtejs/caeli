prod:
	@docker-compose down
	@docker-compose up --build -d
dev:
	@docker-compose down
	@docker-compose \
	-f docker-compose.yml \
	up --remove-orphans
build:
	@docker-compose build
up:
	@docker-compose down
	@docker-compose up -d
down:
	@docker-compose down