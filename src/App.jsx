
import Header from "./Header/Header"
import './App.css'
import Body from "./Body/Body"

import Reviews from "./Components/Reviews"
import Login from "./Components/login"
import { Higherorder } from "./Components/Higherorderfunction/Higherorder"
import Usememo from "./Components/UseMemo/Usememo"
import Reacthook from "./Components/hookfrom/Reacthook"
// import PrimeChecker from "./Components/UseMemo/primeno"
// import PrimeNumbers from "./Components/UseMemo/primeno"

function App() {
  

  return (
    <div>
      <Header/>
      <Body/>
      <Reviews/>
      <Login/>
     <Higherorder/>
     <Usememo/>
     <Reacthook/>
    {/* <PrimeNumbers/> */}
    </div>
  )
}

export default App
