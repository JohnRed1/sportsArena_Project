import { Header } from "../../Components/Header"  
import { HeroSection } from "./HeroSection"
import { Trends } from "./Trends"
import { Feeds } from "./Feeds"
import {Footer} from "../../Components/Footer"



export function Homepage(){

  return (

    <>
    <div className="" >
      <Header/>
      <HeroSection/>
      <Trends/>
      <Feeds/>
      <Footer/>


      
    </div>
    
    </>
  )
}