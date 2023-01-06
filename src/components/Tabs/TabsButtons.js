import { useState } from "react";
import TabContent from "./TabContent/TabContent";

function TabsButtons() {
    const [selectedTab, setSelectedTab] = useState("whyBtn")
    const btnControl = (e) => {
        setSelectedTab(e.target.name);
        console.log(e.target.name);
    };
    return (
        <div className='container mx-auto mt-[100px] '>
            <div className='bg-white px-2 sm:px-4 py-4 dark:bg-gray-900 divide-x w-full z-20 sticky top-0 drop-shadow-md items-center '>
                <div className='flex justify-center '>
                    <button className={`w-50 px-[20px] py-2 mx-4 lg:px-[100px]  ${selectedTab === "whyBtn" ? "text-blue border-b-2 " : "text-gray"}`} name='whyBtn' onClick={btnControl}>Why Help Scout?</button>
                    <button className={`w-50 px-[20px] py-2 mx-4 lg:px-[100px]  ${selectedTab === "whatBtn" ? "text-blue border-b-2" : "text-gray"}`} name='whatBtn' onClick={btnControl}>What makes Help Scout different?</button>
                </div>
            </div>
            <TabContent selectedTab={selectedTab} />
        </div>
    )
}

export default TabsButtons