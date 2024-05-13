import './App.css'
import products from './assets/products'
import Store from './components/Store'

function App() {
    return (
        <Store products={products}/>
    )
}

export default App