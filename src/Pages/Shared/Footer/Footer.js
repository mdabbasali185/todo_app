
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="mt-auto  text-light">
      <div className="container my-5">
        <Row className='align-items-stretch'>
          <Col lg={4}>
            <div className="px-3 border-light border-end h-100">
              <h1 className='word'><span className='text-light fst-italic'>Todo</span>App</h1>
              <p className='text-secondary py-2'>Odds are high that you’re probably not as obsessed with your task list as I am. No, really: I’ve been known to spend more time organizing my to-dos than actually doing them. </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="px-3 border-light border-end h-100">
              <h1>Features</h1>
              <div className='text-secondary'>
                <h5>Stay in Sync</h5>
                <h5>Nagging Reminders</h5>
                <h5>Folders</h5>
                <h5>Share and Collaborate</h5>
                <h5>Priority Levels</h5>
                <h5>Time Tracking</h5>
              </div>

            </div>
          </Col>
          <Col lg={4}>
            <div className="px-3 border-light border-end h-100">
              <h1>Premium Features</h1>
              <div className='text-secondary'>
                <h5>Repeating Tasks</h5>
                <h5>Advanced Filter, Sort, Display</h5>
                <h5>Calendar Integration</h5>
                <h5>Notes</h5>
                <h5>Contacts Integration</h5>
              </div>

            </div>
          </Col>
          
        </Row>
        <hr className="bg-light" />
        <Row className='text-center'>
          <h4><span className='text-secondary'> &#169; Copyright all right reserved by <a className='text-decoration-none text-info' href="https://github.com/mdabbasali185" target='_blank' rel='noreferrer'>Abbas Ali</a> in <span className='text-white'>2022</span></span></h4>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;