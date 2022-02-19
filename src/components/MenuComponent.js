import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';



function RenderMenuItem({ dish, onClick }) {
    return (
        <Link to={`/menu/${dish.id}`}>
            <Card>
                <CardImg top height="200px" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                </CardBody>
            </Card>
        </Link>
    );
}

const Menu = (props) => {

    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-3 mt-5 mb-3">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });
    if (props.dishes.isLoading) {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='offset-md-6 mt-3'><Loading /></div>
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className='container'>
                <div className='row'>
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
    
                <div className="row">
                    <Breadcrumb className="col-12">
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}



export default Menu;