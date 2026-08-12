import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <>
    <div className="mx-auto mt-20 max-w-7xl px-6">Home / <span className="font-medium  ">404 Error</span> </div>

    <div className=" items-center  flex flex-col">
      
      <div className='font-medium text-[110px] mt-30 mb-10'> 404 Not found</div>
      <div className="font-medium">Your visited page not found. You may go home page.</div>
      
      <NavLink to="/" 
      className='bg-primary_red py-4 px-12 rounded-s text-white font-medium mt-20'>Back to home page
      </NavLink>

    </div>
  
    </>
  )
}

export default Notfound