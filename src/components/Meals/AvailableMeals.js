import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Bullgogi',
    description: 'korean soul food',
    price: '9000',
  },
  {
    id: 'm2',
    name: 'Sushi',
    description: 'japanese traditional food',
    price: '20000',
  },
  {
    id: 'm3',
    name: 'Noodle',
    description: 'meal food',
    price: '7000',
  },
  {
    id: 'm4',
    name: 'Burger',
    description: 'american food',
    price: '8500',
  },
  {
    id: 'm5',
    name: 'kebap',
    description: 'Mexican traditional food',
    price: '4000',
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem
      id={meal.id} // this is new!
      key={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
