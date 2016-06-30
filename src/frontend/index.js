import React from 'react'
import ReactDOM from 'react-dom'

import {
    Router,
    useRouterHistory,
    applyRouterMiddleware
} from 'react-router'

import routes from './routes/routes'

import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render(<Router history={appHistory}
                        routes={routes} />, document.getElementById('app'))
