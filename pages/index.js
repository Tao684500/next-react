import Header from "./components/Header";
import Product from "./Product";


export default function Home() {
  return (
   <>
   <div className=" min-h-screen">
    <Header name="All Product" image='/cat-1.jpg'/>
    <Product/>
   </div>
   </>
  )
}
