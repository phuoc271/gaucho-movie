import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../index.css';
import logo from '../assets/Remove-bg.ai_1721125597474.png';

function Header({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event) => {
    event.preventDefault(); // Ngăn chặn form submit mặc định
    onSearch(searchValue);
  };

  return (
    <Navbar expand="sm" variant="dark" className="navbar-background">
      <Navbar.Brand href="#"><img src={logo} alt="" className="navbar-logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" className='navbar-link'>Phim lẻ</Nav.Link>
          <Nav.Link href="#" className='navbar-link'>Phim bộ</Nav.Link>
          <NavDropdown title="Thể loại" className='navbar-link' id="basic-nav-dropdown">
            <NavDropdown.Item href="#" className='navbar-link2'>Kinh dị</NavDropdown.Item>
            <NavDropdown.Item href="#" className='navbar-link2'>Tình cảm</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline onSubmit={handleSearch}>
          <FormControl 
            type="text" 
            placeholder="Search" 
            className="mr-sm-2" 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button variant="outline-light" type="submit">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
