import PropTypes from 'prop-types'

import { FaDollarSign } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";

const SingleCard = ({data}) => {

    const {credit,description,id,image,price,title}=data;


  return (
    <div className='p-4 bg-white rounded-xl'>
        <img src={image} alt="" />
        <h1 className='mt-4 text-lg font-semibold'>{title}</h1>
        <p className=' text-sm mb-5'>{description}</p>
        <div className='flex items-center justify-between mb-4'>
            <span className='flex text-sm items-center'><FaDollarSign/> Price: {price}</span>
            <span className='flex text-sm items-center'><HiOutlineBookOpen/> Credit: {credit}hr</span>
        </div>
        <button className='bg-[#2F80ED] text-white w-full py-2 text-lg rounded-lg'>Select</button>
    </div>
  )
}

SingleCard.propTypes={
    data:PropTypes.object.isRequired,
}

export default SingleCard