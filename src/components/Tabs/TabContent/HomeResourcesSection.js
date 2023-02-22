import React from 'react'

function HomeResourcesSection() {
  return (
    <div className='HomeResourcesSection'>
      <h1 className='text-lg text-center font-semibold mb-5 md:text-4xl '>Build a company people love</h1>
      <p className='text-center text-lg mb-10 text-gray'>Our thought leadership on customer engagement has become the gold standard for more than 10<br /> million people. Help Scout is more than software — we’re a partner in helping you succeed.</p>
      <div className="flex justify-center">
        <div className="px-10 w-[700px]">
          <img src="https://hs-marketing.imgix.net/images/uploads/choosing-support-tools.png?ixlib=gatsbyHook-2.1.0&fit=min&auto=format%2Ccompress&placeholder=dominantColor&w=814&h=457" alt="" className='mb-5' />
          <span className="py-10  font-medium text-gray ">Free Guide</span>
          <p className="font semibold text-lg">Buyer's Guide to Choosing the Right Customer Support Tool</p>
        </div>
        <div className="px-10 w-[700px]">
          <img src="https://hs-marketing.imgix.net/images/pages/home/HomeResourcesSection/brain-fm.png?ixlib=gatsbyHook-2.1.0&fit=min&auto=format%2Ccompress&placeholder=dominantColor&w=814&h=457" alt="" className='mb-5'  />
          <span className="py-10  font-medium text-gray ">Free Guide</span>
          <p className="font semibold text-lg">Buyer's Guide to Choosing the Right Customer Support Tool</p>
        </div>
        <div className="px-10 w-[700px]">
          <img src="https://hs-marketing.imgix.net/images/pages/home/HomeResourcesSection/foundations-of-great-service.png?ixlib=gatsbyHook-2.1.0&fit=min&auto=format%2Ccompress&placeholder=dominantColor&w=814&h=457" alt="" className='mb-5' />

          <span className="py-10  font-medium text-gray ">Free Guide</span>
          <p className="font semibold text-lg">Buyer's Guide to Choosing the Right Customer Support Tool</p>
        </div>
        <div className="px-10 w-[700px]">
          <img src="https://hs-marketing.imgix.net/images/pages/help-desk-staffing-calculator/staffing-calculator-thumbnail.jpg?ixlib=gatsbyHook-2.1.0&fit=min&auto=format%2Ccompress&placeholder=dominantColor&w=814&h=457" alt="" className='mb-5' />

          <span className="py-10  font-medium text-gray ">Free Guide</span>
          <p className="font semibold text-lg">Buyer's Guide to Choosing the Right Customer Support Tool</p>
        </div>
      </div>
    </div>
  )
}

export default HomeResourcesSection