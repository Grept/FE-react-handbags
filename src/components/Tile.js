import React from "react";

function Tile({img, title, children}) {
    /*
    In dit geval gebruik ik een == operator ipv een === operator.
    Ik wil checken of children gelijk is aan 'null' of 'undefined' om te
    weten of er tekst is toegevoegd.
    Bij gebruik van == zijn 'null' en 'undefined' gelijk en kunnen we dus
    allebei tegelijk checken.
    Dit is in dit geval gelijk aan de langere schrijfwijze:
         if(children === null || children === undefined)
    */
    if (children == null) {
        return (
            <section>
                <img src={img} alt={title}/>
            </section>
        );
    } else {
        return (
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        );
    }
}

export default Tile;