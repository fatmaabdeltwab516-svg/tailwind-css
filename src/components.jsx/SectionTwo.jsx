import cardImg1 from "../assets/Group 9.svg"
import cardImg2 from "../assets/Combined Shape.svg"
import cardImg3 from "../assets/Combined Shape (1).svg"
import heroImg3 from "../assets/Group 8 (1).svg"

let style = {
    stylespan: "font-livvic text-[18px] font-semibold leading-7 text-light-coral",
    stylep : "font-livvic text-[15px] font-semibold leading-7 text-white",
    styleCircle : "w-14 h-14 rounded-full shrink-0 bg-police-blue relative",
    styleCardImg : "w-14 h-14 absolute bottom-3 right-1/2 translate-x-1.5 object-contain",
    };

export default function SectionTwo() {
  return (
   <div>
     <div className=" w-277.5 mx-auto flex justify-center items-center pt-35">
        <div className="grid grid-cols-2 gap-31.25">
            <div className="">
                <hr className="w-12.5 h-1.25 pb-24.25 text-light-coral" />
                <h2 className="font-livvic text-[48px] font-bold leading-12 text-white">Build & manage distributed teams like no one else.</h2>
            </div>
            <div>
                <div className="grid grid-rows-3 gap-8">
                    <div className="w-135 h-23.5 flex items-start gap-4">
                    <div className={style.styleCircle}>
                        <img src={cardImg1} alt="" className={style.styleCardImg}/>
                       
                    </div>
                     <div className="flex flex-col gap-2">
                        <span className={style.stylespan}>Experienced Individuals</span>
                        <p className={style.stylep}>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                    </div>
                     </div>
                    <div>
                        <div className="w-135 h-23.5 flex items-start gap-4">
                    <div className={style.styleCircle}>
                        <img src={cardImg2} alt="" className={style.styleCardImg}/>
                       
                    </div>
                     <div className="flex flex-col gap-2">
                        <span className={style.stylespan}>Easy to Implement</span>
                        <p className={style.stylep}>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                    </div>
                     </div>
                    </div>
                    <div>
                        <div className="w-135 h-23.5 flex items-start gap-4">
                    <div className={style.styleCircle}>
                        <img src={cardImg3} alt="" className={style.styleCardImg}/>
                       
                    </div>
                     <div className="flex flex-col gap-2">
                        <span className={style.stylespan}>Enhanced Productivity</span>
                        <p className={style.stylep}>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                    </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
         
    </div>
    <div className="flex justify-end items-center -mt-37.5">
            <img src={heroImg3} alt=""className="max-w-none" />
         </div>
   </div>
  )
}
