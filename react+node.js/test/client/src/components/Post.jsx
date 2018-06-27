import React, { Component } from 'react';
import PropTypes from 'prop-types';
const el = [1, 2, 3]
const elem = el.map(elem => <li key={elem}>{elem}</li>)
const Post = ({text}) => {
    console.log(elem)
    
        return  <div>
        <p>{text} {el[0]}</p>
       {elem}
        </div>;
       };

Post.propTypes = {
    text: PropTypes.string 
}

Post.defaultProps = {
    text: 'text'
}

       export default Post