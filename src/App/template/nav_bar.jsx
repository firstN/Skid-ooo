require('../style/Content.scss')
import {Navbar, NavItem} from 'react-materialize'

class Nav_bar extends React.Component{
    
        
        constructor(props){
            super(props);
           
        }
        
       
        render(){
            return (
                    <div className='naw_bar_' >
                      <Navbar  brand={<img src='https://upload.wikimedia.org/wikipedia/commons/0/0d/World_map_with_singapore_resolution.svg'  width="150" />} right className='white' id='foter_nav'>
                            <NavItem  href='/#/'>Test 1</NavItem>
                            <NavItem  href='/#/test2'>Test 2</NavItem>
                        </Navbar>
                    </div>
                )
        }
    }
    module.exports = Nav_bar;
    //brand={<img src = '1.jpg' />}