import { useState } from "react"
import { MyData } from "../../database/Data"
import SingleCard from "./SingleCard"


const LeftContainer = () => {

    const [datas,setDatas]=useState(MyData)


  return (
    <div className=" col-span-3 grid grid-cols-3 gap-6">
        {datas.map((one,idx)=><SingleCard key={idx} data={one}/>)}
    </div>
  )
}

export default LeftContainer