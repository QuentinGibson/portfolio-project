import './index.css'
import large from '../../assets/personal-large.jpg'
import med from '../../assets/personal-med.jpg'
import small from '../../assets/personal-small.jpg'
const About = () => (
  <>
    <section class="mt-36">
      <h3 class="font-bold after_line text-2xl text-gray-300 mb-10 flex whitespace-nowrap items-center">About Me</h3>
      <div class="flex flex-col mb-2">
        <div class="flex flex-col">
          <p class="text-base text-gray-400 mb-4">Welcome to my site! My name is Quentin Gibson and I enjoy creating things using my programming skills. My interest in web development started back in 2012 when I decided to create a website for a family member. I enjoyed making that website and continued to program everyday since!</p>
          <p class="text-base text-gray-400 mb-4">Today, I have had the privilege of working at a start-up, a huge-corporation, and as an freelancer. I have contributed to open source projects; Spacedrive, freecodecamp. Now I am focused on building my own open source project. </p>
          <p class="text-base text-gray-400 mb-4">I am also working on a new website that help gamers! Stay tuned for more information</p>
        </div>
        <p class="text-base text-gray-400 mb-4">Here are a few technologies I've been working with recently:</p>
      </div>
      <ul class="skills-list">
        <li class="mb-2.5 pl-5 text-base text-gray-400">Typescript</li>
        <li class="mb-2.5 pl-5 text-base text-gray-400">Javascript (ES6)</li>
        <li class="mb-2.5 pl-5 text-base text-gray-400">React</li>
        <li class="mb-2.5 pl-5 text-base text-gray-400">Node.js</li>
        <li class="mb-2.5 pl-5 text-base text-gray-400">Wordpress</li>
        <li class="mb-2.5 pl-5 text-base text-gray-400">Rust</li>
      </ul>
      <div class="mt-5 flex h-[300px]">
        <img class="h-full w-full object-contain" src={small} srcSet={`${small} 350w, ${med} 600w, ${large} 1000w`} alt="An image of me, Quentin Gibson." />
      </div>
    </section>
  </>
)
export default About
