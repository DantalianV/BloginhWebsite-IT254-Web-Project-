import { Avatar } from '@mui/material';
import React from 'react';
import './CreateBlog.css';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MoodIcon from '@mui/icons-material/Mood';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

function CreateBlog() {
    return (
        <div className="createBlog">
            <div className="create__top">
                <Avatar />
            </div>

            <div className="create__center">
                <div className="blog__title">
                    <input type="text" placeholder='Blog Title' />
                </div>
                <div className="blog__text">
                    <input type="text" placeholder='Whats on your mind ??' />
                </div>

                <div className="create__bottom">
                    <div className="create__options">
                        <LiveTvIcon className='live' />
                        <span>Live Steaming</span>
                    </div>

                    <div className="create__options">
                        <PhotoLibraryIcon className='photo' />
                        <span>Photo/Vedio</span>
                    </div>

                    <div className="create__options">
                        <MoodIcon className='feeling' />
                        <sapn>Feeling/Activity</sapn>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateBlog