import { ReactNode,  useState } from "react";
import "./style.module.scss"
import HeroSection from "./Section/HeroSection/layout";
import SkillSection from "./Section/SkillSection/layout";
import CarrerJourneySection from "./Section/CarrerJourneySection/layout";
import ProjectSection from "./Section/ProjectSection/layout";
import ContactMeSection from "./Section/ContactMeSection/layout";
import BlogSection from "./Section/BlogSection/layout";
import BottomSection from "./Section/BottomSection/layout";
import Navbar from "../../Navbar/layout";
export default function Home():ReactNode{
    const [sectionOpen,setSectionOpen] = useState(0)
//     let navItem = ["Home","Skills","Journey","Project","Blog","Contact"]

// useEffect(()=>{
//     window.location.hash = `#${navItem[sectionOpen]}`
// },[sectionOpen]);
    return(
       <>
    <Navbar sectionOpen={sectionOpen} setSectionOpen={setSectionOpen}/>
       <div className="home_content w-full h-full">
        <HeroSection setSectionOpen={setSectionOpen}/>
        <SkillSection   setSectionOpen={setSectionOpen}/>
        <CarrerJourneySection   setSectionOpen={setSectionOpen}/>
        <ProjectSection setSectionOpen={setSectionOpen}/>
        <BlogSection    setSectionOpen={setSectionOpen}/>
        <ContactMeSection   setSectionOpen={setSectionOpen}/>
        <BottomSection  />
        </div>
        </>
    );
}