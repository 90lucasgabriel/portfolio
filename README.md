
# Portfolio
This is an [Angular 7](http://angular.io/) + [Angular Material](https://material.angular.io/) + [Cloud Firestore](https://firebase.google.com/docs/firestore) application. 


## Live Preview
https://portfolio-90lucasgabriel.firebaseapp.com


## Prerequisites
Make sure you have [Node 6.9.0 or higher, together with NPM 3 or higher](https://nodejs.org/en/) installed.

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0:
```
npm install -g @angular/cli
```

## Installing
- Clone this repo:
```
git clone git@github.com:90lucasgabriel/portfolio.git
```
- Access directory:
```
cd portfolio
```
- Install dependencies:
```
npm install
```

## Firebase Integration
- Clone src\environments\environment.example.ts and src\environments\environment.prod.example.ts without "example";
- Access [Firebase Console](https://console.firebase.google.com/);
- Create a new project;
- View project settings;
- Copy web config;
- Paste config into src\environments\environment.ts and src\environments\environment.prod.ts

## Running
- Run the app:
```
ng serve --open
```
Head to http://localhost:4200 in your browser and you'll see the app running.

The app will automatically reload if you change any of the source files.



## EXTRAS
## Firebase Functions
### SendGrid Template
- Send email when a new document is stored on Firestore 'contacts';
- Create a [SendGrid](https://sendgrid.com/) account;
- Create a new [Templates -> Transactional](https://sendgrid.com/dynamic_templates);
- Paste template:
```
Name: {{ name }}
Email: {{ email }}
Phone: {{ phone }}
Message: {{ message }}
```

### Functions and SendGrid Integration
- Access local functions directory:
```
cd functions
```
- Install dependencies:
```
npm install
```
- Copy your SendGrid KEY and set into local vars:
```
firebase functions:config:set sendgrid.key=SG.YOUR_API_KEY
```
- Change email and Template SendGrid ID index.js;
- Back to root and deploy functions:
```
cd ..
firebase deploy --only functions
```



## Compodoc Documentation
- Generate documentation
```
npm run compodoc
```
- Serve documentation
```
compodoc -s -o
```
