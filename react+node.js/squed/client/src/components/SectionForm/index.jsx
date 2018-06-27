/* eslint-disable */
import React, { Component }  from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default class SectionSquedEditor extends Component {
    state = {
        newHeroName: 0,
        newHeroStrength: 0,
        newHeroIntelligence:0 ,
        newHeroSpeed: 0
      }
    onNewHeroName = (e, newHeroName) => {
        newHeroName = e.target.value;
        this.setState({newHeroName: newHeroName});
        
        }
        
        onNewHeroStrength = (e) => {
          const newHeroStrength = e.target.value;
          this.setState({newHeroStrength: newHeroStrength});
          }
        
        onNewHeroIntelligence = (e) => {
            const newHeroIntelligence = e.target.value;
            this.setState({newHeroIntelligence: newHeroIntelligence});
            }
        
        onNewHeroSpeed = (e) => {
              const newHeroSpeed = e.target.value;
              this.setState({newHeroSpeed: newHeroSpeed});
              }
        handleSubmit = (e) => {
       e.preventDefault();
                  const name = this.state.newHeroName
                  const strength = this.state.newHeroStrength
                  const intelligence = this.state.newHeroIntelligence
                  const speed = this.state.newHeroSpeed
                axios.post(`/api/heroes/`,  {name, strength, intelligence, speed} )
              
                }
      render() {
          return (
            <div>
                <p className={styles.text}>ADD Hero</p>
              <div className={styles.section}>
            <form onSubmit={this.handleSubmit}>
                         <p>
                             <label>Name</label><br />
                             <input type="text"  onChange={this.onNewHeroName}/>
                         </p>
                         <p> Strength <select onChange={this.onNewHeroStrength}>
                         
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
           <option>6</option>
           <option>7</option>
           <option>8</option>
           <option>9</option>
           <option>10</option>
         </select> </p>
         <p> Intelligence <select onChange={this.onNewHeroIntelligence}>
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
           <option>6</option>
           <option>7</option>
           <option>8</option>
           <option>9</option>
           <option>10</option>
         </select> </p>
         <p>Speed <select onChange={this.onNewHeroSpeed}>
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
           <option>6</option>
           <option>7</option>
           <option>8</option>
           <option>9</option>
           <option>10</option>
         </select></p>
                         <input type="submit" value="Отправить" />
                     </form>
            </div>
            </div>
          )
      }
    }

    