import React from 'react';
import './App.css';

// COMPONENTS
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";

// ASSETS
import theHandyBag from "./assets/bag_1.png";
import theStylishBag from "./assets/bag_2.png";
import theSimpleBag from "./assets/bag_3.png";
import theTrendyBag from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";

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
                <Tile title="The Brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum et, id nobis officia quae
                        quibusdam temporibus! Ab, aliquam, aspernatur commodi ducimus eaque eum laudantium libero minima
                        quos repudiandae sunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, esse fuga incidunt laborum
                        modi quibusdam rem sed soluta. Amet architecto dolorem fugit id illo iste laboriosam nesciunt
                        nulla officia vero.
                    </p>
                </Tile>
                <Tile img={brand} title="The Brand"/>
                <Tile img={ourStory} title="Our Story"/>
                <Tile title="Our Story">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at dignissimos,
                        iure nobis nulla quos reiciendis saepe temporibus veritatis. Atque eligendi eos maiores minima,
                        nulla qui totam ullam ut.
                    </p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



