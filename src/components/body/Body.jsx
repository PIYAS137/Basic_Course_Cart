import { useEffect, useState } from "react"
import LeftContainer from "./LeftContainer"
import RightContainer from "./RightContainer"


const Body = () => {

    const [clickedData, setClickedData] = useState([])
    const [temp, setTemp] = useState('')
    const [totalHour,setTotalHour]=useState(0)
    const [remainingHour,setRemainingHour]=useState(20)

    const doubleClickedITem = (title) => {
        setTemp(title);
        setTimeout(() => {
            setTemp("")
        }, 3000)
    }

    const handleClickedData = (valObj) => {
        for (const one of clickedData) {
            if (one.id === valObj.id) {
                doubleClickedITem(valObj.title)
                return
            }
        }

        setTotalHour(totalHour=>totalHour+valObj.credit)
        setRemainingHour((remainingHour)=>remainingHour-valObj.credit)

        setClickedData([...clickedData, valObj])
    }

    return (
        <main>
            <div className="containerx mx-auto gap-6 grid grid-cols-4 pb-10">
                {temp && 
                    <div className="alert alert-error bg-red-600 text-white text-xl p-5 absolute top-4 px-10 mx-auto rounded-xl ">
                        <span>You cant purchase <span className="font-bold italic">{temp}</span> course twice !</span>
                    </div>
                }
                <LeftContainer handleClickedData={handleClickedData} />
                <RightContainer remainingHour={remainingHour} totalHours={totalHour} clickedDataArr={clickedData} />
            </div>
        </main>
    )
}

export default Body