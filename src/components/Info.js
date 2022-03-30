import {React, useState} from 'react'
// import Button from 'react-bootstrap/Button'

import Button from "@mui/material/Button";
import Modal from 'react-bootstrap/Modal'
import Link from '@mui/material/Link';

const Info = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="row">
        <div className="modal-button-container d-flex justify-content-center ">
            <Button variant="contained" onClick={handleShow}>
                Help!
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <h4 className="modal-section-header">What is this?</h4>
            </Modal.Header>
            <Modal.Body className="modal-info">
                <div className="main-info">
                    <h5>This tool is based on the 50/30/20 budget rule:</h5>
                    <ul>
                        <li>
                            50% of your income: needs. This portion of your budget should cover necessary costs, such as:
                            <ul className="example-expenses">
                                <li>Rent/Mortgage</li>
                                <li>Car payments</li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            30% of your income: wants. Wants are the fun stuff; things you don't require, but desire. Examples include:
                            <ul className="example-expenses">
                                <li>Monthly subscriptions</li>
                                <li>Meals out</li>
                                <li>Travel</li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            20% of your income: savings. This is the amount you are aiming to save, ideally for future spending, at the least. Examples for what to save money for include:
                            <ul className="example-expenses">
                                <li>Emergency fund</li>
                                <li>School</li>
                                <li>Property purchase</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <h4 className="modal-section-header">How do I use this?</h4>
                <hr />
                <ol>
                    <li>
                        Enter your Annual Income&nbsp;
                        <span className="extra-info">
                        (after-tax preferred for more accuracy - you can calculate this using&nbsp;
                        <Link href="https://smartasset.com/taxes/paycheck-calculator#kN1QYbuC7j" underline="hover">this tool</Link>.)&nbsp;
                        {/* <a href="https://smartasset.com/taxes/paycheck-calculator#kN1QYbuC7j">this tool</a>.)&nbsp; */}
                        </span>
                        This will calculate your monthly budget according to the 50/30/20 budget rule.
                    </li>
                    <br />
                    <li>
                        Add your monthly expenses and categorize each expense as a "need" or "want." This will update your monthly budget amounts accordingly.
                    </li>
                    <br />
                    <li>
                        Your overall savings is a combination of Savings and any leftover money from "Wants" or "Needs."
                    </li>
                    <br />
                    <li>
                        Use the <span style={{color: "red"}}>Reset</span> button to clear everything and start over.
                    </li>
                    <br />
                    <li>
                        Do as you please with this information.
                    </li>
                </ol>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    </div>
    </>
  )
}

export default Info