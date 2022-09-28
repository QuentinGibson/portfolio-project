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

  const selectedNumber = Number(selected);

  const workHistory = [{
    id: 1,
    position: "Front-End Engineer",
    company: "WD Global Group",
    startDate: "November 2017",
    endDate: "January 2019",
    responsibilities: [
      "Developed software/UI that increased productivity over 500%. Achieving our goal of 200 calls a day for each employee",
      "Create company website that processed over $100,000 in sales",
      "Lead and developed prototyped products from image mockups"
    ]
  }, {
    id: 2,
    position: "Intern",
    company: "Atlanticus",
    startDate: "March 2019",
    endDate: "July 2019",
    responsibilities: [
      "Developed new UI for submitting IT tickets in an agile team",
      "Developed new UI for various parts of new website"
    ]
  }]

  const selectedWork = workHistory[selectedNumber]
  const responsibilitiesListItems = workHistory[selectedNumber].responsibilities.map(responsibility => {
    return <li class="responsibilities-list text-gray-300 text-sm mb-3 md:text-base">{responsibility}</li>
  })


  return (
    <section class="my-40 max-w-md mx-auto">
      <h3 class="font-bold after_line text-2xl text-gray-300 mb-10 flex whitespace-nowrap items-center md:text-4xl">Work</h3>
      <div class="">
        <div class="flex w-full text-gray-400 h-[42px] justify-start mb-5 md:justify-center">
          <button
            onClick={handleClick}
            id="0" class={selected === "0" ? selectedButtonClass : unselectedButtonClass}><span> WD Global Group </span></button>
          <button onClick={handleClick} id="1" class={selected === "1" ? selectedButtonClass : unselectedButtonClass}><span>Atlanticus</span></button>
          <div class="tab-underline"></div>
        </div>
        <div>
          <div>
            <h4 class="text-gray-300 text-lg mb-1 md:text-2xl"><span>{selectedWork.position}</span><span class="cyan">{" "}@ {selectedWork.company}</span></h4>
            <p class="text-gray-400 mb-5 md:text-lg">{selectedWork.startDate} - {selectedWork.endDate}</p>
          </div>
          <div>
            <ul>
              {responsibilitiesListItems}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
