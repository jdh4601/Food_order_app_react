import React, { Fragment } from 'react';
import mealsImg from '../../assets/meals.jpeg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header() {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Food order App</h1>
        <HeaderCartButton />
      </header>
      <div className={styles.image}>
        <img src={mealsImg} alt="table foods" />
      </div>
    </Fragment>
  );
}

export default Header;
