import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center p-8">
      <h1 className="text-white text-3xl p-8">Home Page</h1>
      <h2>click <Link className="font-bold text-orange-600 text-xl" to={'/shop'}>Shop</Link> to see products</h2>
    </div>
  )
}

export default Home