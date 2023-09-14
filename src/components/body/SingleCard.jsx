import PropTypes from 'prop-types'

const SingleCard = ({data}) => {

    const {credit,description,id,image,price,title}=data;


  return (
    <div>SingleCard</div>
  )
}

SingleCard.propTypes={
    data:PropTypes.object.isRequired,
}

export default SingleCard