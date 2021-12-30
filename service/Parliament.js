import React from 'react';




  export const getParliament = () => {
    return fetch('https://raw.githubusercontent.com/iamrajendra/services/master/seats.json')
      .then((response) => response.json())
      .then((json) => { //console.log("result 2",json)
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };

