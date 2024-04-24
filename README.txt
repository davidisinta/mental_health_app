********************************

Group_22 CPSC484 Assignment 5

README.txt

Alex Deng: ad2494
Nathan Hamilton: nsh28
David Nyakawa: din2
Maxwell Zhou: zz379

March 2024, Yale University



********************************

**** Installation and Running:

Our prototype is designed using the React framework; and in order to run the program on the TV, you would need to have the React Server started at the TV.

First ensure that you have npm installed with npm -v.

Then follow these instructions to install react and run the webpage:

cd frontend/mental_health_app
npm install react-scripts
npm install react-router-dom
npm install @mui/icons-material
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
npm install @emotion/react @emotion/styled
npm install --save-dev @babel/plugin-proposal-private-property-in-object
npm start



**** Project Description:

Our project is an interactive webpage to be displayed on the TV with a Kinect sensor, aiming to help users express their feelings and introduce them to mental health resources online.

$$ Problem Space: The problem space is to learn how to alleviate mental stress among Yale students.
$$ Tasks: The installation addresses two critical tasks: [1]. Users express their moods and recognize the factors affecting them; [2]. Users learn about mental health resources provided at Yale.

The prototype system will first ask the user about his or her feelings today, and and then will direct the user to corresponding pages where further expression of emotions is possible or where they can recognize the issues affecting their mood. At the end of each branch of progression, there will be a QR code via which the user can access mental health resources at Yale.



**** Constraints from the Deployment Environment:
We should have one person standing infront of the screen at a time.


**** Collaboration Record:

Alex was in charge of importing the TailWind CSS tool and designing the major interface and outlook of the webpage. Nathan and David worked on the integrating and using data from the Kinect motion sensor to enable users to navigate the pages by moving their body. Maxwell served as a testing assitant such as ensuring the project run properly on the TV, did compliance work and wrote the readme.

********************************
