

const Task1 = require('./template/tasc1.jsx'); 
const Tasc2 = require('./template/tasc2.jsx'); 


const Footer = require('./template/footer.jsx');

const Nav_bar = require('./template/nav_bar.jsx');


const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
ReactDOM.render(
    <div>
        <Nav_bar />
            <Router>
                <div className='App'>        
                        <Route exact path = '/' component = {Task1} />
                        <Route  path = '/test2' component = {Tasc2} />
                </div>
            </Router>
        <Footer />
    </div>
    ,
    document.getElementById('container')
)
