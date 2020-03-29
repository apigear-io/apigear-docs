.PHONY: init serve

init:
	pip install -r requirements.txt

serve:
	mkdocs serve
