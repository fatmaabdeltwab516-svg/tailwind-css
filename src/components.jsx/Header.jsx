
export default function Header() {
    let style = {
    styleLinks: "font-livvic text-[18px] font-semibold leading-7 text-white"
    };
  return (
     <header>
        <div className="container w-277.5 mx-auto flex justify-center items-center py-18.25 px-41.25">
          <img src="../src/assets/myteam 2.svg" alt="logo" />
          <nav className="flex items-center gap-10 pl-20 pr-122.25">
            <a href="" className={style.styleLinks}>home</a>
            <a href="" className={style.styleLinks}>about</a>
          </nav>
          <div className="flex justify-end items-center">
            <button className={`${style.styleLinks} border-2 border-white rounded-2xl pt-2 pb-2.75 px-8 whitespace-nowrap ` }>contact us</button>
        </div>
          </div>
          
      </header>
  )
}