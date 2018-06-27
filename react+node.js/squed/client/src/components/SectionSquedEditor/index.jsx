/* eslint-disable */
import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Button from '../Button';

export default class SectionSquedEditor extends Component {

    static PropTypes = {
        hero: PropTypes.array.isRequired,
        saveSqued: PropTypes.func,
    }

    sumHeroForce = () => {
        let sumStrength = 0 
        let sumIntelligence = 0 
        let sumSpeed = 0 

        this.props.hero.map(hero =>sumStrength += hero.strength)
        
        this.props.hero.map(hero =>sumIntelligence += hero.intelligence)
    
        this.props.hero.map(hero => sumSpeed += hero.speed)
        
   return (
    <div>
           <p>strength: {sumStrength}</p>
           <p>intelligence: {sumIntelligence} </p>
           <p>speed: {sumSpeed}</p>
           </div>
       )
    }

      render() {
       
          return (
            <div>
            <p className={styles.text}>squed editor</p>
              <div className={styles.section}>
              <Button onClick={() => { this.props.saveSqued() }} text ="Save Squed" />
              {this.sumHeroForce()}
            {this.props.hero.map(hero => (
                <div key={hero.id} className={styles.block}>
               <p>{hero.name}</p>
                </div>
              ))}
              </div>
              </div>
          )
      }
    }

  