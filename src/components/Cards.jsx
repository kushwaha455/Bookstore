import PropTypes from 'prop-types';

function Cards({item}) {
  return (
    <div className='mt-4 my-3 py-3'>
    <div className="card bg-base-100 w-full max-w-sm shadow-xl">
  <figure>
    <img
      src={item.image}
      className="h-48 w-full object-cover"
      alt={item.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div className="cursor-pointer py-2 px-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy now</div>
    </div>
  </div>
</div>
</div>
  )
}

Cards.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cards;
