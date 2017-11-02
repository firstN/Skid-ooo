require('../style/Content.scss')
import {Row, Col,Table ,Input,Button} from 'react-materialize'

class Task_two extends React.Component{
    
        
        constructor(props){
            super(props);
           this.state={
               table:['Some item','Another item'],
               Lable: 'More :',
               edit: false,
               id_edit: '',
               color_button: 'blue',
               go_back: ['Some item','Another item']
              
           }
          
           this.edit_item = this.edit_item.bind(this);
           this.remove_item = this.remove_item.bind(this); 
        }
        //adds or changes data
       add_item(e){
            e.preventDefault()
           
           if(this.state.edit === true){
               const edit_name = this.state.table.slice();
               edit_name.splice(this.state.id_edit,1,this.textInput.state.value)
               if(this.textInput.state.value){
                
                this.setState({
                    table:edit_name
                })
            }
               this.setState({
                edit: false,
                color_button: 'blue',
                id_edit: ''
               })
           } else
                if(document.getElementById('focus_input').value){
                    const go_back = this.state.table.slice();
                    this.setState({
                        table:[...this.state.table, this.textInput.state.value]
                        // go_back: go_back
                    })
                }

                document.getElementById('focus_input').value=''
                this.focus_input()

                this.setState({
                Lable: 'More...'
                })

       }
        edit_item(e,i,v){
        
            this.setState({
            edit:true,
            color_button:'green',
            Lable:  i,
            id_edit: e
            })
            
            this.focus_input()
            
            }

        remove_item(e){
            const del_table = this.state.table.slice()

            del_table.splice(e,1)
                this.setState({
                    table:del_table 
                })
            }
        go_back(){
            const go_back = this.state.table.slice();

            go_back.pop()
            this.setState({
                table : go_back
            })
            // this.setState({
            //     table : this.state.go_back
            // })
        }

            focus_input(){
                document.getElementById('focus_input').focus()
            }
            
            componentDidMount(){
                this.focus_input()
            }
        
        render(){
            const self = this;
            const Tebla_tr =this.state.table.map(function(v,i){
                const date = i;
                return ( <tr key ={ v + i}> <td  id={i} >{v}</td>  <td ><Button  waves='orange' className='green ' onClick={self.edit_item.bind(null,date,v)}
                >Edit </Button></td> <td><Button waves='purple' className='grey' onClick={self.remove_item.bind(null,date)}>Remove</Button></td></tr>)
            })
            return (
                    <div className='table_tsk2' >
                        <Row>
                            <Col s={12} m={8} l={8}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th data-field="id">Item Name</th>
                                            <th data-field="name">Edit</th>
                                            <th data-field="price">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {  Tebla_tr   }
                                    </tbody>

                                </Table>
                            </Col>
                            <Col  s={12} m={4} l={4}>
                                <form className='form_add' onSubmit={this.add_item.bind(this)}>
                                    <label id='Label_input' className={'lable_'+ this.state.color_button} >{this.state.Lable}</label> 
                                    <Input   id='focus_input' ref={(input) => { this.textInput = input; }} type='text' placeholder='Enter some text....' ></Input>
                                    <Button className={this.state.color_button}  onClick={this.add_item.bind(this)} >Item Name</Button >
                                    <br/>
                                </form>
                                <Button className='grey' waves='orange'  onClick={this.go_back.bind(this)} >>>Go back</Button >
                            </Col>
                        </Row>
                    </div>
                )
        }
    }
    module.exports = Task_two;
    