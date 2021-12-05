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
        
        userService.list().then(response => {
            response.map((e) => {
                const names = e.name
                const id = e.id
                return this.setState({ list: [...this.state.list, {id, names}] })
                });
            })
    }
    
    onChange = (user) => {
        let index = user.nativeEvent.target.selectedIndex;
        let label = user.nativeEvent.target[index].text;
        const id = user.target.value
        this.props.history.push({
            pathname: `/users/${id}`
        })
        this.setState({ 
            id: id,
            user: label
        })
    }

    render() {
        console.log(`${this.state.id}`)
        console.log(`${this.state.user}`)
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
                            <select onChange={this.onChange}>
                                {   this.state.list.map((e) => {
                                        return  (
                                                <option key={e.id} value={e.id} label={e.names}>{e.names}</option>
                                        ) 
                                    })
                                }
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
