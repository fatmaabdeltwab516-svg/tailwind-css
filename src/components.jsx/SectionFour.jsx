import heroImg6 from "../assets/Group 8 (3).svg"

export default function SectionFour() {
  return (
    <div>
        <div className="container w-277.5 mx-auto flex justify-center items-center">
        <div className="grid grid-cols-2 gap-20 pt-19">
            <div>
                <h4 className="font-livvic text-[48px] font-bold leading-12 text-sacramento-state-green ">Ready to get started?</h4>
            </div>
            <div className="flex justify-end items-center">
                <button className="font-livvic text-[18px] font-semibold leading-7 text-sacramento-state-green border-2 border-sacramento-state-green rounded-2xl pt-2 pb-2.75 px-8">contact us</button>
            </div>
        </div>
    </div>
    <img src={heroImg6} className="-mt-20" alt="" />
    </div>
  )
}
