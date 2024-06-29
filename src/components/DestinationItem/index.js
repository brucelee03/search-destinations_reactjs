import './index.css'

const DestinationItem = ({destination}) => (
  <div className="destination-card">
    <img
      src={destination.imgUrl}
      alt={destination.name}
      className="destination-img"
    />
    <p className="destination-name">{destination.name}</p>
  </div>
)

export default DestinationItem
