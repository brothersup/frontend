import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import { AuthContext } from '../src/utils/authProvider';
import { getPayload } from '../src/utils/auth';

const Header = () => {
  const [user, setUser] = useState(null);
  const { token, isValid, signout } = useContext(AuthContext);

  useEffect(() => {
    if (token && isValid) {
      const payload = getPayload(token);
      setUser({
        id: payload.id,
        name: payload.name,
        email: payload.email,
      });
    }
  }, [token, isValid]);

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm" fixed="top">
      <Link href="/" passHref>
        <Navbar.Brand>lolgle</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form>
          <div className="w-100 d-flex">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </div>
        </Form>
        <Nav className="ml-auto">
          <Link href="/champ" passHref>
            <Nav.Link>챔피언정보</Nav.Link>
          </Link>
          <Link href="/freeboard" passHref>
            <Nav.Link>자유게시판</Nav.Link>
          </Link>
          {token && isValid && user ? (
            <NavDropdown bg="dark" alignRight title={`${user.name}`} id="responsive-nav-dropdown">
              <Link href="/profile" passHref>
                <NavDropdown.Item>정보 수정</NavDropdown.Item>
              </Link>
              <NavDropdown.Item href="#">회원 탈퇴</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={signout}>sign out</NavDropdown.Item>
            </NavDropdown>
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
