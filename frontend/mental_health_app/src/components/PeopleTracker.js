import React, { useState, useEffect } from 'react';

function PeopleTracker() {
  const [data, setData] = useState(null);
  const [numPeople, setNumPeople] = useState(0);
  const [numGroups, setNumGroups] = useState(0);

  // useEffect(() => {
  //   // Simulating receiving data from an API or somewhere else
  //   const receivedData = {
  //     // your received JSON data here
  //   };
  //
  //   setData(receivedData);
  // }, []);
  //
  // useEffect(() => {
  //   if (data) {
  //     // Count the number of people
  //     const numberOfPeople = data.people.length;
  //     setNumPeople(numberOfPeople);
  //
  //     // Count the number of groups
  //     const numberOfGroups = Object.keys(data.groups).length;
  //     setNumGroups(numberOfGroups);
  //   }
  // }, [data]);

  return (
      <div>
        <p>heyyy thereee!! coming right up is the number of people passing infront of the screen</p>
        {data ? (
            <div>

              <p>Number of people: {numPeople}</p>
              <p>Number of groups: {numGroups}</p>
            </div>
        ) : (
            <p>Loading data...</p>
        )}
      </div>
  );
}

export default PeopleTracker;
