import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfor from './components/ShowInfor'

function App() {
  // const products = [
  //   {id: 1, name:"Product A"},
  //   {id: 2, name:"Product C"},
  //   {id: 3, name:"Nam"},
  // ] 

  const [count, setCound]= useState(0);

  const[myName,setMyName]= useState("Phúc");

  const [products, setProducts]= useState([
    {id: 1, name:"Product A"},
    {id: 2, name:"Product C"},
    {id: 3, name:"Nam"},
  ])

  return (
    <div >
      Count: {count} <button onClick={() => setCound (count + 1)}>Click</button>
      <hr />
      {myName} <button onClick={() => setMyName("Hoan")}>Change Name</button>
      <hr />
      <hr />

      {products.map((item,index)=> <div key={index}>{item.id}-{item.name}</div>)}
      <ShowInfor name="Phúc"/>
      <ShowInfor name="Nam"/>
      <ShowInfor name="Hà"/>
      <ShowInfor name="Mai"/>
      <ShowInfor name="Phúc"/>
      <ShowInfor name="Phúc"/>
    </div>
  )
}

export default App
