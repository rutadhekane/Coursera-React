import React from 'react';
import moment from 'moment';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
	CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from'react-router-dom';

	function RenderDish({dish}) {

		if(dish!=null) {
			return (
				<Card>
					<CardImg top src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
				</Card>
			);
		}
		else
			return (<div></div>);
	}

	function RenderComments({comments}) {
		if (comments != null) {
			console.log("comments="+JSON.stringify(comments));
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return(
                                <li key={comment.id}>
			                    <p>{comment.comment}</p>
			                    <p>-- {comment.author},
			                    &nbsp;
			                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
			                    </p>
			                </li>
                            
                            );
                        })}
                    </ul>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
		 /// const coments = comments.map(comment => {
   //          return (
   //              <li key={comment.id}>
   //                  <p>{comment.comment}</p>
   //                  <p>-- {comment.author},
   //                  &nbsp;
   //                  {new Intl.DateTimeFormat('pt-BR', {
   //                      day: '2-digit',
   //                      month: 'long',
   //                      year: 'numeric'

   //                  }).format(new Date(comment.date))}
   //                  </p>
   //              </li>
   //          )
   //      })
   //      return (
   //          <div className='col-12 col-md-5 m-1'>
   //              <h4> Comments </h4>
   //              <ul className='list-unstyled'>
   //                  {coments}
   //              </ul>

   //          </div>
   //      );
		/// console.log("comments="+JSON.stringify(comments));
		// var comments_section = [];
		// if(comments!=null) {
		// 	comments_section.push(<h4>Comments</h4>)
		// 	for (var comments_index = 0; comments_index < comments.comments.length; comments_index++) {
		// 		var dformat = moment(comments.comments[comments_index].date).format('ll'); 
		// 		comments_section.push(
		// 			<ul class="list-unstyled">
		// 				<li>{comments.comments[comments_index].comment}</li>
		// 				<li>
		// 					-- {comments.comments[comments_index].author} {dformat}
		// 				</li>
		// 			</ul>
		// 		)
		// 	}
		// }
		// return (
		// 	<div>
		// 		{comments_section}
		// 	</div>
		// )
	}
	
	const DishDetail = (props) =>{
		return(
			<div className = "container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.dish.name}</h3>
						<hr />
					</div>
				</div>
				<div className = "row">
					<div className = "col-12 col-md-5 m-1">
						<RenderDish dish = {props.dish}/>
					</div>
					<div className = "col-12 col-md-5 m-1">
						<RenderComments comments = {props.comments}/>
					</div>
				</div>
			</div>
			);
	}


export default DishDetail;