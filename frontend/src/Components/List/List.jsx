import './List.css';
import PropTypes from 'prop-types';

function List(props) {
  const { items } = props;

  const listItems = items.map(item => (
    <div className='list-item' key={item.id}>
      {item.name}
    </div>
  ));

  console.log(listItems);

  return <div className='list-container card'>{listItems}</div>;
}

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default List;
