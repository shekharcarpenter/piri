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

