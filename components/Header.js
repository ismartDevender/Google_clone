/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/Header.module.css';
import Viewgrid from '../components/Viewgrid.js';
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left_header}>
        <p className={styles.link}>About</p>
        <p className={styles.link}>Store</p>
      </div>
      <div className={styles.right_header}>
        <p className={styles.link}>Gmail</p>
        <p className={styles.link}>Images</p>
        <Viewgrid />
        <div>
          <img
            src="devender.jpeg"
            alt=""
            width="50"
            height="50"
            className="rounded-full cursor-pointer transform hover:scale-105 "
          />
        </div>
      </div>
    </div>
  );
}
