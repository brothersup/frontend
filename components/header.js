import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { getToken, verifyToken } from '../src/utils';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token && verifyToken(token)) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>lolgle</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
      <Nav className="ml-auto">
        <Link href="/board" passHref>
          <Nav.Link>board</Nav.Link>
        </Link>
        {loggedIn ? (
          <Link href="/signout" passHref>
            <Nav.Link>sign out</Nav.Link>
          </Link>
        ) : (
          <>
            <Link href="/signup" passHref>
              <Nav.Link>sign up</Nav.Link>
            </Link>
            <Link href="/signin" passHref>
              <Nav.Link>sign in</Nav.Link>
            </Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
