import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Control from './components/village/Control'
import Login from './components/village/Login'
import Signup from './components/village/Signup'
import ForgotPassword from './components/village/Forgot Password'
import Super from './components/village/Super'
import Admin from './components/village/Admin'
import NewRank from './components/village/NewRank'
import NewRankPrivate from './components/village/NewRank Private'
import Rank from './components/village/Rank'
import RankResult from './components/village/Rank Result'
import PrivateRank from './components/village/Private Rank'
import RankTank from './components/village/RankTank'
import NewAdmin from './components/village/New Admin'
import Logout from './components/village/Logout'




class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <Route exact path="/" component={Control}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/forgot_password" component={ForgotPassword}/>
            <Route exact path="/super" component={Super}/>
            <Route exact path="/admin/" component={Admin}/>
            <Route exact path="/new_rank" component={NewRank}/>
            <Route exact path="/new_rank_private" component={NewRankPrivate}/>
            <Route exact path="/new_admin" component={NewAdmin}/>
            <Route exact path="/rank/:rank_id" component={Rank}/>
            <Route exact path="/rank_polls/:rank_id" component={RankResult}/>
            <Route exact path="/private_rank/:rank_id" component={PrivateRank}/>
            <Route exact path="/rt" component={RankTank}/>
            <Route exact path="/rank_result/:rank_id" component={RankResult}/>
            <Route exact path="/logout" component={Logout}/>
          </div>
        </Router>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
