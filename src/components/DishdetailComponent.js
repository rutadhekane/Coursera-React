import React from 'react';
import moment from 'moment';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
	CardTitle } from 'reactstrap';


	function RenderDish({dish}) {

		if(dish.length >0) {
			return (
				<Card>
					<CardImg top src={dish[0].image} alt={dish[0].name} />
						<CardBody>
							<CardTitle>{dish[0].name}</CardTitle>
							<CardText>{dish[0].description}</CardText>
						</CardBody>
				</Card>
			);
		}
		else
			return (<div></div>);
	}

	function RenderComments({comments}) {
		console.log("comments="+JSON.stringify(comments));
		if (comments != null) {
			console.log("comments="+JSON.stringify(comments));
            return(
                <div>
                    <h4>Comments</h4>
                        {comments.map((item) => {
                            return(
                            <ul key={item.id} className="text-left list-unstyled">
                                <li>{item.comment}</li>
                                <li> -- {item.author} , {item.date}</li>
                            </ul>
                            );
                        })}
                </div>
            );
        }
        else
            return(
                <div></div>
            );
		/// const coments = comments.map(comment => {
  //           return (
  //               <li key={comment.id}>
  //                   <p>{comment.comment}</p>
  //                   <p>-- {comment.author},
  //                   &nbsp;
  //                   {new Intl.DateTimeFormat('pt-BR', {
  //                       day: '2-digit',
  //                       month: 'long',
  //                       year: 'numeric'

  //                   }).format(new Date(comment.date))}
  //                   </p>
  //               </li>
  //           )
  //       })
  //       return (
  //           <div className='col-12 col-md-5 m-1'>
  //               <h4> Comments </h4>
  //               <ul className='list-unstyled'>
  //                   {coments}
  //               </ul>

  //           </div>
  //       )
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
				<div className = "row">
					<div className = "col-12 col-md-5 m-1">
						<RenderDish dish = {props.dish}/>
					</div>
					<div className = "col-12 col-md-5 m-1">
						<RenderComments comments = {props.dish.comments}/>
					</div>
				</div>
			</div>
			);
	}


export default DishDetail;