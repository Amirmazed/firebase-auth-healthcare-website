import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import Footer from '../../Footer/Footer';




const Booking = () => {
    let {id} = useParams();
  


    const [details, setDetails] = useState([])
    const [singleCar, setSingleCar] = useState([])
    useEffect(() => {
        fetch('/amir.json')
            .then(res => res.json())
            .then(data => setDetails(data));
           
            
    }, [])


    useEffect(() => {
        const foundDetails = details.find(
            (car)=> car.id == id)
   
            setSingleCar(foundDetails)
    }, [details])
    // console.log(singleCar)
  


   
    return (
        <div>

            <div>
                <img src={singleCar?.img} alt="" className="my-5 short" style={{ width: "500px" }}/>
                <div className="p-5">
                <h2> service no: {id}</h2>
                <h2>service name: {singleCar?.name}</h2>
                <h5>{singleCar?.description}</h5>
                {/* <p>details are: {singleCar}</p> */}
                </div>
            </div>


            <Footer></Footer>

        </div>
    );
};

export default Booking;