import { strLimit } from "@/Helper";
import React from "react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { useEffect } from "react";

const OurBlog = ({blogs}) => {
  const [randomCount, setRandomCount] = useState(1)
  const [animate, setAnimate] = useState(false)
  
  // Use a separate interval for animation with a 2-second duration
useEffect(() => {
  const animationInterval = setInterval(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 2000); // End the animation after 2 seconds
  }, 5000); // Start a new animation every 5 seconds

  return () => clearInterval(animationInterval); // Clear the animation interval when the component unmounts
}, []);

// Use a separate interval to change the state every 5 seconds
useEffect(() => {
  const stateChangeInterval = setInterval(() => {
    setRandomCount((prevCount) => (prevCount % 3) + 1);
  }, 5000);

  return () => clearInterval(stateChangeInterval); // Clear the state change interval when the component unmounts
}, []);
    return (
        <div
            className="bg-fixed w-full h-[35rem] bg-no-repeat bg-center bg-cover relative"
            style={{
                backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_640.jpg')",
            }}
        >
            <div
                className="flex justify-center items-center z-50"
                style={{ height: "50vh" }}
            >
                <div className=" border-white border-2 p-5 text-slate-100 w-2/3">
                    <p> Every step, every challange, every success </p>
                    <h1 className="text-4xl font-bold">
                        {" "}
                        Embrace the Journey of{" "}
                    </h1>
                    <h1 className="text-4xl font-bold"> Enterpreneurship </h1>
                    <small className="block">
                        As an entrepreneur, you are on a transformative journey
                        filled with ups and downs. Embrace every twist and turn,
                        as each experience will shape your growth and
                        resilience. Celebrate the victories, learn from the
                        setbacks, and let your passion fuel your determination
                        to overcome any obstacle that comes your way.
                    </small>
                    <button className="p-3 border-slate-200 border mt-5"> Explore Our Blogs </button>
                </div>
            </div>
            {/* blog card  */}
            <div className="absolute bottom-5 end-10">
                {
                  blogs.data.slice(randomCount - 1,randomCount).map(item => (
                    <div className={`blog-card bg-white py-2 px-3 w-[300px] shadow-md shadow-slate-800 ${animate ? 'move-right' : 'draw-back'}`} key={item.id}>
                      <h1 className="font-bold text-2xl"> {item.title} </h1>
                      <p className="my-3"> {strLimit(item.body, 100)} </p>
                      <img src={item.url} alt="" />
                      <div className="flex my-3">
                        <div className="w-2/3">  
                          <Link className="px-3 py-2 bg-black text-white"> Read this article </Link>
                        </div>
                        <div>
                          <small> {item.created_at} </small>
                        </div>
                      </div>
                    </div>
                  ))
                }
            </div>
        </div>
    );
};

export default OurBlog;

