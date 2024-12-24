
import Navbar from "./components/Navbar";
import Hero from "./components/hero";



export default async function Home() {
  
const url = await fetch("https://jsonplaceholder.typicode.com/posts")
// Converting the data to json
const respopnse = await url.json()
console.log(respopnse)
  return (
    <div>
      <Navbar/>
      <Hero/>
      
    </div>
  );
}
