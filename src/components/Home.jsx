import React from 'react'
import Card from "./Card";
import MyBody from "../mycomponents/MyBody";
import './Home.css';

function Home() {
    return (
        <div className="Home__body">
            <MyBody />
            <h2 className="trending">Trending Blogs:</h2>
            <div className="trending__blogs">
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some description' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some description' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some description' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some description' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some description' />
            </div>

            <h2 className="popular">Popular Blogs:</h2>
            <div className="popular__blogs">
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some description' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some description' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some description' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some description' />
                <Card img='https://picsum.photos/200/300' title='Some Tiltle' desc='Some description' />
            </div>
        </div>
    )
}

export default Home