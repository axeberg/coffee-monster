import React from 'react';

import './FreshBrews.css'

class FreshBrews extends React.Component {

    render() {
        return (
            <div>
                <section className="main-section" id="FreshBrews">
                    <div className="container">
                        <h2>Fresh brews</h2>
                        <h6>Fresh coffee pics that will keep you wanting a brew yourself.</h6>
                        <div className="freshBrewsFilter">
                            <ul className="FreshBrews-nav">
                                <li>
                                    <a href="#" data-filter="*" className="current">All</a>
                                </li>
                                <li>
                                    <a href="#" data-filter=".instagram">Instagram</a>
                                </li>
                                <li>
                                    <a href="#" data-filter=".twitter">Twitter</a>
                                </li>
                                <li>
                                    <a href="#" data-filter=".facebook">Facebook</a>
                                </li>
                                <li>
                                    <a href="#" data-filter=".flickr">Flickr</a>
                                </li>
                            </ul>
                        </div>
                        <div className="freshBrewsContainer">
                            <div className=" FreshBrews-box printdesign">
                                <a href="#"><img src="https://source.unsplash.com/collection/436278/360x270" alt=""/></a >
                                <h3>Photo Title</h3>
                                <p>Category</p>
                            </div>
                            <div className="FreshBrews-box webdesign">
                                <a href="#"><img src="https://source.unsplash.com/collection/1215/360x270" alt=""/></a >
                                <h3>Photo Title</h3>
                                <p>Category</p>
                            </div>
                            <div className=" FreshBrews-box branding">
                                <a href="#"><img src="https://source.unsplash.com/collection/189929/360x270" alt=""/></a >
                                <h3>Photo Title</h3>
                                <p>Category</p>
                            </div>
                            <div className=" FreshBrews-box photography">
                                <a href="#"><img src="https://source.unsplash.com/collection/415854/360x270" alt=""/></a >
                                <h3>Photo Title</h3>
                                <p>Category</p>
                            </div>
                            <div className=" FreshBrews-box branding">
                                <a href="#"><img src="https://source.unsplash.com/collection/147415/360x270" alt=""/></a >
                                <h3>Photo Title</h3>
                                <p>Category</p>
                            </div>
                            <div className=" FreshBrews-box photography">
                                <a href="#"><img src="https://source.unsplash.com/collection/166770/360x270" alt=""/></a >
                                <h3>Photo Title</h3>
                                <p>Category</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

}

export default FreshBrews;
