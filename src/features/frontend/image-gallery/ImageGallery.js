import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { Container, Col, Row } from 'react-bootstrap'
const ImageGallary = () => {
  return (
    <>
      <h2> Gallary</h2>
      <div className="container-fluid">
        <img
          src="https://goldsgym.in/assets/images/banner.jpg"
          style={{ width: '100%' }}
        ></img>
      </div>
      <div className="d-flex justify-content-center">
        <Button className="m-5"> Images</Button>
        <Button className="m-5"> Videos</Button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <img
              src="https://goldsgym.in/uploads/gallery/compress-photo-1558611848-73f7eb4001a1.jpg"
              style={{ width: 400 }}
            ></img>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="https://goldsgym.in/uploads/gallery/compress-photo-1558611848-73f7eb4001a1.jpg"
              style={{ width: 400 }}
            ></img>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="https://goldsgym.in/uploads/gallery/compress-photo-1558611848-73f7eb4001a1.jpg"
              style={{ width: 400 }}
            ></img>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <img
              src="https://goldsgym.in/uploads/gallery/compress-photo-1558611848-73f7eb4001a1.jpg"
              style={{ width: 400 }}
            ></img>
          </div>
          <div className="col-4">
            <img
              src="https://goldsgym.in/uploads/gallery/compress-photo-1558611848-73f7eb4001a1.jpg"
              style={{ width: 400 }}
            ></img>
          </div>
          <div className="col-4">
            <img
              src="https://goldsgym.in/uploads/gallery/compress-photo-1558611848-73f7eb4001a1.jpg"
              style={{ width: 400 }}
            ></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageGallary
