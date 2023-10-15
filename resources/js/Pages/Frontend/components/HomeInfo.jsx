import React from 'react'
const info = [
    {   
        id : 1,
        title : 'Ready to be Your Own Business.',
        description : 'Take the leap into entrepreneurship and buy a business that aligns with your goals and passions. Explore our listings, connect with sellers, and start your journey towards owning a successful business today!',
        image : "https://s3-alpha-sig.figma.com/img/1cb9/640d/895111f3667233781c17c5c7825335b1?Expires=1698019200&Signature=CCEwL-Dw1Ph1aDNWDxe4X6O1jRewiO2iG8Rj0xsDoT13S2gIXlg46V7gHep0vBlOoWUMVBVnmKvxQBMdElRRT2iCjqZ8pUGaMaWXGCJhNHLGGqmElr5frHVBcYb0aPXHtivncu59QPr6wiRyyWYCm0hvGOru1Ts45QCgx5pfv0tWGSufUDMGQT94PEqkWpQvqRD2hgYTanv8qq5uS0SEqq3XFSywo57V-bJ9gGWKb0ro3TpCkT8p5l-YN~reHcToUrRLiKL8D-JONtoXugX0W~JwXqsIQjj-ZZW2T~JTGN5-6mbzztkuitPcfC92LpuHErlU5lq4yII5P0~cLrCYZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    }, 
    {   
        id : 2,
        title : 'Ready to Move On',
        description : "If you're ready to sell your business and move on to new endeavors, we're here to help. Our platform provides a streamlined process for selling your business. Maximize your opportunities and get the best deal!",
        image : "https://s3-alpha-sig.figma.com/img/ad9a/cc69/6edd183bdb35ed3814be94d08be2e949?Expires=1698019200&Signature=SnYewewxgP1l51n2Nfhl4I~JZRMqBkMi8t9F8fLIZf1hRoFbGF58SZ8hd21BV7xlgCnpn7AghOwqAbzp2tbDBgxcipfmtBBmJwBw-ezvaKP~tyAwbG2oUt04DNpaIeyAGE8R4HnY7qbD-1N0wfHKSJymNky84opHNZgCsKZzyS0Y88Ci2YyXAO4Nzy7Z2oOT1MxF7Ko~feIzz2m6UKEeGOHPieynbZAWG-tYH-Zf0Ot8tpOcmThH5BbcaMeQN3jRtHAJKYXnKDD6r8i7RELrSmY4hb6zQ7IeXtg4BEskhZXIGPk4Xzohq30lmXK1-le0jRylzypGAGxbDcWpzPZKlg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    }, 
    {   
        id : 3,
        title : 'Stay Informed And Inspired',
        description : "Knowledge is power, especially in the business world. Stay informed, inspired, and up-to-date with our curated blog articles. Our team of experts shares valuable insights, tips, and advice to help you.",
        image : "https://s3-alpha-sig.figma.com/img/267f/c2b7/74a9387ef101eb71855297310144ee69?Expires=1698019200&Signature=W7lnJRKZ8bcXmRmny8tpOmRnERkoaBARgl8Ca2qaziDIGLCxEMIZAvihe8uxAuWF7LrN7mJqCQu-fORSd-l8tLBAKvtQWlCYUka9jbUC43fJtrcQylYD1~0NlUavVUF5x4tIaT68RnyIiUDCQaZD1B4pMvOJWY5LepElilrHCJnnjf3PUye8LvJY2-izHayCVWYOLt8ZV857~f6jTvNEZPUJTlK1eOUUbdeJatT4z7XtJPGs4XblMHMZBHviwmbj1Pon5zkQGPzD20wrJxJiMYxOl34ikcRdQpxCbJQ9mY7PmxLlRsNX5~BBt3HOGLW9i8jM1oCZT16M9AGCeQCJpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    }, 
]

const HomeInfo = () => {
  return (
    <div style={{marginTop : '25vh'}}>
      <h1 className="text-center text-5xl"> Your Gateway to Success : Our Exclusive Service </h1>
      <div className='mx-20 flex justify-between mt-10'>
            {
                info.map(item => (
                    <div className='w-1/3 mx-10 border-0 p-4 bg-white shadow-md'>
                        <h1 className='font-bold text-xl mb-3'>  {item.title} </h1>
                        <p className='text-justify my-2'> {item.description} </p>
                        <img src={item.image} alt="" className='w-full mt-3' />
                    </div>
                ))
            }
      </div>
    </div>
  )
}

export default HomeInfo
