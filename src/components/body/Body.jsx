import { useState } from "react"
import LeftContainer from "./LeftContainer"
import RightContainer from "./RightContainer"


const Body = () => {

    const [clickedData, setClickedData] = useState([])
    const [temp, setTemp] = useState(false)
    const [tempTitle, setTempTitle] = useState('')


    const doubleClickedITem = (title) => {
        setTemp(true);
        setTempTitle(title)
        setTimeout(() => {
            setTemp(false)
            setTempTitle('')
        }, 2000)
    }

    const handleClickedData = (valObj) => {
        for (const one of clickedData) {
            if (one.id === valObj.id) {
                doubleClickedITem(valObj.title)
                return
            }
        }
        setClickedData([...clickedData, valObj])
    }

    return (
        <main>
            <div className="containerx mx-auto gap-6 grid grid-cols-4 pb-10">
                {temp &&
                    <div className="alert alert-error bg-red-600 text-white text-3xl p-5 absolute top-0 ">
                        <span>You cant purchase {tempTitle} course twice !</span>
                    </div>
                }
                <LeftContainer handleClickedData={handleClickedData} />
                <RightContainer clickedDataArr={clickedData} />
            </div>
        </main>
    )
}

export default Body