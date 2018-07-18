import React, { Component } from 'react';
import BookCal from '../pages/BookCal';
import {Container, Row, Col, Button, CardImg, CardBody, Card, Form, Label, Input} from 'reactstrap';

class BookInfo extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }

      change(e){
          this.setState({
              timeslots: e.target.value
          })
      }

      onSubmit(){
        this.setState({
            day: this.props.day,
            month: this.props.month,
            year: this.props.year,
            duration: this.props.duration,
            // timeslots: this.props.timeslots
        })
        // e.preventDefault();
        this.props.onSubmit(this.state);
      }
      
    render(){

        

        const style = {
            background: "linear-gradient(rgba(120, 120, 120, 120) 1%, rgb(147, 147, 147) 0%, rgba(0, 0, 0, 0) 100%)",
        }

        let day = this.props.day;
        let month = this.props.month;
        let year = this.props.year;
        let duration = this.props.duration
        let timeslots = this.props.timeslots;

        return (
        <div>
        
        {/* forcing bootstrap in it... */}
          <div className="container-fluid">
                <Row>

                    <Col style={style}>
                        
                        <Form>
                            <Label for="day">Day</Label>
                            <Input value={day} name="day" readOnly/>
                            <Label for="month">Month</Label>
                            <Input value={month} name="month" readOnly/>
                            <Label for="year">Year</Label>
                            <Input value={year} name="year" readOnly/>
                            <Label for="duration">Duration</Label>
                            <Input value={duration} name="duration" readOnly/>
                            <Label for="timeslots">Timeslots</Label>
                            <Input onChange={e => this.change(e)} type="select" name="timeslots">
                                    {timeslots.map(x => <option value={x}>{x}</option>)}
                            </Input>
                            <Button color="info" onClick={e => this.onSubmit()}>Submit!</Button>
                        </Form >
                    </Col>

                    <Col>
                        <Card>
                            <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <h2>Product Description</h2>
                                <p>Short Description about the article.</p>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div>

        </div>

        )
        
    }
   
}



export default BookInfo;