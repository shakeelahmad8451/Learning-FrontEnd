import Title from "./Components/Title/Title"
import Input from "./Components/Input/Input"
import Item from "./Components/TodoItem/item"
import './App.css'

function App() {
  

  return (
    <>
      <div className="container">
      <Title></Title>
      <Input></Input>
      <Item text='Buy Milk' date='04/04/2024'></Item>
      </div>
    </>
  )
}

export default App
