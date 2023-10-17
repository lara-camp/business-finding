import FrontendLayout from '@/Layouts/FrontendLayout'
import React from 'react'
import MemberOne from '../../../../public/image/about/1.png'
import MemberTwo from '../../../../public/image/about/2.png'
import MemberThree from '../../../../public/image/about/3.png'
import MemberFour from '../../../../public/image/about/4.png'
import MemberFive from '../../../../public/image/about/5.png'
import MemberSix from '../../../../public/image/about/6.png'
import MemberSeven from '../../../../public/image/about/7.png'
import MemberEight from '../../../../public/image/about/8.png'

import CompanyOne from '../../../../public/image/about/logo/Company logo 1.svg'
import CompanyTwo from '../../../../public/image/about/logo/Company logo 2.svg'
import CompanyThree from '../../../../public/image/about/logo/Company logo 3.svg'
import CompanyFour from '../../../../public/image/about/logo/Company logo 4.svg'
import CompanyFive from '../../../../public/image/about/logo/Company logo 5.svg'
import CompanySix from '../../../../public/image/about/logo/Company logo 6.svg'
import CompanySeven from '../../../../public/image/about/logo/Company logo 7.svg'
import CompanyEight from '../../../../public/image/about/logo/Company logo 8.svg'

const AboutUs = () => {
  return (
    <div>
      {/* hero section  */}
      <div></div>
      {/* our journey  */}
      <div className="flex items-center p-5 mx-20">
        <div className="w-1/2">
          <h1 className='text-4xl font-bold text-end me-10 font-mono'> Our  <span className='block'> Journey </span></h1>
        </div>
        <div className="w-1/2 text-justify">
          <p className='leading-loose'>
          Embarking on a journey fueled by passion and a shared vision, WELOCAL was born from the desire to uplift and celebrate the backbone of communities – local businesses. Our path has been one of purpose, driven by the belief that the heartbeat of any neighborhood lies in the unique ventures that thrive within it. From the bustling city streets to the charming corners of towns, we've witnessed the power of these enterprises to create not just commerce, but connections that weave the fabric of our lives. Navigating this journey, we've had the privilege of standing alongside dedicated entrepreneurs, hearing their stories, and witnessing their dreams unfold. With each partnership, we've seen how a platform dedicated to showcasing these stories can amplify their impact. Our journey is an ongoing commitment to providing a space where local businesses can  shine,  where  their  stories  can  inspire,
          </p>
          <div className="flex">
              <p className='leading-loose me-4'>
              and  where  our  collective  support can fortify the communities we call home. Together, we're not just fostering commerce – we're nurturing soul of neighborhoods, one business at a time.
              </p>
              <p className='leading-loose text-yellow-500'>
              "In the tapestry of every community, it's the local businesses that add the vibrant colors and intricate patterns."
              </p>
          </div>
        </div>
      </div>
      {/* our team  */}
      <div>
        <div className="flex mx-20">
          <div className='w-1/2'>
            <h1 className="text-4xl font-bold font-mono text-end me-10">
              Our Unified Team of Visionaries
            </h1>
          </div>
          <div className='w-1/2'>
            <p className='leading-loose'> 
            United by a shared passion for empowering local commerce and fostering vibrant communities, the WELOCAL team is a dynamic ensemble of visionary individuals. With diverse expertise and a collective dedication to our mission, we're committed to propelling local businesses forward, championing entrepreneurship, and nurturing the essence of neighborhoods.
            </p>
          </div>
        </div>

        {/* member one to four  */}
        <div className="flex mx-20 my-10">
          <div className="w-1/4 my-4">
            <div className="relative">
              <img src={MemberOne} alt="" />
              <div className="absolute start-10 bottom-[-10%] bg-white p-3">
                <p> Jane Thompson </p>
                <p> Co-Founder & CEO </p>
              </div>
            </div>
          </div>
          <div className="w-1/4 my-4">
            <div className="relative">
              <img src={MemberTwo} alt="" />
              <div className="absolute start-10 bottom-[-10%] bg-white p-3">
                <p> Sophia Ramirez </p>
                <p> Chief Operations Officer </p>
              </div>
            </div>
          </div>
          <div className="w-1/4 my-4">
            <div className="relative">
              <img src={MemberThree} alt="" />
              <div className="absolute start-10 bottom-[-10%] bg-white p-3">
                <p> Alex Carter </p>
                <p> Creative Director </p>
              </div>
            </div>
          </div>
          <div className="w-1/4 my-4">
            <div className="relative">
              <img src={MemberFour} alt="" />
              <div className="absolute start-10 bottom-[-10%] bg-white p-3">
                <p> Ella Chen </p>
                <p> Marketing Manager </p>
              </div>
            </div>
          </div>
        </div>

        {/* member four to eight  */}
        <div className="flex mx-20 my-10">
          <div className="w-1/4 my-4">
            <div className="relative">
              <img src={MemberFive} alt="" />
              <div className="absolute start-10 bottom-[-10%] bg-white p-3">
                <p> Michel Thompson </p>
                <p> Technology Architect </p>
              </div>
            </div>
          </div>
          <div className="w-1/4 my-4">
            <div className="relative">
              <img src={MemberSix} alt="" />
              <div className="absolute start-10 bottom-[-10%] bg-white p-3">
                <p> Linda Martinez </p>
                <p> Business Specialist </p>
              </div>
            </div>
          </div>
          <div className="w-1/4 my-4">
            <div className="relative">
              <img src={MemberSeven} alt="" />
              <div className="absolute start-10 bottom-[-10%] bg-white p-3">
                <p> Daniel Lee </p>
                <p> Finicial Analyst </p>
              </div>
            </div>
          </div>
          <div className="w-1/4 my-4">
            <div className="relative">
              <img src={MemberEight} alt="" />
              <div className="absolute start-10 bottom-[-10%] bg-white p-3">
                <p> Grace Robinson </p>
                <p> Engagement Coordinate </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testinomy  */}
      <div>

      </div>

      {/* Trusted partaner  */}
      <div className='mx-20'>
        <h1 className="text-4xl font-mono font-bold text-center"> Our Trusted Partners </h1>
        {/* company one to four  */}
        <div className="flex my-4">
            <div className='w-1/4 my-4 mx-10'>
              <img src={CompanyOne} alt="" />
            </div>
            <div className='w-1/4 my-4 mx-10'>
              <img src={CompanyTwo} alt="" />
            </div>
            <div className='w-1/4 my-4 mx-10'>
              <img src={CompanyThree} alt="" />
            </div>
            <div className='w-1/4 my-4 mx-10'>
              <img src={CompanyFour} alt="" />
            </div>
        </div>
        {/* company one to four  */}
        <div className="flex my-4">
            <div className='w-1/4 my-4 mx-10'>
              <img src={CompanyFive} alt="" />
            </div>
            <div className='w-1/4 my-4 mx-10'>
              <img src={CompanySix} alt="" />
            </div>
            <div className='w-1/4 my-4 mx-10'>
              <img src={CompanySeven} alt="" />
            </div>
            <div className='w-1/4 my-4 mx-10'>
              <img src={CompanyEight} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

AboutUs.layout = page => <FrontendLayout children={page} title="About Us" />
export default AboutUs
