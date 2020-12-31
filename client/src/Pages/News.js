import React, {useEffect, useState, useContext} from 'react'
import Sector from "../Components/Sector/index"
import Axios from 'axios';

function News() {

  const [sectorInfo, setSectorInfo] = useState([]);

const getSector = async () => {
  const response = await Axios.get(`/users/sectors`)
  setSectorInfo(response.data);
}

useEffect(() => {
  getSector();
}, [])

  return (
    <div>
            <h2>Sectors</h2>
      {sectorInfo.map((item) => {
        return (
        <Sector name={item.name} performance={item.performance}/>
        )
      })}
      
    </div>
  )
}

export default News
