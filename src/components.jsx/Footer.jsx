import IconImg from "../assets/myteam 2.svg"
import IconImg2 from "../assets/Path (2).svg"
import IconImg3 from "../assets/Path (3).svg"
import IconImg4 from "../assets/Path (4).svg"

let style = {
    styleLinks: "font-livvic text-[18px] font-semibold leading-7 text-white",
    stylep : "font-livvic text-[15px] font-semibold leading-[25px] text-white/60 ",
    };
export default function Footer() {
  return (
    <div className='container w-277.5 mx-auto flex justify-center items-center py-11.25'>
        <div className="grid grid-cols-3">
            <div>
                <img src={IconImg} alt="" />
                <nav className="flex items-center gap-10 pb-6.25 pr-122.25">
                <a href="" className={style.styleLinks}>home</a>
                <a href="" className={style.styleLinks}>about</a>
            </nav>
            </div>
            <div>
                <p className={style.stylep}>987 Hillcrest Lane</p>
                <p className={style.stylep}>Irvine, CA</p>
                <p className={style.stylep}>California 92714</p>
                <p className={style.stylep}>Call Us : 949-833-7432</p>
            </div>
            <div>
                <div className="flex justify-end">
                       <div className="grid grid-cols-3 gap-0 pb-12.5 w-26 ">
                    <img src={IconImg2} alt="" />
                    <img src={IconImg3} alt="" />
                    <img src={IconImg4} alt="" />
                </div>
                </div>
                <p className={ `${style.stylep} text-end `} >Copyright 2020. All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}
