import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import propTypes from 'prop-types';

const MealItem = props => {
  const price = `${props.price} won`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.desc}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};
// props type 지정하기
MealItem.propTypes = {
  price: propTypes.number,
  name: propTypes.string,
  description: propTypes.string,
};

export default MealItem;
