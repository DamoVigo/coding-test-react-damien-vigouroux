import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";

import { title } from 'utils';


class E404Page extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    { title('Page introuvable') }
                </Helmet>

                <div className="error-page content-wrap">
                    <h1>Page introuvable</h1>
                    <p>Cette page ne semble pas exister ...</p>
                    <Link to="/">Retour à l'accueil</Link>
                </div>
            </Fragment>
        )
    }
}

export default E404Page;
