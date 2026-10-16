import heroImg from "../assets/Group 8.svg"
import heroImg2 from "../assets/Group 7.svg"
export default function SectionHero() {
  return (
 <div>
    <img src={heroImg} className=" -mb-72.5"/>
       <div className="container w-277.5 mx-auto flex justify-center items-center pt-32.5">
        <div className=" grid grid-cols-2 gap-7.5">
            <div className="h-50">
                <h1 className="font-livvic text-[100px] font-bold leading-25 text-white">Find the best <span className="text-light-coral">talent</span></h1>
            </div>
            <div className="h-50">
                <hr className="w-12.5 h-1.25 pb-24.25 text-rapture-blue" />
                <p className="font-livvic text-[18px] font-semibold leading-7 text-white">Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
            </div>
        </div>
        </div>
        <img src={heroImg2} alt="" className="pl-225 pt-37.5" />
 </div>
  )
}

