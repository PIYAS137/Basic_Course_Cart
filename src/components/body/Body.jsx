import { useState } from "react"
import LeftContainer from "./LeftContainer"
import RightContainer from "./RightContainer"


const Body = () => {

    const [clickedData, setClickedData] = useState([])
    const [temp, setTemp] = useState('')
    const [overFlow, setOverFlow] = useState(false)
    const [totalHour, setTotalHour] = useState(0)
    const [totalPrice,setTotalPrice]=useState(0)
    const [remainingHour, setRemainingHour] = useState(20)

    const doubleClickedITem = (title) => {
        setTemp(title);
        setTimeout(() => {
            setTemp("")
        }, 3000)
    }
    const doubleClickedNotAdd = () => {
        setOverFlow(true);
        setTimeout(() => {
            setOverFlow(false)
        }, 3000)
    }

    const handleClickedData = (valObj) => {
        for (const one of clickedData) {
            if (one.id === valObj.id) {
                doubleClickedITem(valObj.title)
                return
            }
            if (remainingHour-valObj.credit < 0) {
                doubleClickedNotAdd(valObj.title)
                return
            }
        }

        setTotalHour(totalHour => totalHour + valObj.credit)
        setRemainingHour((remainingHour) => remainingHour - valObj.credit)
        setTotalPrice(prevPrice=>prevPrice+valObj.price)

        setClickedData([...clickedData, valObj])
    }

    return (
        <main>
            <div className="containerx mx-auto gap-6 grid grid-cols-4 pb-10">
                {temp &&
                    <div className="alert alert-error bg-red-500 text-white text-xl p-5 fixed top-4 px-10 mx-auto rounded-xl ">
                        <span>You cant purchase <span className="font-bold italic">{temp}</span> course twice !</span>
                    </div>
                }
                {overFlow &&
                    <div className="alert alert-error bg-orange-400 text-white text-xl p-5 fixed top-4 px-10 mx-auto rounded-xl ">
                        <span>You can purchase maximum total 20 hours course!</span>
                    </div>
                }
                <LeftContainer handleClickedData={handleClickedData} />
                <RightContainer totalPrices={totalPrice} remainingHour={remainingHour} totalHours={totalHour} clickedDataArr={clickedData} />
            </div>
        </main>
    )
}

export default Body