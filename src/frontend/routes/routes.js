import React from 'react';
import { IndexRoute, Route } from 'react-router';

import MainApp from '../components/MainApp'
import Home from '../components/Home'

export default  <Route>
                    <Route path="/" component={MainApp}>

                        <IndexRoute component={Home} />
                    </Route>

                </Route>
