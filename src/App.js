import React from 'react';
import './App.css';

import Button from "./components/Button";
import Product from "./components/Product";

import theHandyBag from "./assets/bag_1.png"
import theStylishBag from "./assets/bag_2.png"
import theSimpleBag from "./assets/bag_3.png"
import theTrendyBag from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button name="to the collection"/>
                <Button name="shop all bags"/>
                <Button name="pre-orders" disabled={true}/>
            </nav>
            <main>
                <Product
                    promo="Best seller"
                    img={theHandyBag}
                    name="The handy bag"
                    price="400,-"
                />
                <Product
                    promo="Best seller"
                    img={theStylishBag}
                    name="The stylish bag"
                    price="250,-"
                />
                <Product
                    promo="Best seller"
                    img={theSimpleBag}
                    name="The simple bag"
                    price="300,-"
                />
                <Product
                    promo="Best seller"
                    img={theTrendyBag}
                    name="The trendy bag"
                    price="150,-"
                />
            </main>

            <footer>
                <section>
                    <h2>
                        The Brand
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dignissimos dolores error fugit
                        libero minus nam necessitatibus quam quas, quis quos sunt voluptate? Ad eaque fugit, iure minus
                        omnis rerum.

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis itaque nulla quae
                        reprehenderit. Assumenda autem consectetur cum dicta dolor, eius et hic, illo iusto nulla
                        possimus tempora, tenetur veritatis voluptatibus.
                    </p>
                </section>
                <section>
                    <img src={brand} alt="The Brand"/>
                </section>
                <section>
                    <img src={ourStory} alt="Our Story"/>
                </section>
                <section>
                    <h2>Our Story</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam cum cupiditate
                        delectus dolorem enim pariatur quia sequi suscipit veritatis. Exercitationem, fugit laboriosam
                        non nulla pariatur possimus. Animi, nostrum, vel.
                    </p>
                </section>
            </footer>
        </>
    );
}

export default App;



