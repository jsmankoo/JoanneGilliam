import React, {Component} from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';
import Carousel from './Carousel';

import Styles from './Styles';

const Featured = ({mls, properties}) => {
  return (
    <div id='featured' className='Featured' style={[Styles.base]}>
      <div style={[Styles.wrapper]}>
        <h2 style={[Styles.header]}>
          OCEANFRONT PROPERTIES
        </h2>
        <MediaQuery maxDeviceWidth={767} >
          <Carousel data={properties} offset={0} />
        </MediaQuery>
        <MediaQuery minDeviceWidth={768} >
          <div style={{
            backgroundColor: '#FFF',
            height: 'auto'
          }}>
            <Carousel data={properties.slice(0, properties.length/2)} offset={0} style={{
              '@media (min-width: 767px)': {
                height: '270px'
              }
            }}/>
            <Carousel data={properties.slice(properties.length/2, properties.length)} offset={25} />
          </div>
        </MediaQuery>
        <h2 style={[Styles.header]}>
          <a href={mls} style={[Styles.mls]}>SEARCH OCEANFRONT PROPERTIES</a>
        </h2>
      </div>
    </div>
  );
};

const mapStateToProps = ({Featured}) => {
  return {
    mls: Featured.get('mlsLink'),
    properties: Featured.get('properties').toJS()
  };
}
const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  Radium(
    Featured
  )
);
