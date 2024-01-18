import { ReactNode, useEffect, useState } from "react";

interface Blogs{
title:string;
discription:string;
link:string;
}
export default function BlogSection({setSectionOpen}:{setSectionOpen:Function}):ReactNode{
  const [blogs,setBlogs] = useState<Array<Blogs>>([])
  useEffect(()=>{
    fetch("/getBlogs").then(res=>res.json()).then(res=>setBlogs(res))
  },[])
    return(
        <div onMouseEnter={()=>setSectionOpen(4)} className="text-white" id="Blog">
            <Title/>
<div className={(blogs.length ===0)?"flex items-center justify-center p-5 ":"grid grid-flow-row lg:grid-cols-4 lg:grid-rows-none"}>
 
    {
    blogs.length===0 && <p className="text-gray-50 self-center justify-self-center">Nothing to show</p>
}
    {
blogs.map((value:Blogs,index:any)=>{
    return(
        <BlogCardTemplate key={index} Name={value.title} discription={value.discription} link={value.link}/>
    )
})
    }
</div>
<SeeMoreBlogButton/>
        </div>
    );
}
function Title():ReactNode{
    return(
        <div className="w-full p-2 flex item-center justify-center font ">
            <p className="font-bold text-secondary text-4xl">Blog </p>
        </div>
    );
}

function BlogCardTemplate({Name,discription,link}:{Name:string,discription:string,link:string}):ReactNode{
    return(
        <a href={link}>
            <div className="bg-[#393F66] p-4 m-6 rounded-xl text-white">
            <h1 className="text-xl font-bold mb-2">{Name}</h1>
            <p className="text-[0.8rem] leading-5 mb-2">{discription}</p>
            </div>
        </a>
    )
}
function SeeMoreBlogButton():ReactNode{
    return(
        <div className="w-full flex items-center justify-center mt-10 mb-10" >
            <a href="https://medium.com/@pratikshekhar2004" className="rounded-xl text-white bg-secondary px-7 py-2 text-[0.9rem] font-bold">See More Blog Posts</a>
        </div>
    );
}