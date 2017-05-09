import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Template from './Components/Template.jsx';
import Main from './Components/Main.jsx';
import Products from './Components/Products.jsx';

require("../scss/main.scss")//dołączamy pllik scss

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Template}>
            <IndexRoute component={Main} />
            <Route path='/products' component={Products} />
          {/*  <Route path='/product/:id' copmponent={Product} />
            <Route path='/cart/:id' copmponent={Cart} />
            <Route path='/orders' copmponent={Orders} />
            <Route path='/order/:id' copmponent={Order} />
            <Route path='/contact' copmponent={Contact} />
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
