import React, { useRef, useState } from "react";
import { login, logout, useAuth } from "./firebase";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import '../inc/login.css'



export function Login() {
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogin() {
        setLoading(true);
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("Password or email is incorrect");
        }
        setLoading(false);
    }

    // function Logout() {
    //     const [loading, setLoading] = useState(false);
    //     const currentUser = useAuth();

        async function handleLogout() {
            setLoading(true);
            try {
                await logout();
            } catch {
                alert("Error!");
            }
            setLoading(false);
        }
    

        return (

            <Container >
                <h1 id="headerL" className="shadow-sm text-sucess mt-5 p-3 text-center rounded ">Login</h1>
                <Row>
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded lg">
                        <Form className="rounded p-4 p-sm-3" >
                            <Form.Group className="mb3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email"
                                    ref={emailRef} />
                            </Form.Group >
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password"
                                    ref={passwordRef} />
                            </Form.Group>
                            <br />
                            <Button disabled={loading || currentUser} onClick={handleLogin} type="submit" className="btn btn-block btn-lg btn-primary" >Login</Button>
                            <Button id ="logoutbutton" disabled={loading || !currentUser} onClick={handleLogout} type="submit" className="btn btn-block btn-lg btn-primary" >logout</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

