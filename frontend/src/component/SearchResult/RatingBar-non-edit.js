import React from 'react';
import Ratings from 'react-ratings-declarative';

class RatingBar extends React.Component{
    constructor(props){
        super(props);
    }
   

    render(){

        console.log(
            typeof(Number(this.props.rating))
            +
            this.props.rating);

        return(
            <Ratings
            rating={(Number(this.props.rating))}
            widgetDimensions="18px"
            widgetSpacings="2px"
          >
            <Ratings.Widget widgetRatedColor="rgb(252, 184, 40)" />
            <Ratings.Widget widgetRatedColor="rgb(252, 184, 40)" />
            <Ratings.Widget widgetRatedColor="rgb(252, 184, 40)" />
            <Ratings.Widget widgetRatedColor="rgb(252, 184, 40)" />
            <Ratings.Widget widgetRatedColor="rgb(252, 184, 40)" />
          </Ratings>
        )
    }
}

export default  RatingBar;
