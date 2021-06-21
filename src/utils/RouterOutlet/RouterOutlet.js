import {
  Switch,
  Route,
} from "react-router-dom";

import Products from '../../views/Products'
import Items from '../../views/Items'
import NotFound from '../404';

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/',
    component: Products
  },
  {
    path: '/product-detail',
    exact: true,
    redirect: '/',
    component: Items
  },
  {
    path: '/messages',
    exact: true,
    redirect: '/',
    component: NotFound
  },
  {
    path: '/settings',
    exact: true,
    redirect: '/',
    component: NotFound
  }
]

export const RouterOutlet = () => {
  return (
    <Switch>
      {routes.map(route => <Route
        key={route.path}
        path={route.path}
        exact={route.exact ? route.exact : false}
        render={() => {return <route.component />}}
          />
      )}
    </Switch>
  )
}