import Profile from "./Profile"
function Sidebar() {
  return (
    <div className='bg-red-500 sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8'>
      Sidebar
      <Profile/>
    </div>
  )
}

export default Sidebar