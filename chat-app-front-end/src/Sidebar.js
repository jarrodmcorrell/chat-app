import React from 'react'
import "./Sidebar.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons/';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <IconButton>
                    <AccountCircleIcon></AccountCircleIcon>
                </IconButton>
                <IconButton>
                    <DonutLargeIcon color="primary"></DonutLargeIcon>
                </IconButton>
                <IconButton>
                    <ChatIcon color="action"></ChatIcon>
                </IconButton>
                <IconButton>
                    <MoreVertIcon color="secondary"></MoreVertIcon>
                </IconButton>
            </div>
            <div className="sidebar_search">
                <SearchOutlined></SearchOutlined>
                <input placeholder="Search for Chat" type="text"/>
            </div>
            <div className="sidebar__chats">
                
            </div>
        </div>
    )
}

export default Sidebar;
