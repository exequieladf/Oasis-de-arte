import  Main  from "./components/Main";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div >
      <Navbar />
      <Main heading='Oasis de arte' message='El poder de la imaginación, al servicio del arte.' />
    </div>
  )
}
