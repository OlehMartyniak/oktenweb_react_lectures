import React from 'react';
import {Link} from "react-router-dom";

const UserComponent = ({user}) => {
    return (
        <div>
            {user.name} - <span><Link to={user.id.toString()}>user posts</Link></span>
        </div>
    );
};

export {UserComponent};