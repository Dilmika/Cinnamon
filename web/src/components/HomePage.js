import React, { Component } from 'react';
import ImageSlider from '../partials/imageSlider';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';


class HomePage extends Component {

  componentDidMount(){
    const {getItems} = this.props;
    getItems();
  }
    render() {
      const {getItems} = this.props;
      console.log(' this.props: ',  this.props);

        return (
            <div>
                <ImageSlider/>
               <h1>SlidfggfeBar</h1>  
              <h1>This is the landing</h1>  
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  //ownProps means props in the this component
  return {
    // posts: state.posts,
    item: state.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
