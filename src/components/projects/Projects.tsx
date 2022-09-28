import GithubIcon from "~icons/icon-park/github"
import ShareIcon from "~icons/icon-park/share"
import ImageIcon from '~icons/fluent/image-28-regular'
import Popup from 'reactjs-popup'
import './index.css'
import 'reactjs-popup/dist/index.css'

const Projects = () => {
  const projectList = [
    {
      featured: true,
      image: '',
      name: 'Chess Vision Trainer',
      description: "A fullstack (MERN) app. A fun small game that tests your chess notation knowledge and allows you to share your score with the world through a leaderboard.",
      stack: ["React", "Express", "Mysql", "Node.js", "Storybook", "react-router-dom"],
      github: 'https://gitlab.com/qgibson/chess-vision-trainer',
      live: 'https://chess-vision-trainer-osls.onrender.com'
    },
    {
      featured: true,
      image: "",
      name: "Chess Pro Player",
      description: "A React app that replays popular chess games.",
      stack: ["React", "react-router-dom"],
      github: 'https://gitlab.com/qgibson/chess-pro-watcher',
      live: 'https://quentingibson.github.io/chess-pro-watcher/'
    }, {
      featured: true,
      image: "",
      name: "GroupMe",
      description: "A fullstack (MERN) app that is a social media mockup. There is",
      stack: ["React", "react-router-dom"],
      github: 'https://github.com/QuentinGibson/p7-openclassrooms',
      live: ''
    }
  ]
  const featureProjectsElements = projectList.filter(project => project.featured).map(project => {
    const stackElement = project.stack.map(item => {
      return (
        <span class="text-gray-400">{item}</span>
      )
    })

    return (
      <li class="my-5">
        <div class="shadow px-5 py-6 bg-cyan-900">
          <span class="cyan text-sm mb-2 md:text-xl">Featured Project</span>
          <h4 class="text-gray-300 text-2xl">{project.name}</h4>
          <Popup trigger={<div class="flex items-center justify-start"><button class="hover:underline-offset-4 hover:underline cyan text-base px-2 py-1 rounded bg-slate-900"> View <ImageIcon class="inline-flex" /> </button></div>} position="center center">
            <img src={project.image} alt="Image of project" />
          </Popup>
          <p class="text-gray-300 my-3">{project.description}</p>
          <div class="flex gap-3 flex-wrap">
            {stackElement}
          </div>
          <div class="flex mt-4 gap-3">
            {project.github &&
              <span><a class="icon-link" href={project.github}><GithubIcon class="fill-gray-300 text-xl" /></a></span>
            }
            {project.live &&
              <span><a class="icon-link" href={project.live}><ShareIcon class="fill-gray-300 text-gray-300 text-xl" /></a></span>
            }
          </div>
        </div>
      </li>
    )
  })

  return (
    <section class="my-20">
      <h3 class="flex whitespace-nowrap items-center after_line text-gray-300 text-xl mb-10 md:text-4xl">Some Things I've Built</h3>
      <div>
        <div class="md:mx-auto md:max-w-md">
          <ul>
            {featureProjectsElements}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
