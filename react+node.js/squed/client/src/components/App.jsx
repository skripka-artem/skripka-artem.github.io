/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles.css';
import SectionHeroes from './SectionHeroes';
import SectionSquedEditor from './SectionSquedEditor';
import SectionSqued from './SectionSqued';
import SectionForm from './SectionForm';

class App extends Component {
  state = {
    heroes: [],
    hero: [],
    squed: [],
    newHeroName: 0,
    newHeroStrength: 0,
    newHeroIntelligence:0 ,
    newHeroSpeed: 0
  }


  componentDidMount() {
    axios.get(`/api/heroes`)
      .then(res => {
        const heroes = res.data
        this.setState({ heroes });
       
      })
      axios.get(`/api/squads`)
      .then(res => {
        const squed = res.data
        this.setState({ squed });
       
      })
  }

 
  deletesHero = id => {
    axios
    .delete(`/api/heroes/${id}`)
    .then(() => {
      this.setState(prevState => ({
        heroes: prevState.heroes.filter(hero => hero.id !== id)
      
    }
   
  ));

    })
  };
 
  detailsHero = hero => {
    this.setState (state => ({
      hero: [...state.hero, hero]
 }))
}

saveSqued = () => {
  
  const squeds = this.state.hero
  axios.post(`/api/squads/`,  {squeds} )
  axios.get(`/api/squads`)
  .then(res => {
    const squed = res.data
    this.setState({ squed });
   
  })
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
          .then(() => {
        //    this.setState( => ({
        //      heroes:  никак не пойму как прописать 
          
       //   }
         
      //  ));
      
          })
          }




         
  render() {
    
    return (
   <div className={styles.body}>
   <SectionForm 
      heroes={this.state.heroes} 
      handleSubmit={this.handleSubmit}
      onNewHeroName={this.onNewHeroName}
      onNewHeroStrength={this.onNewHeroStrength}
      onNewHeroSpeed={this.onNewHeroSpeed}
       />
   <SectionHeroes 
      heroes={this.state.heroes} 
      detailsHero = {this.detailsHero} 
      deletesHero = {this.deletesHero} />
   <SectionSquedEditor 
      hero={this.state.hero}
      saveSqued={this.saveSqued} 
      squed={this.state.squed}
   />     
   <SectionSqued 
      squed={this.state.squed}  />
    </div>
  )}
}

export default App;
