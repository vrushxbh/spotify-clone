import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import SearchIcon from '@material-ui/icons/Search';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt=""/>
            <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={HorizontalSplitIcon} title="Your Library" />
            
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOption title = {playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar;
