import { useState, useEffect } from "react";
import "./App.css";
import VehicleCard from './VehicleCard';

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=30");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  useEffect(() => {
      const response =  fetch(
          "https://api.unsplash.com/search/photos/?per_page=30&client_id=AMjRW_wUY9AUQb1tLUzzP6ifBxsF9IEVGNUe4_f9LN4&query=cars"
          
      )
        .then((res) => res.json())
        .then((res) => setPhotos(res.results));
        // to do: ustawić w stanie zdjec array 10ciu elementów  
        
  },[])
     
  const filterCards = (event) => {


    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((user) => 
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(value)
      );

    setUsers(filteredUsers);
    
  }

  return (
    <div className="App">
      <h1>Moja Flota</h1>
      <input className="search-box" 
      onInput={filterCards} 
      placeholder="Szukaj..."
      />
      
      <div className="cards-container">
       
        {users.map((user, index) => (
         <VehicleCard photos={photos[index]} key={index} userData={user} />
      
        ))}
       </div>
    </div>
    
  );
}
export default App;
