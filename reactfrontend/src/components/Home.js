import bg40 from "../images/bg40.jpg";
import Footer from "./layout/Footer";

function Home() {

  const bg ={
    backgroundImage: `url(${bg40})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "80vh"

  }

  return (
    <>
      <div className='flex items-center justify-center bg-red-500 min-h-[80vh]' style={bg}>
        <div className="text-white text-center">
          <h1 className="text-3xl font-bold">Welcome to Dev Kenya</h1>
          <p className="mt-5">We are team of talented designers and Developers</p>
          <button className="px-4 py-2 bg-red-600 rounded-full mt-5">Get started</button>
        </div>
      </div>
        <Footer />
    </>
  )
}

export default Home