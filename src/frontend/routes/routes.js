import React from 'react';
import { IndexRoute, Route } from 'react-router';

import MainApp from '../components/MainApp'
import Home from '../components/Home'
import Contact from '../components/Contact'

export default  <Route>
                    <Route path="/" component={MainApp}>

                        <IndexRoute component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/repair" component={Home} />
                        <Route path="/care" component={Home} />
                        <Route path="/stock" component={Home} />
                    </Route>

                </Route>
