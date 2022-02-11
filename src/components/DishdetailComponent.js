import React from 'react';
import { Media } from 'reactstrap';



function RenderDish({ dish }) {
    if (dish != null) {

        const comments = dish.comments.map((comment) => {
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
                            <h6>Comments and Reviews</h6>
                            <p>{comments}</p>

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


    return (
        <div className="container">

            <div>

                <RenderDish dish={props.selectedDish} />

            </div>
        </div>
    );
}


export default DishDetail;