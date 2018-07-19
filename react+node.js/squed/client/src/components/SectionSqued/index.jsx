/* eslint-disable */
import React  from 'react';
import PropTypes from 'prop-types'
import styles from './styles.css';

const SectionSqued = ({squed}) => {
    const squedss = squed
    squedss.map(squeds => console.log(squeds)  )


    return(
              <div>
                  <p className={styles.text}>SqueD</p>
              <div className={styles.section}>
            {squedss.map(squeds => (
                <div key={squeds.id} className={styles.block}>
               
               <p>{squeds.id.name}</p>
               <ul>
               <li>strength: {squeds.strength}</li>
               <li>intelligence: {squeds.intelligence}</li>
               <li>speed: {squeds.speed}</li>
               </ul>
                </div>
                
              ))}
            
        
              </div>
              </div>
          )}
        
          SectionSqued.propTypes = {
            squed: PropTypes.string.isRequired
            
          };

    export default  SectionSqued