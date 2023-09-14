

const RightContainer = () => {
  return (
    <div className="rounded-xl col-span-1 overflow-hidden">
      <div className="p-5 w-full shadow-xl bg-white rounded-b-xl">
        <h1 className="text-[#2F80ED] text-lg font-bold">Credit Hour Remaining 7 hr</h1>
        <hr  className="block my-4"/>
        <h1 className="font-bold text-xl text-black mb-5">Course Name</h1>
        <ul className="space-y-1">
          <li className="  text-sm text-gray-500">1. Introduction to C Programming</li>
          <li className="  text-sm text-gray-500">1. Introduction to C Programming</li>
          <li className="  text-sm text-gray-500">1. Introduction to C Programming</li>
          <li className="  text-sm text-gray-500">1. Introduction to C Programming</li>
        </ul>
        <hr  className="block my-4"/>
        <h1 className="font-semibold text-gray-600">Total Credit Hour : 13</h1>
        <hr  className="block my-4"/>
        <h1 className="font-semibold text-gray-600">Total Price : 48000 USD</h1>
      </div>
    </div>
  )
}

export default RightContainer