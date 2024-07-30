import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { Navbar, Nav, Form, FormControl, Button as BootstrapButton, NavDropdown } from 'react-bootstrap';
import { FaHome, FaShoppingCart, FaUser, FaSearch, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DiscountedToy() {
  const [toys, setToys] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/toys') // Adjust the path to your JSON file
      .then(response => response.json())
      .then(data => setToys(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (product) => {
    fetch('http://localhost:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      }),
    })
    .then(response => response.ok ? response.json() : Promise.reject('Failed to add to cart'))
    .then(data => {
      console.log('Product added to cart:', data);
    })
    .catch(error => {
      console.error(error);
      setError(`Failed to add product to cart: ${error}`);

    });
  };
  const handleShare = (toy) => {
    console.log('Shared:', toy);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm mb-6" style={{ width: '100%', padding: 0, position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
        <Navbar.Brand href="/welcome">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7DOLq206yTU18XZB782edF42_2pZJ_1p_2UL72fRpaChBIgUdqMr-ewvx-Tkclrx9QkM&usqp=CAU" // Replace with your logo URL
            alt="App Logo"
            className="d-inline-block align-top"
            style={{
              maxWidth: '70%',
              height: '75px',
              transition: 'transform 0.3s ease-in-out'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.4)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/welcome"><FaHome /> Home</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
            <Nav.Link href="/contact"><FaPhoneAlt /> Contact</Nav.Link>
          </Nav>
          <Form inline className="ml-auto d-flex align-items-center" style={{ paddingRight: '600px' }}>
            <FormControl type="text" placeholder="Search" className="mr-sm-4" />
            <BootstrapButton variant="outline-success"><FaSearch /></BootstrapButton>
          </Form>
          <NavDropdown title={<FaUser />} id="basic-nav-dropdown" align="end">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>

      <div className="container mt-5">
        <h2>Discounted Toys</h2>
        <div className="row">
          {toys.map((toy) => (
            <div className="col-md-4" key={toy.id}>
              <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
                <CardMedia
                  sx={{ height: 400 }}
                  image={toy.image}
                  title={toy.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {toy.name}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    {toy.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="small" onClick={() => addToCart(toy)}>Add to Cart</Button>
                  <Button variant="contained" size="small" onClick={() => handleShare(toy)}>Buy</Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-dark text-white p-4 text-center" style={{ width: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>123 Toy Lane</li>
                <li>Toy City, TC 12345</li>
                <li>Email: info@toywebsite.com</li>
                <li>Phone: (123) 456-7890</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white"><FaFacebookF /></a></li>
                <li><a href="#" className="text-white"><FaTwitter /></a></li>
                <li><a href="#" className="text-white"><FaInstagram /></a></li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <p className="mb-0">&copy; 2024 Toy Website. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
