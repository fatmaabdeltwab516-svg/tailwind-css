import iconImg from "../assets/“.svg"
import iconImg2 from "../assets/Oval.svg"
import iconImg3 from "../assets/Oval Copy 5.svg"
import iconImg4 from "../assets/Oval Copy 6.svg"
import heroImg4 from "../assets/Group 8 Copy.svg"
import heroImg5 from "../assets/Group 8 (2).svg"
 let style = {
    styleP: "font-livvic text-[15px] font-semibold leading-[25px] text-white text-center ",
    stylesSpan : "font-livvic text-[18px] font-semibold leading-[28px] text-rapture-blue pt-[24px]",
    stylesI : "font-livvic text-[13px] font-semibold leading-[18px] text-white block pt-[2px] pb-[43px]",
    };
export default function SectionThre() {
  return (
    
    <div>
        <img src={ heroImg4} alt="" />
        <div className='container w-277.5 mx-auto flex flex-col justify-center items-center'>
        <h3 className='font-livvic text-[48px] font-bold leading-12 text-white text-center pt-35'>Delivering real results for top companies. Some of our <span className='text-rapture-blue'>success stories.</span></h3>
        <div className="grid grid-cols-3 gap-7.5 pt-14 ">
            <div className="flex flex-col justify-center items-center">
                <img src={iconImg}  alt="" />
                <p className={`${style.styleP} -mt-4`}> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                <span className={style.stylesSpan}>Kady Baker</span>
                <i className={style.stylesI}>Product Manager at Bookmark</i>
                <img src={iconImg2} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={iconImg} alt="" />
                <p className={`${style.styleP} -mt-4`}>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                <span className={style.stylesSpan}>Aiysha Reese</span>
                <i className={style.stylesI}>Founder of Manage</i>
                <img src={iconImg3} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src={iconImg} alt="" />
                <p className={`${style.styleP} -mt-4`}>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                <span className={style.stylesSpan}>Arthur Clarke</span>
                <i className={style.stylesI}>Co-founder of MyPhysio</i>
                <img src={iconImg4} alt="" />
            </div>
        </div>
        </div>
        <div className="flex justify-end items-center ">
            <img src={heroImg5} alt="" />
        </div>
        
    </div>
  )
}
