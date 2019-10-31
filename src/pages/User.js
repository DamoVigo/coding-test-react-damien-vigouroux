import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { Link } from "react-router-dom";
import Icon from '@material-ui/core/Icon';

import { title } from 'utils';

import { userService } from 'services';


class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            id: null,
            user: {}
        }
    }

    componentDidMount() {
        // userService.list() ... Pour remplir this.state.list
    }


    render() {
        return (
            <Fragment>
                <Helmet>
                    { title('Page secondaire') }
                </Helmet>

                <div className="user-page content-wrap">
                    <Link to="/" className="nav-arrow">
                        <Icon style={{ transform: 'rotate(180deg)' }}>arrow_right_alt</Icon>
                    </Link>

                    <div className="users-select">
                        <h1>
                            <select>
                                { /* Liste dynamique à partir de l'API */ }
                            </select>
                        </h1>
                    </div>

                    <div className="infos-block">
                        { /* Infos dynamiques sur l'utilisateur sélectionné */ }
                    </div>

                    <div className="articles-list">
                        { /* Liste dynamique tirée de l'utilisateur sélectionné */ }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UserPage;
