import React, { Component } from 'react';
import moment from 'moment';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
	CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, 
	ModalBody, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import { Link } from'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			isModalOpen: false
		};		

			this.toggleModal = this.toggleModal.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);

	}


	toggleModal(){
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values){

        this.props.addComment(this.props.dishId, values.rating, values.author, values.message);
    }

	render(){
		return(
			<div>
			<Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span>Submit comment</Button>
			<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
				<ModalHeader toggle={this.toggleModal}>Submit comment</ModalHeader>
				<ModalBody>
					<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
						<Row className="formGroup">
							<Label htmlFor="rating" md={2}>Rating</Label>
						</Row>
						<Row className="formGroup">
							<Col>
								<Control.select model=".rating" name="rating"
	                                    className="form-control">
	                                    <option>1</option>
	                                    <option>2</option>
	                                    <option>3</option>
	                                    <option>4</option>
	                                    <option>5</option>
	                            </Control.select>
	                        </Col>
						</Row>
						<Row className="formGroup">
							<Label htmlFor="author" md={4}>Your Name</Label>
						</Row>
						<Row className="formGroup">
							<Col >
                                <Control.text model=".author" id="author" name="author" 
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators= {{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                     />
                                <Errors 
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Mustbe 15 characters or less'
                                    }}
                                />
                            </Col>                            
						</Row>
						<Row className="formGroup">
                            <Label htmlFor="comment" md={2}>Comment</Label>
                        </Row>
            			<Row className="formGroup">
                            <Col>
                                <Control.textarea model=".message" id="message" name="message" 
                                    rows="6"
                                    className="form-control"/>
                            </Col>
                        </Row>
						<Row className="formGroup">
                            <Col md={10}>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
					</LocalForm>
				</ModalBody>
			</Modal>
			</div>
		);
	}
}

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

	function RenderComments({comments, addComment, dishId}) {
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
                        <CommentForm dishId={dishId} addComment={addComment}/>
                    </ul>
                </div>
            );
        }
        else
            return(
                <div></div>
            );
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
						<RenderComments comments = {props.comments}
						 addComment={props.addComment}
        				 dishId={props.dish.id}/>
					</div>
				</div>
			</div>
			);
	}


export default DishDetail;