prod:
	@docker-compose down
	@docker-compose up -d
dev:
	@docker-compose down
	@docker-compose \
	-f docker-compose.yml \
	up --remove-orphans
build:
	@docker-compose build