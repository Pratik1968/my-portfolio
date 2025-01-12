import { ReactNode } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import timeLineArrowImageSrc from "../../../../assets/timelineArrow.svg"
export default function CarrerJourneySection({setSectionOpen}:{setSectionOpen:Function}):ReactNode{
    return(

        <div onMouseEnter={()=>setSectionOpen(2)} id="Journey" className="p-10 flex flex-col gap-10" >
            <Title/>
            <VerticalTimeline
            className="w-full overflow-y-auto "
            lineColor="#EC3C3C"
            
            >
<VerticalTimelineElement
              date="2023"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
dateClassName="text-bold text-white"

>
                    <h1 className="font-bold"> Started learning about Ubuntu , Nginx and Cloud Computing </h1>
                    <p>I've begun learning about Ubuntu, Nginx, and Cloud Computing. While I knew a bit about Ubuntu before, I'm now diving deeper into it, along with exploring the basics of cloud computing.</p>
                    </VerticalTimelineElement>
<VerticalTimelineElement
                date="2023"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
                dateClassName="text-bold text-white"
                >
                    <h1 className="font-bold"> Joined College </h1>
                    <p>Ah, college life—the absolute zenith of intense intellectual rigor, where quizzes and assignments are undoubtedly the epitome of a stress-free and leisurely existence. Truly living the dream! 😌🎓</p>
                    </VerticalTimelineElement>            
                    <VerticalTimelineElement
                date="2023"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
                dateClassName="text-bold text-white"
                >
                    <h1 className="font-bold">Learned Flutter </h1>
                    <p>Starting with Flutter opened up possibilities for creating apps across different platforms without writing separate codebases.</p>
                    </VerticalTimelineElement>
<VerticalTimelineElement
                date="2022"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
                dateClassName="text-bold text-white"
                >
                    <h1 className="font-bold">Gave my class 12 exam </h1>
                    <p>I completed my Class 12 exams and achieved a whopping 84%, because, you know, Class 11 and Class 12 were a walk in the park. Absolutely no challenges whatsoever! 😏</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                date="2022"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
                dateClassName="text-bold text-white"
                >
                    <h1 className="font-bold">Started learning tailwind </h1>
                    <p>I jumped into learning Tailwind with one goal in mind – to make styling websites faster and easier. Because who doesn't love a little speed and efficiency in web design, right? 🚀💻</p>
                    </VerticalTimelineElement>
<VerticalTimelineElement
                date="2021"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
                dateClassName="text-bold text-white"
                >
                    <h1 className="font-bold">Started learning nodejs</h1>
                    <p>I kicked off my journey into Node.js with a clear mission – building servers and chasing my dream of becoming a full-stack developer. 🚀💻</p>
                    </VerticalTimelineElement>
<VerticalTimelineElement
                date="2020"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
                dateClassName="text-bold text-white"
                >
                    <h1 className="font-bold">Gave my class 10 exams</h1>
                    <p>I successfully completed my Class 10 exams, earning a solid 93%.</p>
                    </VerticalTimelineElement>
<VerticalTimelineElement
                date="2019"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
                dateClassName="text-bold text-white"
                >
                    <h1 className="font-bold">Started Reactjs</h1>
                    <p>I hopped on the ReactJS train with a big grin, all set to whip up some seriously cool single-page apps. Because why settle for anything less than fun and fabulous? 🚀✨</p>
                    </VerticalTimelineElement>
<VerticalTimelineElement
                date="2018"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
                dateClassName="text-bold text-white"
                >
                    <h1 className="font-bold">Hello Web</h1>
                    <p>I embarked on my journey into web development with the simple yet exciting goal of creating my own websites.</p>
                    </VerticalTimelineElement>
<VerticalTimelineElement
                date="2017"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
                dateClassName="text-bold text-white"
                >
                    <h1 className="font-bold">Hello Java</h1>
                    <p>I jumped into the world of Java with excitement, eager to unlock the magic of Android app development. The promise of creating cool and fun apps for the Android platform fueled my coding adventures! 🚀</p>
                    </VerticalTimelineElement>
                <VerticalTimelineElement
                date="2016"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
                dateClassName="text-bold text-white"
                >
                    <h1 className="font-bold">Hello World</h1>
                    <p>I began my programming journey with QBasic, kicking it off with the classic "Hello, World!" program.</p>
                    </VerticalTimelineElement>
                <VerticalTimelineElement
                date="2009"
                icon ={<TimelineArrowImage/>}
                contentArrowStyle={{display:"none"}}
                iconClassName="flex item-center justify-center"
iconStyle={{backgroundColor:"transparent",boxShadow:"none"}}
                contentStyle={{borderRadius:"20px",boxShadow:"none",marginBottom:"5rem"}}
                dateClassName="text-bold text-white"
                >
                    <h1 className="font-bold">Joined School</h1>
                    </VerticalTimelineElement>
      
            </VerticalTimeline>
        </div>
        
    );
}
function TimelineArrowImage():ReactNode{
    return(
        <img src ={timeLineArrowImageSrc}/>
    )
}
function Title():ReactNode{
    return(
        <div className="w-full p-2 flex item-center justify-center font ">
            <p className="font-bold text-secondary text-4xl">Carrer Journey</p>
        </div>
    );
}