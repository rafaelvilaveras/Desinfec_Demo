import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ServicesD = ({year, month, day}) => {

    const [service, setServices] = useState('');

    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiSm9obiIsImxhc3RuYW1lIjoiRG9lIiwicm9sZV9pZCI6MSwicGhvbmUiOiI1NTUtNTU1LTU1NTUiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODQ0MzU3MDgsImV4cCI6MTY4NDQ0MjkwOH0.RL5DLJX4H7uf9CvJQk-5mgIO8jlZVa6CjFGREXeGBbU"

    function filterMonth(){
        axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/customer-historic/list`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          // setServices(response.data);
          const result = response.data.filter((data)=>{
            console.log(year + '-' + month+'-'+day)
            return ((data.date) === (year + '-' + month+'-'+day))&&data
          })
          setServices(result);
        })
        .catch((error) => {
          // Handle error
      });
    }

    useEffect(()=>{
        filterMonth(month)
    },[])

    console.log(service)

    return ( 
        <div>
            {service.map((data, key)=>{
                return <div key={'s-dot'+key} className='s-dot'> teste </div>
            })}
        </div>
     );
}
 
export default ServicesD;