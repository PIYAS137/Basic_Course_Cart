import LeftContainer from "./LeftContainer"
import RightContainer from "./RightContainer"


const Body = () => {
    return (
        <main>
            <div className="containerx mx-auto gap-6 grid grid-cols-4 pb-10">
                <LeftContainer />
                <RightContainer />
            </div>
        </main>
    )
}

export default Body