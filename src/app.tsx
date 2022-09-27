import Hero from "./components/hero/Hero"
import Navigation from './components/navigation/Navigation'
import About from './components/about/About'
import Work from './components/work/Work'
import Projects from './components/projects/Projects'

export function App() {
  return (
    <>
      <div class="px-5">
        <Navigation />
        <Hero />
        <About />
        <Work />
        <Projects />
      </div>
    </>
  )
}
