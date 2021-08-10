# Stride Student Portal

## Front-end

## Back-end

All of the back-end code of the project can be found in the `server` directory. We're using Django to bootstrap the app and django_rest_framework to work with APIs.

### Running locally

- Create a virtual environment called `.venv` in the `server` directory by running `python -m venv .venv` in a terminal.
- Start the virtual environment. On Mac, run `source .venv/bin/activate`. On Windows, run `.\.venv\Scripts\activate`.
- Install dependencies by running `pip install -r requirements.txt`.
- Go to the `core` directory in the terminal and check that the server runs with `python manage.py runserver`.
- Do a migration with `python manage.py migrate`.
- Then create a superuser you can log in with using `python manage.py createsuperuser`.
- Navigate to `localhost:8000/core` and log in with your superuser credentials.

### Performing GET, POST, DELETE, UPDATE requests in the browser

- Navigate to `http://127.0.0.1:8000` and you'll see all of the APIs available.
- Go to the URL for the API you want to call.
