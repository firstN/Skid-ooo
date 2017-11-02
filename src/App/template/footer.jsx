
require('../style/Content.scss')
import {Row,Col} from 'react-materialize'

class Footere extends React.Component{     
        constructor(props){
            super(props);
           
        }
       
        render(){
            return (
                    <Row>
                        <Col l={12} m={12} s={12} className='footer_down blue'>
                        <p>Task 1 and 2</p>
                        </Col>
                    </Row>
                )
        }
    }
    module.exports = Footere;