import { ReactNode, useEffect, useState } from "react";
interface project_interface{
    title:string;
    discription:string;
    tech_stack:string;
    link:string
}
export default function ProjectSection({setSectionOpen}:{setSectionOpen:Function}):ReactNode{
  const [project,setProject] = useState<Array<project_interface>>([])
    useEffect(()=>{
        fetch("/getProjects").then(res=>res.json()).then(res=>{setProject(res);console.log(res)})
    },[])
    return(
        <div onMouseEnter={()=>setSectionOpen(3)} className="w-full h-fit flex flex-col" id="Project">
<Title/>
<div className={(project.length===0)?"flex items-center justify-center p-5":"h-fit grid grid-flow-row lg:grid-cols-3  lg:grid-rows-none"}>


{
    project.length===0 && <p className="text-gray-50 self-center justify-self-center">Nothing to show</p>
}
{
   project.map((value:project_interface,index:any)=>{
    return(
     <ProjectCardTemplate key={index} link={value.link} Name={value.title} discription={value.discription} TechStack={value.tech_stack}/>   
    );
   })
}
</div>
    <SeeMoreProjectButton/>
        </div>
    );
}
function Title():ReactNode{
    return(
        <div className="w-full p-2 flex item-center justify-center ">
            <p className="font-bold text-secondary text-4xl">Projects</p>
        </div>
    );
}
function ProjectCardTemplate({Name,discription,TechStack,link}:{Name:string,discription:string,TechStack:string,link:string}):ReactNode{
    return(
        <a href={link}>
            <div className="bg-[#393F66] p-4 m-6 rounded-xl text-white">
            <h1 className="text-xl font-bold mb-2">{Name}</h1>
            <p className="text-[0.8rem] leading-5 mb-2">{discription}</p>
            <p className="text-[0.8rem] leading-5">Used : {TechStack}</p>
            </div>
        </a>
    )
}
function SeeMoreProjectButton():ReactNode{
  
    return(
        <div className="w-full flex items-center justify-center mt-10 mb-10" >
            <a href="https://github.com/Pratik1968" className="rounded-xl text-white bg-secondary px-7 py-2 text-[0.9rem] font-bold" >See More Projects</a>
        </div>
    );
}