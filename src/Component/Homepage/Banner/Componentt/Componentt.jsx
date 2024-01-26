import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Componentt.css';

function Componentt() {

  // Internal JSON 
  const data = [{
                  icon : "fa-solid fa-house fs-1",
                  title : "Full Course",
                  subtitle : "24 Hours Support"
                },
                {
                  icon : "fa-solid fa-user fs-1",
                  title : "About",
                  subtitle : "24 Hours Support"
                },
                {
                  icon : "fa-solid fa-envelope fs-1",
                  title : "Mail us",
                  subtitle : "24 Hours Support"
                },
                {
                  icon : "fa-solid fa-users fs-1",
                  title : "Community",
                  subtitle : "24 Hours Support"
                },
                {
                  icon : "fa-solid fa-location-dot fs-1",
                  title : "Our Location",
                  subtitle : "24 Hours Support"
                }
              ];

  const Column = ({ data }) => {
    return (
      <>
        <Col className=' text-center p-5 shadow border my-3 mx-2 border-dark rounded'>
          <div className="icon-box py-5 mx-3 rounded-circle border border-dark">
            <i className={data.icon}></i>
          </div>
          <h1>{data.title}</h1>
          <p>{data.subtitle}</p>
        </Col>
      </>
    );
  }

return (
  <Container>
    <Row>
      {/* <Col className='text-center p-5 shadow border me-2'>
          <div className="icon-box">
            <i class="fa-solid fa-house"></i>
            <h1>Full Course</h1>
            <p>24 Hours Support</p>
          </div>
        </Col> */}

      {/* OR */}
      {
        data.map((item , index) => {
            
          return <Column  data={item} key={index}/>
        })
      }
    </Row>
  </Container>
)
}

export default Componentt