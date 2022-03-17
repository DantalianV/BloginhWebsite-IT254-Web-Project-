import { Avatar } from '@mui/material';
import React from 'react';
import './Blog.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { AddComment as AddCommentIcon, Reply } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

function Blog({ author_av, img, title, desc, blog_text }) {
    const navigate = useNavigate();

    function handelCommentClick() {
        navigate('/blog/add_comment');
    }

    return (
        <div className='blog'>
            <div className="blog__top">
                <Avatar src={author_av} />
                <h4 className="title">{title}</h4>
                <MoreHorizIcon id="More_options" />
            </div>

            <div className="blog__middle">
                <img className="blog__img" src={img} alt={title} />

                <div className="blog__desc">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {desc}
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {blog_text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog__bottom">
                <ThumbUpIcon />
                <AddCommentIcon onClick={handelCommentClick} />
                <Reply />
            </div>
        </div>
    )
}

export default Blog