clean:
	docker-compose kill && \
	docker-compose rm --force


ultimate: clean 
	docker-compose build
	docker-compose up -d
