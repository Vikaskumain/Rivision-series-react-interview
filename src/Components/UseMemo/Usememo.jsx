import { useMemo, useState } from "react";
import { findNthPrime, } from "../Constent/Constent";

// import PrimeNumbers from "./primeno";



function Usememo() {
  const [text, setText] = useState("");
  console.log(text);
  const [isdark,setIsdark]=useState(false)
 
 const hanleisdark =()=>{
      setIsdark(!isdark)
      console.log("render.......",isdark)
 }

const prime = useMemo(() => findNthPrime(text),[text])

      
  return (
    <div className="min-h-screen bg-gray-400 text-white font-bold flex justify-center items-center  ">
    
      <div className={"innerdiv h-96 w-96 bg-blue-300 rounded-lg " +(isdark && "bg-slate-600 text-black")} >
      <button
          className="bg-blue-400 h-9 w-24 rounded-xl ml-28 mt-6 " onClick={hanleisdark}>
          Dark-Mode
        </button>
        <input className="text-black mt-3 ml-5 rounded-md text-center" type="number" placeholder="Enter the No " value={text} onChange={(e)=>setText(e.target.value)} /> 
        <h1 className="text-black font-bold mt-6 ml-5">This is the Primeno:-{prime}</h1>
      </div>
       
       
      </div>
   
  );
}

export default Usememo;
