import React from 'react'
import '../App.css';

function ImageWrapper() {
  return (

    <div className="container mx-auto mt-[100px]">
      <section className='image-wrapper'>
        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className='flex flex-col align-center py-[60px]'>
            <h1 className='text-xl md:text-5xl lg:text-5xl font-bold text-center mb-5 '>A better way to talk<br /> with your customers</h1>
            <p className="text-sm md:text-lg lg:text-xl text-center mb-20">Manage all your customer conversations in one<br /> powerful platform that feels just like your inbox.</p>
            <div className='grid grid-cols-1  px-10 justify-items-center mb-10 md:grid-cols-2'>
              <button className='bg-blue text-white p-3 rounded-md '>Try for free</button>
              <button className='bg-white text-blue p-3 ring-2 ring-black rounded-md mt-5 md:mt-0'>Get a Demo</button>
            </div>
            <div className='grid grid-cols-1 px-10 justify-items-center md:grid-cols-2'>
              <div className=' ustify-items-end px-10 md:border-r-2 border-gray'>
                <img src='https://hs-marketing.imgix.net/images/pages/home/HomeHero/HomeHero--g2-badges-2022.png?ixlib=gatsbyHook-2.0.2&fit=min&auto=format%2Ccompress&placeholder=dominantColor&w=261&h=100' alt='resim' />
              </div>
              <div> <p className="content-center"><strong >See the impact</strong> <a className="block text-blue font-bold py-4" target="_blank" href="/">View customer stories </a></p></div>
            </div>
          </div>
          <img src='https://hs-marketing.imgix.net/images/pages/home/HomeHero/HomeHero--collaboration-illo.png?ixlib=gatsbyHook-2.0.2&fit=min&auto=format%2Ccompress&placeholder=dominantColor&w=662&h=505' alt='img-1' />
        </div>
        <div className='grid column-1 justify-content-center mb-10'>
          <h2 className="text-center text-xl font-medium">More than 12,000 businesses delight their customers with Help Scout.</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          <div className='wrapper-img px-3'>
            <img src='https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F370hH5fiu3QhXFwL4BXbui%2Fd3ff4434b170269195624ddff5270901%2FMixmax.png?ixlib=gatsbySourceUrl-2.0.2&auto=format%2C%20compress&w=138&h=75&s=560514efdeabd38ad090628d427abf96 ' alt=''></img>
          </div>

          <div className='wrapper-img px-3'><img src='https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F76wOHdCdJMz8Qvt564VKVl%2Fbfc746971806f50eea03b1b56c7e2f3d%2FNordstrom.png?ixlib=gatsbySourceUrl-2.0.2&auto=format%2C%20compress&w=138&h=75&s=c6790b454530381d742d0d250e09fa47' alt=''></img></div>
          <div className='wrapper-img'>
            <img src='https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F6CeGFfGbKaunwsCzOWla9h%2Fd95847e1bc93d9ff17972ac6cbb126df%2Faffirm-logo.png?ixlib=gatsbySourceUrl-2.0.2&auto=format%2C%20compress&w=283&h=154&s=86b9b3f4088b45761caa8a7f3ef0e11f' alt=""></img>
          </div>
          <div className='wrapper-img px-3'>
            <img src='https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F2KnC2IFLTB7RISfZMyKqSF%2F49306b4f97f5572cee5ab5d26b5736c0%2FHoney.png?ixlib=gatsbySourceUrl-2.0.2&auto=format%2C%20compress&w=283&h=154&s=af61ac8e1a2ae519b5c7daa0f7c1100f' alt=''></img>
          </div>
          <div className='wrapper-img px-3'>
            <img src='https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F2XG8uk4leSy8QNoyCbl7yw%2Fcaadee3d2a0a8a1848975f1e03a02b85%2FSpindrift-2.png?ixlib=gatsbySourceUrl-2.0.2&auto=format%2C%20compress&w=283&h=154&s=edfd2bc36a3e22e15903bbf20aef08aa' alt=''></img>
          </div>
          <div className='wrapper-img px-3'>
            <img src='https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F239x4UcKCVhrOCva7GeWEj%2F18a058c04415d93e7b03f5e82d499712%2FCompass.png?ixlib=gatsbySourceUrl-2.0.2&auto=format%2C%20compress&w=283&h=154&s=e9758421a5122011af0ad2eabb44d206' alt=''></img>
          </div>
        </div>

      </section>
    </div>

  )
}

export default ImageWrapper


