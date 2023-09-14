import LeftContainer from "./LeftContainer"
import RightContainer from "./RightContainer"


const Body = () => {
    return (
        <main>
            <div className="container mx-auto bg-red-200 grid grid-cols-4">
                <LeftContainer />
                <RightContainer />
            </div>
        </main>
    )
}

export default Body