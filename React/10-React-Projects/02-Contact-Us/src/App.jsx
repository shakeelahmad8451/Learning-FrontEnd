import Navigation from "./Components/Navigation/Navigation"
import ContactHeader from "./Components/ContactHeader/ContactHeader"
import Button from "./Components/ContactForm/Button/Button";

import './App.css';


function App() {
  
  return (
    <>
      <Navigation></Navigation>
      <ContactHeader></ContactHeader>
      <div className="contact_form">
        
          <div className="btn_group">
  `          <Button text={`Contact Via Message`}>

            </Button >
            <Button text={`Contact Via Call`}>

            </Button>
          </div>

          <p>Contact Via Form</p>

          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email"></input>
          <textarea placeholder="Query"></textarea>

        
      </div>
    </>
  )
}

export default App
