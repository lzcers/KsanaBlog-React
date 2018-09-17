import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '@/pages/Home'
import Post from '@/pages/Post'
import About from '@/pages/About'
import Archive from '@/pages/Archive'

const Routes = _ => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home/page/:pageNumber" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/post/:id" component={Post} />
        <Route path="/about" component={About} />
        <Route path="/archive/tag/:tag" component={Archive} />
        <Route path="/archive" component={Archive} />
    </Switch>
)
export default Routes
