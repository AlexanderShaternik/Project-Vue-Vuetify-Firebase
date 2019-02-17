import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from './views/Books'
import Book from './views/Book'
import Words from './views/Words'
import Signin from './views/Signin'
import Signup from './views/Signup'
import Profile from './views/Profile'
import Store from './store'

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/books',
        name: 'books',
        component: Books
    },
      {
          path: '/book:id',
          name: 'book',
          props: true,
          component: Book
      },
    {
        path: '/words',
        name: 'words',
        component: Words
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        beforeEnter: AuthGuard
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },

  ],
    mode: 'history'
})

function AuthGuard(from,to,next){
    if(Store.getters.isUserAuthenticated)
        next();
    else
        next('./signin')
}