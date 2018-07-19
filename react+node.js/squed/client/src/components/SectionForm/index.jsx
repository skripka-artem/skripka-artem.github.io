/* eslint-disable */
import React, { Component }  from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default class SectionSquedEditor extends Component {
    
      render() {
          return (
            <div>
                <p className={styles.text}>ADD Hero</p>
              <div className={styles.section}>
            <form onSubmit={this.props.handleSubmit}>
                         <p>
                             <label>Name</label><br />
                             <input type="text"  onChange={this.props.onNewHeroName}/>
                         </p>
                         <p> Strength <select onChange={this.props.onNewHeroStrength}>
                         
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
         <p> Intelligence <select onChange={this.props.onNewHeroIntelligence}>
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
         <p>Speed <select onChange={this.props.onNewHeroSpeed}>
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

    