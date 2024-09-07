import './App.css'
import Hero from './component/Hero';
import Navigation from './component/Navigation';
import Products from './component/products';

function App() {

  const name = "Daniru"

  return (
    <div>
        <Navigation name={name}/>
        <Hero />
        <Products />
    </div>
  )
}

export default App
