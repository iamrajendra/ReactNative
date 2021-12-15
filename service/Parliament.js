import React from 'react';



const getParliament = async () => {
     try {
      const response = await fetch('https://raw.githubusercontent.com/iamrajendra/services/master/seats.json');
      const json = await response.json();
      //setData(json);
    } catch (error) {
      console.error(error);
    } finally {
//      setLoading(false);
    }
  }

  export {getParliament};
