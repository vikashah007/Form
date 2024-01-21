import { useState } from 'react'

const Box = () => {
   const [name,SetName]=useState("")
    const changename=(event)=>{
        SetName(event.target.value)
        console.log(name);
    }
    console.log(name)
  return (
    <div>
    <form>
      <input type='text' onChange={changename} placeholder='enter name' value={name}/>
      </form>
    </div>
  )
}

export default Box
