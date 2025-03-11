import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";

const Footer = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // In production, this would make an API call to submit the form data
      setSuccessMessage(
        "Thank you for contacting us! We'll get back to you soon."
      );
      setErrorMessage("");
      setFormData({ name: "", email: "", message: "" });

      // Simulate API delay
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      setErrorMessage(
        "There was an error submitting your form. Please try again."
      );
      setSuccessMessage("");

      // Clear error after 5 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <footer className="footer">
      <Container fluid className="bg-dark text-white py-5">
        <Container className="px-md-5">
          <Row className="gx-lg-5">
            {/* Company Section */}
            <Col lg="4" md="6" className="mb-4 mb-md-0">
              <Card className="bg-transparent border-white">
                <CardHeader>
                  <CardTitle className="text-primary">Metatron</CardTitle>
                  <CardText className="text-muted">
                    Team Metatron is an AI startup that provides cutting-edge
                    AI/ML services, as well as web, standalone, and mobile app
                    development using Java, React, and Flutter.
                  </CardText>
                </CardHeader>
                <CardFooter className="border-top-white">
                  <div className="d-flex gap-3">
                    <a
                      href="#"
                      className="text-white text-decoration-none hover-primary"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white text-decoration-none hover-primary"
                    >
                      <i
                        className="fab fa-twitter"
                        style={{ paddingLeft: 5 }}
                      ></i>
                    </a>
                    <a
                      href="#"
                      className="text-white text-decoration-none hover-primary"
                    >
                      <i
                        className="fab fa-linkedin"
                        style={{ paddingLeft: 5 }}
                      ></i>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </Col>

            {/* Contact Section */}
            <Col lg="4" md="6" className="mb-4 mb-md-0">
              <Card className="bg-transparent border-white">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <div className="card-body">
                  <address className="text-muted mb-3">
                    <strong>Address:</strong>
                    <br />
                    Colombo 04,
                    <br />
                    Western Province,
                    <br />
                    Sri Lanka.
                  </address>
                  <p className="mb-2">
                    <strong>Email:</strong> info.mtron.me@gmail.com
                  </p>
                  {/* <p className="mb-2">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p> */}
                </div>
              </Card>
            </Col>

            {/* Services Section */}
            <Col lg="4" md="6" className="mb-4 mb-md-0">
              <Card className="bg-transparent border-white">
                <CardHeader>
                  <CardTitle>Our Services</CardTitle>
                </CardHeader>
                <div className="card-body">
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">AI/ML Solutions</li>
                    <li className="mb-2">Web Development</li>
                    <li className="mb-2">Mobile Apps</li>
                    <li className="mb-2">Java Development</li>
                    <li className="mb-2">React Development</li>
                    <li>Flutter Development</li>
                  </ul>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Copyright Section */}
          <div className="text-center mt-4 pt-3 border-top-white">
            <small className="text-muted">
              &copy; {new Date().getFullYear()} Metatron. All rights reserved.
            </small>
          </div>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
