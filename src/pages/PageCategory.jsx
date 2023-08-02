import React from 'react';
import { warmUps } from '../db/categories';
import styles from '../components/categories/categories.module.scss';
import { Category, Title } from '../components';
import { Button } from '../UI';
// images
import Timer from '../assets/categories/timer.png';

export const PageCategory = () => {
  return (
    <div style={{ padding: '50px 0' }}>
      <Title title={'Упражнения и разминки'} />
      {warmUps.map((warmup) => (
        <>
          <Category
            key={warmup.id}
            className={warmup.className}
            categoryImage={warmup.image}
            timerImage={Timer}
            alt={warmup.alt}
            name={warmup.name}
            pros={warmup.pros}
            pros2={warmup.pros2}
            pros3={warmup.pros3}
            time={warmup.time}
          />
          <div className={warmup.classNameForBlueLine}>
            <img src={warmup.LineImg} alt="blue-line" />
          </div>
        </>
      ))}
      <Button
        title={'Просмотреть свою статистику'}
        className={styles.button_style}
      />
    </div>
  );
};
