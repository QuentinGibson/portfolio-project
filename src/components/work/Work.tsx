import { useState } from 'preact/hooks';
import './index.css'

const Work = () => {
  const [selected, setSelected] = useState("1");
  const selectedButtonClass = `flex justify-center px-4 min-w-[120px] text-center items-center border-b-2 border-b-blue-800 text-sm bg-cyan-800 text-white`
  const unselectedButtonClass = `flex align-middle justify-center px-4 min-w-[120px] text-center items-center border-b-2 border-b-blue-800 text-sm`

  const handleClick = (event: any) => {
    if (event.currentTarget?.id) {
      const { id } = event.currentTarget
      setSelected(id)
    }
    event.preventDefault()
  }

  return (
    <section class="my-20">
      <h3 class="font-bold after_line text-2xl text-gray-300 mb-10 flex whitespace-nowrap items-center">Work</h3>
      <div class="">
        <div class="flex w-full text-gray-400 h-[42px] justify-center">
          <button
            onClick={handleClick}
            id="1" class={selected === "1" ? selectedButtonClass : unselectedButtonClass}><span> WD Global Group </span></button>
          <button onClick={handleClick} id="2" class={selected === "2" ? selectedButtonClass : unselectedButtonClass}><span>Atlanticus</span></button>
          <div class="tab-underline"></div>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Work
