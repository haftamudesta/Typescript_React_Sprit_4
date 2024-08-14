import './App.css'
import AnimatedLoadingIcon from './components/icons/AnimatedLoadingIcon'
function App() {
  return (
    <>
      <div className='flex items-center justify-center mt-8 gap-12'>
        <AnimatedLoadingIcon height='40' width='40' fill='green' stroke='yellow'/>
        <h1 className='text-3xl text-slate-700 font-bold '>Image Gallery</h1>
        <AnimatedLoadingIcon height='80' width='80' fill='blue' stroke='red'/>
      </div>
    </>
  )
}

export default App
