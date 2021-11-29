import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import Icon from '@material-ui/core/Icon';

import { title } from 'utils';


class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Helmet>
                    { title('Page d\'accueil') }
                </Helmet>
                <div className="cercle"></div>
                <div className="cercle-droite"></div>
                <div className="home-page content-wrap">
                    <div className="infos-block">
                        <h1>04h11</h1>
                        <p>Le spécialiste de vos données.</p>
                    </div>
                    <Link to="/users" className="nav-arrow-home">
                        <Icon style={{ fontSize: '80px' }}>arrow_right_alt</Icon>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

export default HomePage;
