import React, { Component } from 'react';
import moment from 'moment';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
	CardTitle } from 'reactstrap';

class DishDetail extends Component{
	constructor(props){
		super(props);
	}

	renderDish(dish) {
		if(dish!=null)
			return (
				<Card>
					<CardImg top src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
				</Card>
			);
		else
			return (<div></div>);
	}

	renderComments(dish) {
		var comments_section = [];
		if(dish != null) {
			comments_section.push(<h4>Comments</h4>)
			for (var comments_index = 0; comments_index < dish.comments.length; comments_index++) {
				var dformat = moment(dish.comments[comments_index].date).format('ll'); 
				comments_section.push(
					<ul class="list-unstyled">
						<li>{dish.comments[comments_index].comment}</li>
						<li>
							-- {dish.comments[comments_index].author} {dformat}
						</li>
					</ul>
				)
			}
		}
		return (
			<div>
				{comments_section}
			</div>
		)
	}
	render(){
		return(
			<div className = "container">
				<div className = "row">
					<div className = "col-12 col-md-5 m-1">
						{this.renderDish(this.props.detaildish)}
					</div>
					<div className = "col-12 col-md-5 m-1">
						{this.renderComments(this.props.detaildish)}
					</div>
				</div>
			</div>
			);
	}
}

export default DishDetail;