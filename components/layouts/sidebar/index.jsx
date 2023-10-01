import Breakline from "@/components/elements/Breakline"
import Navigation from "./Navigation"
import Profile from "./Profile"
function Sidebar() {
  return (
    <div className='sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8'>
      <Profile/>
      <nav>
        <Breakline/>
        <Navigation/>
        
      </nav>
    </div>
  )
}

export default Sidebar