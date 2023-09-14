import PropTypes from 'prop-types'



const RightContainer = ({ clickedDataArr, remainingHour, totalHours, totalPrices }) => {


  return (
    <div className="rounded-xl col-span-1 overflow-hidden">
      <div className="p-5 w-full shadow-xl bg-white rounded-b-xl">
        <h1 className="text-[#2F80ED] text-lg font-bold">Credit Hour Remaining {remainingHour} hr</h1>
        <hr className="block my-4" />
        <h1 className="font-bold text-xl text-black mb-5">Course Name</h1>

        <ul className="space-y-1">
          {clickedDataArr.length===0 && <li className="text-sm text-gray-500">You purchase 0 course</li>}
          {clickedDataArr.map((one,i)=><li key={i} className="text-sm text-gray-500">{i+1}. {one.title}</li>)}
        </ul>

        <hr className="block my-4" />
        <h1 className="font-semibold text-gray-600">Total Credit Hour : {totalHours}</h1>
        <hr className="block my-4" />
        <h1 className="font-semibold text-gray-600">Total Price : {totalPrices} USD</h1>
      </div>
    </div>
  )
}

RightContainer.propTypes = {
  clickedDataArr: PropTypes.array.isRequired,
  remainingHour: PropTypes.number.isRequired,
  totalHours: PropTypes.number.isRequired,
  totalPrices: PropTypes.number.isRequired
}

export default RightContainer