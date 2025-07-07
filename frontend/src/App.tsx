import { Header } from "./components/Header"
import { Main } from "./components/Main"



function App() {


  return (
    <div className="w-full h-screen bg-[#1b1c2f] text-white flex flex-col justify-start overflow-x-hidden">
      <Header />
      <Main />
    </div >
  )
}

export default App
