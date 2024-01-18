import { ReactNode } from "react";
import LinkedInImageSrc from "../../../../assets/linkedin.svg"
import GithubImageSrc from "../../../../assets/github.svg"
import TwitterImageSrc from "../../../../assets/twitter.svg"
export default function ContactMeSection({setSectionOpen}:{setSectionOpen:Function}):ReactNode{
    return(
        <div onMouseEnter={()=>setSectionOpen(5)} id="Contact">
<Title/>
<SocialIconGroup/>
        </div>
    );
}
function Title():ReactNode{
    return(
        <div className="w-full p-2 flex item-center justify-center font ">
            <p className="font-bold text-secondary text-2xl">Contact me </p>
        </div>
    );
}
function SocialIconGroup():ReactNode{
    return(
        <div className="w-full flex gap-5 items-center justify-center mt-4 ">
            <Icon ImageSrc={LinkedInImageSrc} link="https://www.linkedin.com/in/pratik-shekhar-dev/"/>
            <Icon ImageSrc={GithubImageSrc} link="https://github.com/Pratik1968"/>
            <Icon ImageSrc={TwitterImageSrc} link="https://twitter.com/Pratik40537585"/>

        </div>
    )
}
function Icon({ImageSrc,link}:{ImageSrc:string,link:string}):ReactNode{
    return(
        <div>
<a href={link}><img src={ImageSrc} alt="Icon" /></a>
        </div>
    )
}