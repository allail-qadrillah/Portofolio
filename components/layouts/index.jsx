import Sidebar from "./sidebar"
function Layouts({ children }) {
  return (
    <div className="flex flex-col justify-center lg:flex-row lg:gap-5 lg:pt-10">
      <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-5">
          <header>
            <Sidebar />
          </header>
        <main className="lg:max-w-[854px] transition-all scroll-smooth duration-300 w-full lg:min-h-screen no-scrollbar">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layouts