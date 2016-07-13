import React, {Component} from 'react';
import Radium from 'radium';
import raf from 'raf';
import {Motion, spring, presets} from 'react-motion';

import Styles from './Styles';

@Radium
class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      transform: 0
    };
  }
  componentDidMount = () => {
    const tick = () => {
      const {transform} = this.state;
      const index = this.props.data.length ? (this.props.data.length)*100 : 1;
      this.setState({...this.state,
        transform: (transform + 0.1) % (index)
      });
      raf(tick);
    };
    this.animation = raf(tick);
  }

  componentWillUnount = () => {
    raf.cancel(this.animation);
  }
  render(){
    const {transform} = this.state;
    const {data, offset, style, imgStyle} = this.props;
    const subset = data.slice(0,2);
    return (
      <div className='Carousel' style={[Styles.carousel, style]}>
        {
          data.map( ({photo: img}, index)=>{
            return (
              <img key={img} src={img} style={{
                height: '250px',
                width: 'auto',
                transform: `translate(${-1*transform - offset}%, 0%)`,
                padding: '0px 10px'
              }}/>
            );
          } )
        }
        {
          subset.map( ({photo: img}, index)=>{
            return (
              <img key={img} src={img} style={{
                height: '250px',
                width: 'auto',
                transform: `translate(${-1*transform - offset}%, 0%)`,
                padding: '0px 10px'
              }}/>
            );
          } )
        }
      </div>
    );
  }
}

export default Carousel;
