import  Main  from "./components/Main";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { SliderData } from './components/SliderData';

export default function Home() {
  return (
    <div >
      <Navbar />
      <Main heading='Oasis de arte' message='El poder de la imaginación, al servicio del arte.' />
      <Slider slides={SliderData} />
    </div>
  )
}
