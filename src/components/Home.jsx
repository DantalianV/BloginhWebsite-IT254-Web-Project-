import React from 'react'
import Card from "./Card";
import MyBody from "../mycomponents/MyBody";
import './Home.css';
import CreateBlog from './CreateBlog';

function Home() {
    return (
        <div className="Home__body">
            <MyBody />
            <h2 className="trending">Trending Blogs:</h2>
            <div className="trending__blogs">
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some Plain text exclusively consists of character representation. Each character is represented by a fixed-length sequence of one, two, or four bytes, or as a variable-length sequence of one to four bytes, in accordance to specific character encoding conventions,' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some Plain text exclusively consists of character representation. Each character is represented by a fixed-length sequence of one, two, or four bytes, or as a variable-length sequence of one to four bytes, in accordance to specific character encoding conventions,' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some Plain text exclusively consists of character representation. Each character is represented by a fixed-length sequence of one, two, or four bytes, or as a variable-length sequence of one to four bytes, in accordance to specific character encoding conventions,' />
            </div>

            <h2 className="popular">Popular Blogs:</h2>
            <div className="popular__blogs">
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some Plain text exclusively consists of character representation. Each character is represented by a fixed-length sequence of one, two, or four bytes, or as a variable-length sequence of one to four bytes, in accordance to specific character encoding conventions,' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some Plain text exclusively consists of character representation. Each character is represented by a fixed-length sequence of one, two, or four bytes, or as a variable-length sequence of one to four bytes, in accordance to specific character encoding conventions,' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some Plain text exclusively consists of character representation. Each character is represented by a fixed-length sequence of one, two, or four bytes, or as a variable-length sequence of one to four bytes, in accordance to specific character encoding conventions,' />
            </div>
            <div className="create_blog">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>

                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                    {/* <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body small">
                        ...
                    </div> */}
                    <CreateBlog />
                </div>
            </div>
        </div>
    )
}

export default Home