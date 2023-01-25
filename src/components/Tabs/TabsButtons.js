import { useState, useEffect} from "react";
import TabContent from "./TabContent/TabContent";

function TabsButtons() {
    const [tabNav,setTabNav]=useState(false)
    const [selectedTab, setSelectedTab] = useState("whyBtn")
    const changeNavBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 791) {
          setTabNav(true)
        } else {
          setTabNav(false)
        }
      }
      useEffect(() => {
        changeNavBackground()
        window.addEventListener("scroll", changeNavBackground)
      })
   
    const btnControl = (e) => {
        setSelectedTab(e.target.name);
        console.log(e.target.name);
    };
    return (
        <div className='tab-buttons'>
            <div className={tabNav ? "tab-active drop-shadow-md " : "navbar"}>
                <div className='flex justify-center '>
                    <button className={`w-50 px-[20px] py-2 mx-4 lg:px-[100px]  ${selectedTab === "whyBtn" ? "text-blue border-b-2 " : "text-gray"}`} name='whyBtn' onClick={btnControl}>Why Help Scout?</button>
                    <button className={`w-50 px-[20px] py-2 mx-4 lg:px-[100px]  ${selectedTab === "whatBtn" ? "text-blue border-b-2" : "text-gray"}`} name='whatBtn' onClick={btnControl}>What makes Help Scout different?</button>
                </div>
            </div>
            <div className="tab-content">
            <TabContent selectedTab={selectedTab} />
            </div>
        </div>
    )
}

export default TabsButtons