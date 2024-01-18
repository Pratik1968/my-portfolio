import { ReactNode, useState } from "react";
export default function Navbar({sectionOpen,setSectionOpen}:{sectionOpen:number,setSectionOpen:Function}):ReactNode{
  const  [Navigation_open_or_not,setNavigation_open_or_not ]= useState(false);
  return(
    <div className="w-full h-fit flex flex-col lg:flex-row fixed bg-primary z-[2]">
        <div className="w-full p-4 flex lg:flex-1">
<Title className="text-secondary font-bold text-4xl  flex-1 flex items-center justify-center lg:justify-start lg:px-20"/>
<HamburgerIcon className="flex items-center justify-center lg:hidden" open={Navigation_open_or_not} setOpen={setNavigation_open_or_not} />
        </div>
       
            <div className={`transition-all duration-200 lg:transition-none lg:flex lg:justify-start lg:items-center lg:flex-1 ${Navigation_open_or_not ? "opacity-100  block lg:opacity-100" : "opacity-0  hidden lg:block lg:opacity-100 "}`}>
            <NavList className="w-full h-fit p-3 shadow lg:shadow-none  " sectionOpen={sectionOpen} setSectionOpen={setSectionOpen}/>
            </div>
      
      
        </div>
    );
}
function Title({className}:{className:string}):ReactNode{
    return(
    <div className={`${className}`}>
        
    <p>Pratik<span>.</span></p>
        </div>
        );
}
function HamburgerIcon({open,setOpen,className}:{className:string,open:boolean,setOpen:Function}):ReactNode{
    
    
    return(
        
<div className={`${className} ${open?"":"animate-[spin_0.5s_ease_reverse]"}`} onClick={()=>{setOpen(!open)}}>
{open?
    <span className="material-symbols-outlined text-white animate-[spin_0.5s_ease_1] ">
close
</span>
:
<span className="material-symbols-outlined text-white ">
menu
</span>}
</div>
        
    );
}
function NavList({className,sectionOpen,setSectionOpen}:{className:string,sectionOpen:number,setSectionOpen:Function}):ReactNode{
   let activeClass = `
   text-secondary underline
   `
   let navItem = ["Home","Skills","Journey","Project","Blog","Contact"]
   let onClickNavItem = (index:number) =>{
setSectionOpen(index)
   }
   return(
        <nav className={`${className} `}>
        <ul className="w-full h-fit flex flex-col lg:flex-row items-center lg:justify-start  justify-center text-white text-[0.7rem] font-medium gap-8 lg:gap-16 animate-fade-in lg:animate-none">
            

            {
                navItem.map(
            (Item,index)=>(
                <li key={index} className={(sectionOpen===index)?activeClass:""} onClick={()=>onClickNavItem(index)}><a href={"#"+Item}>{Item}</a></li>
            )
                )
            }
        </ul>
        </nav>
    )
}