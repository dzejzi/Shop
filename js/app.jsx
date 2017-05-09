import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Template from './Components/Template.jsx';
import Main from './Components/Main.jsx';
import Products from './Components/Products.jsx';
import Product from './Components/Product.jsx';

require("../scss/main.scss")//dołączamy pllik scss

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Template}>
            <IndexRoute component={Main} />
            <Route path='/products' component={Products} />
            <Route path='/product/:id' component={Product} />
          {/*  <Route path='/cart/:id' component={Cart} />
            <Route path='/orders' component={Orders} />
            <Route path='/order/:id' component={Order} />
            <Route path='/contact' component={Contact} />
            <Route path='*' component={NotFound} />*/}
        </Route>
    </Router>,
    document.getElementById('app')
  )

});

/*
stałe elementy
menu-lista produktów
zamówienia, koszyk
stopka kontakt-formularz
lista produktów
tabelka, 2 kolumny, klikalny row do widoku produktu

-foto-nazwy, opis,
ile sztuk z dostępnych

*/
