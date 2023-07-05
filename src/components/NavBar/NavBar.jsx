import "./style.css"

function NavBar (props) {

    return (
        <div className="container_navbar">
            <img className="img_logo" src="/assets/logo.png"></img>
            <ul className="ul_navbar">
                <li className="li_navbar container_shopping"><img className="img_shopping" src="/assets/shopping_cart64.png"></img><h3 className="count_shopping">1</h3></li>
                <li className="li_navbar"><a>Postres</a></li>
                <li className="li_navbar"><a>Entrantes</a></li>
                <li className="li_navbar"><a>Pizzas</a></li>
            </ul>
        </div>
    );

}

export default NavBar; 