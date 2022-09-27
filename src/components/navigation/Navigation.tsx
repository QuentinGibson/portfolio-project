import logo from '../../assets/logo.svg'
import NavIcon from '~icons/fluent/navigation16-filled'
// import DismissIcon from '~icons/fluent/dismiss'
const Navigation = () => (
  <div class="mt-10">
    <div class="flex justify-between">
      <a class="flex content-center" href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>
  </div>
)

export default Navigation
