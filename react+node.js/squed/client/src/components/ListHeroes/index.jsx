import React  from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Button from '../Button';

const ListHeroes = ({ heroes, detailsHero, deletesHero }) => (
   <div>
      {heroes.map(hero => (
        <div key={hero.id} className={styles.block}>
       <p>{hero.name}</p>
       <Button onClick={() => { deletesHero(hero.id) }} text ="delete"  />
       <Button onClick={() => { detailsHero(hero) }} text ="add in squed" />
      
        </div>
        
      ))}
        
    </div>
  )

  ListHeroes.propTypes = {
    heroes: PropTypes.string.isRequired,
    detailsHero: PropTypes.func,
    deletesHero: PropTypes.func
  };
  
  ListHeroes.defaultProps = {
    detailsHero: () => {},
    deletesHero: () => {}
  };

export default  ListHeroes