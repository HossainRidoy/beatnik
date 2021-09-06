import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Layout from '../layout'
import Home from '../pages/home'
import About from '../pages/about'
import Services from '../pages/services'
import Portfolio from '../pages/portfolio'
import OurWorkDetails from '../pages/our-work-details'
import Partnership from '../pages/partnership'
import Technology from '../pages/technology'
import News from "../pages/news"
import Blog from "../pages/blog"
import Dribbble from "../pages/dribbble"
import Clients from "../pages/clients"
import Career from "../pages/career"

import Discussyourproject from "../pages/discussProject"

const Routes =()=> {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {/* Top category Page */}
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/service/:name/:id" exact component={Services}/>
                    <Route path="/portfolio" exact component={Portfolio}/>
                    <Route path="/clients" exact component={Clients}/>
                    <Route path="/career" exact component={Career}/>
                    <Route path="/partnership" exact component={Partnership}/>
                    <Route path="/category/:name/:id" exact component={OurWorkDetails}/>
                    <Route path="/discussyourproject" exact component={Discussyourproject}/>

                    {/* Footer category Page */}
                    <Route path="/technology" exact component={Technology}/>
                    <Route path="/news" exact component={News}/>
                    <Route path="/blog" exact component={Blog}/>
                    <Route path="/dribbble" exact component={Dribbble}/>


                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes
