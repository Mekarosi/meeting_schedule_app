import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Meetings from './components/meetings/meetings';
import Setmeetings from './components/setmeetings/setmeetings';

class App extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {
    return (
      <div className="App-header">
        <Container>
          <Row>
            <Col className='user' xs={4}>
              <div>
                <img src='https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg' ></img>
                <p>
                  Mekarosi
                </p>
              </div>
              <section>
                <p>Upcomming meetings</p>
                <Meetings></Meetings>
              </section>
            </Col>
            <Col className='schedule' xs ={8}>
              <Setmeetings></Setmeetings>
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }

}

export default App;
