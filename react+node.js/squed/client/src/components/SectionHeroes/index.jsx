
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import ListHeroes from '../ListHeroes';

const SectionHeroes = ({ heroes, detailsHero, deletesHero }) =>  (
    <div>
    <p className={styles.text}>heroes</p>
<div className={styles.section}>
 <ListHeroes heroes={heroes}  detailsHero = {detailsHero} deletesHero = {deletesHero}/>
  </div>
  </div>
        )

        SectionHeroes.propTypes = {
            heroes: PropTypes.string.isRequired,
            detailsHero: PropTypes.func.isRequired,
            deletesHero: PropTypes.func.isRequired
          };
    export default SectionHeroes


