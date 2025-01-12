import { ReactNode, useEffect, useState } from "react";
import getData from "../../../../helper/graphql";
import ProjectQueryResponse, { Project } from "../../../../helper/project.interface";
import Query from "../../../../helper/query";

export default function ProjectSection({setSectionOpen}:{setSectionOpen:Function}):ReactNode{
  const [project,setProject] = useState<Project[]>([]);
    useEffect(()=>{
getData<ProjectQueryResponse>(Query.projectQuery).then((value)=>{
 setProject(value.projectCollection.items);

})
    },[])
    return(
        <div onMouseEnter={()=>setSectionOpen(3)} className="w-full h-fit flex flex-col" id="Project">
<Title/>
<div className={(project.length===0)?"flex items-center justify-center p-5":"h-fit grid grid-flow-row lg:grid-cols-3  lg:grid-rows-none"}>


{
    project!.length===0 && <p className="text-gray-50 self-center justify-self-center">Nothing to show</p>
}
{
   project!.map((project:Project,index:any)=>{
    return(
     <ProjectCardTemplate key={index} link={project.link} Name={project.title} discription={project.description} TechStack={project.techStack}/>   
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