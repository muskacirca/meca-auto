import React from 'react';
import { IndexRoute, Route } from 'react-router';

import MainApp from '../components/MainApp'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Booking from '../components/Booking'

export default  <Route>
                    <Route path="/" component={MainApp}>

                        <IndexRoute component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/services" component={Home} />
                        <Route path="/booking" component={Booking} />
                    </Route>

                </Route>
