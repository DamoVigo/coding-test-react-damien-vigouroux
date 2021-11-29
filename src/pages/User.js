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
                    <Link to="/" className="nav-arrow-user">
                        <Icon style={{ transform: 'rotate(180deg)', fontSize: '80px' }}>arrow_right_alt</Icon>
                    </Link>

                    <div className="users-select">
                        <h1>
                            <select>
                                { <option value="name">Marie-sophie</option> }
                            </select>
                        </h1>
                    </div>

                    <div className="infos-block-user">
                        { 
                            <>
                                <div className="occupation">Occupation : <span>Exploratrice / pirate a mi temps</span></div>
                                <div className="birthday">Birthday : <span> 1er fevrier 1999</span></div>
                            </>
                        }
                    </div>

                    <div className="articles-list">
                        { 
                            <>
                            <div className="block-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">Marie-Sophie</div>
                                        <div className="card-text"><p>Bonjour voici mon article ! voici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon article</p></div>
                            
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">Marie-Sophie</div>
                                        <div className="card-text"><p>Bonjour voici mon article ! voici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon article</p></div>
                            
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">Marie-Sophie</div>
                                        <div className="card-text"><p>Bonjour voici mon article ! voici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon article</p></div>
                            
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">Marie-Sophie</div>
                                        <div className="card-text"><p>Bonjour voici mon article ! voici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon article</p></div>
                            
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">Marie-Sophie</div>
                                        <div className="card-text"><p>Bonjour voici mon article ! voici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon article</p></div>
                            
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title">Marie-Sophie</div>
                                        <div className="card-text"><p>Bonjour voici mon article ! voici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon articlevoici mon article</p></div>
                            
                                    </div>
                                </div>
                            </div>
                            </>
                            
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default UserPage;
