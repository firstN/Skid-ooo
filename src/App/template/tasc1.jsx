require('../style/Content.scss')
import {Row, Col} from 'react-materialize'

class Task_one extends React.Component{
        
        constructor(props){
            super(props);
           
        }   
        render(){
            return (
                    <div className='task_one'>
                        <Row>
                            <Col s={12} m={12} l={12} >
                                <Col className='slide_menu' s={12} m={9} l={10}>
                                    <img src="http://meristics.com/images/logos/react-logo%20400x200.png"/>
                                    <img src="http://meristics.com/images/logos/react-logo%20400x200.png"/>
                                    <img src="http://meristics.com/images/logos/react-logo%20400x200.png"/>
                                    <img src="http://meristics.com/images/logos/react-logo%20400x200.png"/>
                                    <img src="http://meristics.com/images/logos/react-logo%20400x200.png"/>
                                    <img src="http://meristics.com/images/logos/react-logo%20400x200.png"/>
                                    <img src="http://meristics.com/images/logos/react-logo%20400x200.png"/>
                                    <img src="http://meristics.com/images/logos/react-logo%20400x200.png"/>
                                    <img src="http://meristics.com/images/logos/react-logo%20400x200.png"/>
                                </Col>
                                <Col className='bar_menu'  s={12} m={2} l={2}>
                                    <p>menu</p>
                                    <p>menu</p>
                                    <p>menu</p>
                                    <p>menu</p>
                                    <p>menu</p>
                                </Col>
                            </Col>
                        </Row>
                    
                    </div>
                )
        }
    }
    module.exports = Task_one;
    