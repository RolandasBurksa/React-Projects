import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function StackingExample() {
  return (
    <>
      <h1>Toast example</h1>
      <div>
        {/* <button>Toast Test</button>
        <ToastContainer className="position-static">
          <Toast>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">just now</small>
            </Toast.Header>
            <Toast.Body>See? Just like this.</Toast.Body>
          </Toast>
          <Toast>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small className="text-muted">2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
          </Toast>
        </ToastContainer> */}

        {/* <Toast>
          <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast> */}

        {['Success'].map((variant, idx) => (
          <Toast className="d-inline-block m-1" bg={variant.toLowerCase()} key={idx}>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body className={variant === 'Dark' && 'text-white'}>
              Hello, world! This is a toast message.
            </Toast.Body>
          </Toast>
        ))}

        <div className="mb-3">
          {/* <label htmlFor="selectToastPlacement">Toast position</label>
          <Form.Select id="selectToastPlacement" className="mt-2" onChange={(e) => setPosition(e.currentTarget.value)}>
            {[
              'top-start',
              'top-center',
              'top-end',
              'middle-start',
              'middle-center',
              'middle-end',
              'bottom-start',
              'bottom-center',
              'bottom-end',
            ].map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </Form.Select> */}
        </div>

        {/* <div aria-live="polite" aria-atomic="true" className="bg-dark position-relative" style={{ minHeight: '240px' }}>
          <ToastContainer className="p-3" position={position} style={{ zIndex: 1 }}>
            <Toast>
              <Toast.Header closeButton={false}>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
          </ToastContainer>
        </div> */}
      </div>
    </>
  );
}

export default StackingExample;
