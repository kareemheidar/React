import React from 'react';
import { Media } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CommentForm from './CommentComponent';
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';



function RenderDish({ dish, comments, addComment, dishId }) {
    if (dish != null) {

        const comm = comments.map((comment) => {
            return (
                <div className="col-12 col-md-6 mt-5">

                    <h6 small>{comment.comment}</h6>
                    <p>--- {comment.author},  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                    <hr></hr>
                </div>
            );
        });


        return (
            <div className="row" style={{ border: "1px solid #ddd" }}>
                <div key={dish.id} className="col-12 mt-5">
                    <Media>
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p> {dish.description} </p>
                            <br></br>
                            <h5>Comments and Reviews</h5>
                            <p>{comm}<br></br></p>
                            <CommentForm dishId={dishId} addComment={addComment} />
                            <p><br></br></p>

                        </Media>


                    </Media>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}



const DishDetail = (props) => {

    if (props.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='offset-md-6 mt-3'><Loading /></div>
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container">

                <div className="row">
                    <Breadcrumb className="col-12">
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                <div>

                    <RenderDish dish={props.dish} comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />

                </div>
            </div>
        );
    }

}


export default DishDetail;