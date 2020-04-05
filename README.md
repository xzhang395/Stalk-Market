# Stalk-Market
crowdsourcing the best turnip price

# Hosting URL: [stalk-market.com](stalk-market.com)

# Prerequisite
### Setup firebase

Install firebase CLI
```
$ npm install -g firebase-tools
```

Log into firebase
```
$ firebase login
```

Initialize the project
```
$ firebase init
```

# How to run and develop locally

## `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# Deploying any changes
## `1. yarn build`
This command builds the React artifacts into the a `build` folder. This step is necessary for productionalizing the source code prior to pushing it to firebase hosting. 

## `2. firebase serve`
This commands tests the build code as firebase would run it. It's a good check to determine if there are anything that runs okay in the React application but are imcompatible with Firebase. 

##  `3. firebase deploy`
This command will deploy the any production ready code and artifacts from your designated folder (should be `build` in this case) to Firebase. This command should also return a url where the new webapp is being hosted. 