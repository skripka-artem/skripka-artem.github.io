
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
    squed: []
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
    }));
    
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

  render() {
    
    return (
   <div className={styles.body}>
   <SectionForm 
      heroes={this.state.heroes}  />
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
