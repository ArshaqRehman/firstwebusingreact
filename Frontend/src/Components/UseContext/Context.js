import React, { createContext, useEffect,  useState } from "react";
import { getProduct } from "../Services/api";
const SecondCardContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([
    {img: "image21.jpg",title: "Factory Worker Job in Taiwan",description:"Exciting opportunity for a Factory Worker in Taiwan. Responsibilities include assembly line operations, quality checks, and strict adherence to safety standards. Join a dynamic team and contribute to production excellence!",},
    {img: "image22.jpg",title: "Farm worker job in Canada ",description:"General farm workers plant, cultivate and harvest crops, raise livestock and poultry and maintain and repair farm equipment and buildings. This unit group includes operators of farm machinery. ",},
    {img: "image23.jpg",title: "Construction worker job in Canada ",description:"Load and unload construction materials, and move materials to work areas. Erect and dismantle concrete forms, scaffolding, ramps, catwalks, shoring and barricades required at construction sites.",},
    {img: "image24.jpg",title: "Cleaner jobs in Canada",description:"Responsible for all basic cleaning in and around residences or office buildings. Cleans floors and rooms. including dust mopping, damp mopping, sweeping, vacuuming, dusting, picking up larger objects off the floor, and spot cleaning glass and windows.",},
    {img: "image25.jpg",title: "Office Manager Jobs in Canada",description:"Maintains office services by organizing office operations and procedures, preparing payroll, controlling correspondence, designing filing systems, reviewing and approving supply requisitions, and assigning and monitoring clerical functions.",},
    // {img: "image23.jpg",title: "Construction worker job in Canada ",description:"Load and unload construction materials, and move materials to work areas. Erect and dismantle concrete forms, scaffolding, ramps, catwalks, shoring and barricades required at construction sites.",},
  ]); 
  
  const[data1, setdata1 ] = useState([
    {img: "image1.jpg",title: "Web Designer ",description: "Web Designers are responsible for designing and building the interface, navigation and aesthetic of websites for businesses and clients in the given time .",},
    {img: "image2.jpg",title: "Software Developer  ",description:"A Software Developer designs and builds computer programs that power mobile devices, desktop computers, and even cars.The company pay high amount of salary package.",},
    {img: "image3.jpg",title: "Database Developer ",description:"Database Programmer, is responsible for creating, administering and troubleshooting computer databases that can process large amounts of information.",},
    // {img: "image4.jpg",title: "Virtual Assistant",description:"A virtual assistant is a self-employed worker who specializes in offering administrative services to clients from a remote location, usually a home office",},
    {img: "image5.jpg",title: "Game Developer ",description:"Game designers focus on the function of a game, creating systems, rules, and gameplay, and help with world-building (story and IP) to ensure it's playable, fun, and engaging.",},
  ]
  
  );
  useEffect(()=>{
    console.log("fetching data");
   
    
   
  
    return ()=>{"clearing/fkushing"}
  }

  )

  return (
    <SecondCardContext.Provider value={{ data, setData,data1, setdata1 }}>
      {children}
    </SecondCardContext.Provider>
  );
};

export { Context, SecondCardContext };
