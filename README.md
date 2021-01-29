# Backend Setup
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

 ***
# Front-end setup
## Prerequisites

Refer to https://nodejs.org/en/ to install nodejs

* Ubuntu / MAC Preffered
* npm Version 6.14.9
* node v14.15.3
 ---
## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**  

 ---


## Application design

#### Components

1. **regestrationForm** Component : This Component displays the registration form, and proper validation messages coming from the backend.
   
2. **thankYou** Component : The Component displays a ThankYou Message on successful registration

 ---

#### HTTP client

**axios** library is being used to make HTTP Calls. 
1. **GodInterceptor** : This is serving as the interceptor for request and response.
2. **API.js** :  This is the main API file which manages all the api call on abstract level.
3. **register.Js** : It handles APIs for individual component. 

