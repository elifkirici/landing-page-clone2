
import '../style.css';
import CustomerQuotes from './CustomerQuotes';
import CustomerQuotesSection from './CustomerQuotesSection';
import HomeResourcesSection from './HomeResourcesSection';


function TabContent({ selectedTab }) {
    return (
        <div className='tabcontent'>
            {
                selectedTab === "whyBtn" ? (
                    <div className='wyBtnContent'>
                        <div className='flex flex-col items-center mt-10'>
                            <h1 className='text-4xl font-semibold mb-5'>Voted <span className="bg-hero"> “Best ROI”</span> by Customers on G2</h1>
                            <p className="text-md text-gray lg:text-lg">Happy customers become loyal customers. That’s why Help Scout has won “Best ROI” year after year.</p>
                        </div>
                        <div className='flex justify-center'>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
                                <div className='card flex flex-col items-center justify-center py-20 w-[505px] h-[413px] lg:w-[363px] lg:h-[465px]'>
                                    <img src='https://hs-marketing.imgix.net/images/pages/home/HomeTabsSection/HomeTabsSectionWhy--spot-STOPWATCH.png?ixlib=gatsbyHook-2.0.2&fit=min&auto=format%2Ccompress&placeholder=dominantColor&w=320&h=320' alt='card1' className='w-50 h-50' />
                                    <div className='card-body'>
                                        <h3 className='my-8 text-center text-2xl font-semibold'>Get started in minutes</h3>
                                        <p className='text-lg text-center w-[490px] lg:w-[390px]'>Help Scout is as easy to use as an email inbox, so your whole team can focus on what really matters: customer relationships.</p>
                                    </div>
                                </div>
                                <div className='card flex flex-col items-center justify-center py-20 w-[505px] h-[413px] lg:w-[363px] lg:h-[465px]'>
                                    <img src='https://hs-marketing.imgix.net/images/pages/home/HomeTabsSection/HomeTabsSectionWhy--spot-COFFEE.png?ixlib=gatsbyHook-2.0.2&fit=min&auto=format%2Ccompress&placeholder=dominantColor&w=160&h=160' alt=''></img>
                                    <div className='card-body'>
                                        <h3 className='my-8 text-center text-2xl font-semibold'>Increase productivity by 52%</h3>
                                        <p className='text-lg text-center w-[490px] lg:w-[390px]'>Level-up your teamwork, organize your inbox, and automate repeated tasks so your people can respond to more customers.</p>
                                    </div>
                                </div>
                                <div className='card flex flex-col items-center justify-center py-20 w-[505px] h-[413px] lg:w-[363px] lg:h-[465px]'>
                                    <img src='https://hs-marketing.imgix.net/images/pages/home/HomeTabsSection/HomeTabsSectionWhy--spot-ROCKET.png?ixlib=gatsbyHook-2.0.2&fit=min&auto=format%2Ccompress&placeholder=dominantColor&w=160&h=160' alt=''></img>
                                    <div className='card-body'>
                                        <h3 className='my-8 text-center text-2xl font-semibold'>Scale to support millions</h3>
                                        <p className='text-lg text-center w-[490px] lg:w-[390px]'>Unlock power as you grow. Global teams use Help Scout to support tens of millions of customers and get to inbox zero.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CustomerQuotes />
                        <CustomerQuotesSection/>
                        <HomeResourcesSection/>
                    </div>
                ) : (
                    <div>whatBtn</div>
                )}
        </div>
    )
}

export default TabContent