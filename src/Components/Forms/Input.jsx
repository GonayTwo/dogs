import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  //console.log(props);
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.name} className={styles.label}>
        {props.label}
      </label>

      <input
        id={props.name}
        name={props.name}
        className={styles.input}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error && <p className={styles.error}>{props.error}</p>}
    </div>
  );
};

export default Input;
