## Prerequisites

Refer to https://nodejs.org/en/ to install nodejs

* Ubuntu / MAC Preffered
* Python 3.6.9
* Postgres

### Environment Setup.
    sudo apt-get update
    sudo apt install python3-venv
    python3 -m venv venv
    source venv/bin/activate

#### Install Requirements

```pip install -r requirments.txt```

### Environment Variables
    SECRET_KEY : Update it for security purpose
    DEBUG : Set 1 for production, default is false
    DATABASE_NAME : Neme of your postgres DB
    DATABASE_USER : Postgres user
    DATABASE_PASSWORD : Database Password
    DATABASE_HOST : Host for the database

### Migrate
 Migrate the models with command
 ```python3 manage.py migrate```
 
### Run the server
Run the django server with command
```python3 manage.py runserver```

Now the server should be up and running on http://127.0.0.1:8000