import { Avatar } from '@mui/material';
import React from 'react';
import './AddComment.css';

function AddComment() {
    return (
        <div className="add__comment">
            <Avatar />
            <div className="comment__input">
                <input type="text" />
            </div>
            <button className="comment__btn">Add</button>
        </div>
    )
}

export default AddComment