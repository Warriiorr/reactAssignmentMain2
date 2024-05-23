import React,{ useState, useEffect } from 'react';
import './App.css';
import Profile from "./components/profile/Profile";
import FullScreenLoader from './components/FullScreenLoader';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  const users = [
       {username: "Warrior", DOB: "15th May", description: "Okay make i suffer zi na"},
       {username: "Akpi nwa mma", DOB: "19th May", description: "maka wetin starnger go talk"},
       {username: "Odumje", DOB: "19th June", description: "make stranger die 100 times!!"},
       {username: "Indaboski", DOB: "19th April", description: "uwa silili welele!!"},
       {username: "Akataka", DOB: "29th May", description: "onwe ndika ndu mchozi ina ebi now"},
       {username: "POWERS", DOB: "19th May", description: "controlled Ragamofi, ehhhh"},
       {username: "Bahose", DOB: "10th Aug", description: "Onye ara, isi di mma. Iyamazi na"},
  ]

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setUsersData(users);
        setLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);
  


  return (
<div>
{loading ? <FullScreenLoader loading={loading}/> : 
    usersData.map((user, index) => (
      <Profile key={index} user={user} />
    ))
  }
    </div>
  )
}

export default App
