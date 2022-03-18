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
                <Card img='https://www.businessinsider.in/thumb/msid-90296209,width-700,resizemode-4,imgsize-41164/finance/news/ukraines-prime-minister-says-nestle-ceo-showed-no-understanding-after-he-urged-the-firm-to-cease-all-business-in-russia/img62332817de66860018290d24.jpg' title='Some Tiltle' desc="Ukraine' s Prime Minister says Nestle CEO showed 'no understanding' after he urged the firm to cease all business in Russia" />
                <Card img='https://www.reuters.com/resizer/WqEYMZQXxP3GsPryjqPlgEX3Ngo=/1200x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4FQA6DKEBRPSPK4K7U2VJKAHKE.jpg' title='Some Tiltle' desc="Italy ready to rebuild theatre in Ukraine' s Mariupol -minister" />
                <Card img=' https://variety.com/wp-content/uploads/2022/03/Amazon-MGM.png?w=681&h=383&crop=1' title='Some Tiltle' desc='Amazon Closes $8.5 Billion Acquisition of MGM ' />
            </div>

            <h2 className="popular">Popular Blogs:</h2>
            <div className="popular__blogs">
                <Card img='https://img1.ak.crunchyroll.com/i/spire2/41af4cc9131bad872ac5a771572bc0181646095939_main.png' title='Some Tiltle' desc='Funimation Content Moving to Crunchyroll for World’s Largest Anime Library ' />
                <Card img='https://i.redd.it/2xoh2xbfrfm81.jpg' title='Some Tiltle' desc='What Animal Crossing opinion will have you like this?' />
                <Card img=' https://preview.redd.it/mrncw7r4s8n81.jpg?width=640&crop=smart&auto=webp&s=3613662ec780c6f542ed9b32edfdea2b03f702e0' title='Some Tiltle' desc='Shoutout to the non-bender who was ballsy enough to take on an Avatar who already mastered 3 elements. ' />
            </div>
            <div className="create_blog">

                <div style={{ background: "#577783", padding: '3rem' }}>
                    <center><button class="btn btn-primary" style={{ background: '#343a40', borderColor: 'white', padding: '1rem' }} data-toggle="modal" data-target="#exampleModal">Create Blog</button></center>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Create Blog</h5>
                                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Title</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail2" class="form-label">Description</label>
                                            <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="formFile" class="form-label">Upload your image</label>
                                            <input class="form-control" type="file" id="formFile" />
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="submit" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home