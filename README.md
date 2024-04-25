<!-- The code includes a README text file that explains how to install any dependencies and run the project (2 pts), provides a brief description of the project, problem space, and what tasks the installation addresses (1 pts), indicates explicitly if there are any constraints from the deployment environment (1 pts), and includes a collaboration record that specifies what each team member contributed to the prototype for Assignment 5 (1 pts). -->



# Requirements

NPM
React-router-dom
React-scripts
React

# Instructions for running:

Ensure you have npm installed with npm -v

Follow these instructions to run the webpage:

```
cd mental_health_app/frontend/mental_health_app
npm install React-scripts
npm install React-router-dom
npm install @mui/icons-material
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
npm install @emotion/react @emotion/styled
npm install --save-dev @babel/plugin-proposal-private-property-in-object
npm start
```

You should now be able to navigate to http://localhost:3000
and view the webpage.


## Prototype System Documentation

### Project Description and Problem Space
The project aims to alleviate mental stress among Yale students by providing an interactive webpage where users can express their feelings and access mental health resources. The tasks include mood expression and resource access. 

### Prototype Solution
The prototype is an interactive webpage where users can express their feelings and access mental health resources. It utilizes React, JS, and Html for implementation. A gesture recognition system using data from the HCI screen is planned.

### Tasks System Addresses
#### Successful Implementation:
- Homepage for mood expression.
- Branches for "Good" and "Bad" moods.

### Constraints from Deployment Environment
- None specified.

### Collaboration Record for Assignment 5
- David: Implemented gesture detection mechanism, web socket connection, and hooks to respond to state changes of the app regarding different gestures.
- Nathan: Developed branch structure and added pages.
- Alex: Implemented TailWind CSS, handled styling.
- Maxwell: Contributed content of support messages, conducted heuristic evaluations, and documented the process.



