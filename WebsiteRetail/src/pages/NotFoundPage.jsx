import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
    render() {
        return (
            <ComponantNotFound className="">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Ops</h1>
                            <h2>Error 404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error occurred. The requested page was not found!
                            </div>
                            <div className="error-action">
                                <Link className="btn btn-outline-success btn-lg" to="/">Home</Link>
                                    <i className="fas fa-home"/>
                                    &nbsp;Back To Home

                            </div>
                        </div>
                    </div>
                </div>                
            </ComponantNotFound>
        );
    }
}

export default NotFoundPage;

const ComponantNotFound = styled.div`

    .error-template {
        padding: 40px 15px;
        text-align: center;
    }

    .error-action {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .btn {
        margin-right: 10px;
    }
`;