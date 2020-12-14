.PHONY: build run stop

build:
	docker build . --tag apigear/docs

run:
	docker run --rm -p 5004:5000 --name apigear-docs apigear/docs

stop:
	docker stop apigear-docs
