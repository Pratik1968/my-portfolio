import { ReactNode } from "react";
import HtmlImageSrc from "../../../../assets/HTMLImage.svg";
import CssImageSrc from "../../../../assets/cssImage.svg";
import JavascriptImageSrc from "../../../../assets/javascriptImage.svg";
import ReactImageSrc from "../../../../assets/reactImage.svg";
import NodeImageSrc from "../../../../assets/nodeImage.svg";
import PostgresqlImageSrc from "../../../../assets/postgresqlImage.svg";
import TailwindImageSrc from "../../../../assets/tailwindImage.svg";
import TypescriptImageSrc from "../../../../assets/typescriptImage.svg";

export default function SkillSection({setSectionOpen}:{setSectionOpen:Function}):ReactNode{
    return(
        <div onMouseEnter={()=>setSectionOpen(1)} id="Skills" className="w-full h-fit p-3 flex flex-col">
            <Title className="w-full h-fit flex items-center justify-center"/>
<div className="w-full h-fit flex flex-col lg:grid lg:grid-cols-4 ">
    <SkillCardTemplate ImageSrc={HtmlImageSrc} CardTitle="Html" CardDiscription="Web development relies on HTML. It's the fundamental language defining the structure of web pages."/>
    <SkillCardTemplate ImageSrc={CssImageSrc} CardTitle="CSS" CardDiscription="CSS is vital in web development, shaping the visual presentation of HTML-defined web pages for a polished and consistent user interface."/>
    <SkillCardTemplate ImageSrc={JavascriptImageSrc} CardTitle="Javascript" CardDiscription="JavaScript is crucial in web development, adding dynamic functionality to HTML and CSS for a more engaging and interactive user experience."/>
    <SkillCardTemplate ImageSrc={ReactImageSrc} CardTitle="Reactjs" CardDiscription="React is key in web development, powering dynamic and efficient user interfaces through its component-based structure integrated seamlessly with HTML and CSS."/>
    <SkillCardTemplate ImageSrc={NodeImageSrc} CardTitle="Nodejs" CardDiscription="Node.js is crucial in web development, enabling server-side JavaScript for scalable applications, seamlessly integrating with HTML, CSS, and client-side JavaScript."/>
    <SkillCardTemplate ImageSrc={PostgresqlImageSrc} CardTitle="Postgresql" CardDiscription="PostgreSQL: web dev's powerhouse, blending reliability, scalability, and ACID compliance. A versatile maestro for seamless data orchestration, turning complexity into a harmonious symphony."/>
    <SkillCardTemplate ImageSrc={TailwindImageSrc} CardTitle="Tailwind" CardDiscription="Tailwind is essential in web development, streamlining and accelerating the styling process with its utility-first CSS framework, ensuring efficient and consistent design implementation."/>
    <SkillCardTemplate ImageSrc={TypescriptImageSrc} CardTitle="Typescript" CardDiscription="TypeScript is crucial in web development, enhancing JavaScript with static typing for improved code quality, tooling, and maintainability, seamlessly integrating with HTML, CSS, and popular frameworks."/>
    
</div>
        </div>
    )
}

function Title({className}:{className:string}):ReactNode{
   return(
    <div className={className}>
<p className="font-bold text-secondary text-4xl">Skill</p>
    </div>
   ) 
}

function SkillCardTemplate({ImageSrc,CardTitle,CardDiscription}:{ImageSrc:any,CardTitle:string,CardDiscription:string}):ReactNode{
    return(
        <div className="bg-[#393F66] m-5 p-8 rounded-xl flex flex-col gap-2" >

<div className="w-[40px] h-[70px] flex items-end" ><img className="" width={40}  src={ImageSrc}/></div>
<h2 className=" text-white font-bold text-xl">{CardTitle}</h2>
<p className="text-white font-normal text-xs leading-5">{CardDiscription}</p>
        </div>
    )
}