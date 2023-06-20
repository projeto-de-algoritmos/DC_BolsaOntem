front:
	cd frontend && npm install && npm start

back:
	cd backend && pip3 install -r requirements.txt && python3 -m flask run --host=0.0.0.0 --port=9944

project:
	@$(MAKE) -j 2 front back