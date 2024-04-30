// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationsItems} = props
  const {name, imgUrl} = destinationsItems
  return (
    <li className="each-item-container">
      <img src={imgUrl} alt={name} className="destination-img" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
