import React, { useState } from 'react'

function App() {

  let [latitude, setlatitude] = useState()
  let [longitude, setlongitude] = useState()
  // latitude or longitude ka use kr k hum apni or ksi ki earth  pr exact location ka pta lga sakty hain agr gps k ho us device ma 
  //  other wise ip ki location mil jae ge jissy sy district tk ki location to pta chal hi jae ge lekin inko use krny k liye humien ek function use krna hota ha 
  // navigator.geolocation 
  let geo = navigator.geolocation

  geo.getCurrentPosition(usercords)

  // function usercords(){

  // }

  // is function ka use r k hum position.latitude / longitude nikal kre browser sy link krty hain tak humen location mil sky or fetch kre k data render krty hain 

  // Example : 

  // Term	Urdu	Example	Kya Represent Karta Hai?
  // Latitude	عرض بلد	31.5159	North-South (vertical) position on Earth
  // Longitude	طول بلد	74.3387	East-West (horizontal) position on Earth


  return (
    <div>
      <h1>Location Tracker</h1>



    </div>
  )
}

export default App