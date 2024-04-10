if ! command -v npm &> /dev/null
then
    echo "npm could not be found, please install npm."
    exit
fi

echo "Navigating to the project directory..."
cd mental_health_app/frontend/mental_health_app || exit

echo "Installing React-scripts..."
npm install react-scripts

echo "Installing React-router-dom..."
npm install react-router-dom

echo "Starting the application..."
npm start

echo "Application is running. Navigate to http://localhost:3000 to view the webpage."
