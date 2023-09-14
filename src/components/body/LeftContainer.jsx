import { useState } from "react"
import { MyData } from "../../database/Data"
import SingleCard from "./SingleCard"

import PropTypes from 'prop-types'

const LeftContainer = ({handleClickedData}) => {

    const [datas,setDatas]=useState(MyData)


  return (
    <div className=" col-span-3 grid grid-cols-3 gap-6">
        {datas.map((one,idx)=><SingleCard handleClickedData={handleClickedData} key={idx} data={one}/>)}
    </div>
  )
}

LeftContainer.propTypes={
  handleClickedData:PropTypes.func.isRequired,
}

export default LeftContainer