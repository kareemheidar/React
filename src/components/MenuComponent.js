import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';





class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null){

            const comments = dish.comments.map((comment) => {
                return (
                    <div className="col-12 col-md-6 mt-5">
                        
                        <h6 small>{comment.comment}</h6>
                        <p>--- {comment.author},  {comment.date}</p>
                        <hr></hr>
                    </div>
                );
            });


            return (
                <div className="row" style={{ border: "1px solid #ddd"}}>
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
        else{
            return (
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-3 mt-5">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg top height="200px" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div>

                    {this.renderDish(this.state.selectedDish)}

                </div>
            </div>
        );
    }
}

export default Menu;