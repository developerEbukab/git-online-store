import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header.component';
import Homepage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';


function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
