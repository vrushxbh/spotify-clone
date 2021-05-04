import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { useDataLayerValue } from './DataLayer';
import './Header.css';

function Header() {
    const [{user}, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input placeholder="Search for artists, Songs" type="text" />
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt="VT" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;
