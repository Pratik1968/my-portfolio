import  { ReactNode } from "react";

import AvatarSrc from "../../../../assets/avatar.png"
export default function HeroSection({setSectionOpen}:{setSectionOpen:Function}):ReactNode{
    return(
        <div onMouseEnter={()=>setSectionOpen(0)}  id="Home" className=" w-full h-fit p-2 pt-20 flex flex-col lg:flex-row-reverse items-center justify-center gap-5">
            <Avatar/>
            <div className="w-full flex flex-col lg:flex-1">
                <Title className="w-full h-fit text-white font-bold text-4xl flex justify-center text-center"/>
                       <ContentText className="w-full h-fit text-[#808080] text-[0.76rem] font-normal flex justify-center items-center "/>
                       <SeeTheProjectButton className="w-full h-fit p-3 flex items-center justify-center"/>
            </div>
             </div>
    );
}

function Avatar():ReactNode{
    return(
        <div className="lg:flex-1">
            <img src={AvatarSrc} className="h-[286px] w-[250px] lg:w-[393px] lg:h-[498px] "/>
        </div>
    );
}
function Title({className}:{className:string}):ReactNode{
    return(
        <div className={className}>
            <p>Hi, I am a Full Stack <br/> developer</p>
        </div>
    )
}
function ContentText({className}:{className:string}):ReactNode{
    return(
<div className={className}>
<p className="w-fit lg:w-1/2 p-2 text-center">Hi, I'm Pratik Shekhar, a MERN stack developer. I specialize in MongoDB, Express.js, React, and Node.js, crafting dynamic and seamless web applications. Let's build something awesome!</p>
</div>
    );
}
function SeeTheProjectButton({className}:{className:string}):ReactNode{
    return(
        <div className={className}>
            <a href="#Project" className="rounded-xl text-white bg-secondary px-7 py-2 text-[0.9rem] font-bold">See Projects</a>
        </div>
    );
}