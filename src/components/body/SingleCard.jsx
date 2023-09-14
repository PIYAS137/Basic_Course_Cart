import PropTypes from 'prop-types'

import { FaDollarSign } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";

const SingleCard = ({data}) => {

    const {credit,description,id,image,price,title}=data;


  return (
    <div className='p-4 bg-white rounded-xl'>
        <img src={image} alt="" />
        <h1 className='my-4 text-lg font-semibold'>{title}</h1>
        <p className=' text-sm mb-5 text-justify text-gray-500'>{description}</p>
        <div className='flex items-center justify-between mb-4'>
            <span className='flex text-gray-500 text-sm items-center'><FaDollarSign className='text-lg mr-1 text-black'/> Price: {price}</span>
            <span className='flex text-gray-500 text-sm items-center'><HiOutlineBookOpen className='text-xl mr-1 text-black'/> Credit: {credit}hr</span>
        </div>
        <button className='bg-[#2F80ED] text-white w-full py-1 text-lg rounded-lg'>Select</button>
    </div>
  )
}

SingleCard.propTypes={
    data:PropTypes.object.isRequired,
}

export default SingleCard