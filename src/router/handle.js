import React from 'react';
import {Route} from 'react-router-dom';

function initRouter (routes) {
  return (
    routes.map((route, key) => {
      if (route.exact) {
        return (
          <Route exact path={route.path} key={key} 
            render={
              props => {
                return <route.component {...props} route={route.children}/>
              }
            }
          />
        )
      } else {
        return (
          <Route path={route.path} key={key} 
            render={
              props => {
                return <route.component {...props} route={route.children} />
              }
            }
          />
        )
      }
    })
  )
}

export default initRouter;