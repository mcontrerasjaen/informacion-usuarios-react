
import './App.css'
import CardContainer from './Components/CardContainer'
import Footer from './Components/Footer'
import Header from './Components/Header'



function App() {  

  return (
        <div>
              <Header />
              <div className="body">
                  <CardContainer />
              </div>
              <Footer />                    
        </div>
  )
}

export default App
