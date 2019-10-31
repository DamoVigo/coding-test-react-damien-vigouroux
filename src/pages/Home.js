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

                <div className="home-page content-wrap">
                    <div className="infos-block">
                        <h1>04h11</h1>
                        <p>Spécialiste de vos données.</p>
                    </div>

                    <Link to="/users" className="nav-arrow">
                        <Icon>arrow_right_alt</Icon>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

export default HomePage;
