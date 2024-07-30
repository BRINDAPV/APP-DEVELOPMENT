import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToys } from '../redux/toyActions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button as BootstrapButton, NavDropdown } from 'react-bootstrap';
import { FaHome, FaShoppingCart, FaUser, FaSearch, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPadding } from 'react-icons/md';


function WelcomeHome() {
    const dispatch = useDispatch();
    const toys = useSelector((state) => state.toys);
    const navigate = useNavigate();

    useEffect(() => {
        const toysData = [
            {
                src: 'https://e7.pngegg.com/pngimages/638/700/png-clipart-kids-toys-web-page-early-learning-thumbnail.png',
                name: 'Early Learning Set'
            },
            {
                src: 'https://w7.pngwing.com/pngs/854/15/png-transparent-toy-graphy-little-girl-child-photography-poster-thumbnail.png',
                name: 'Little Girl Doll'
            },
            {
                src: 'https://atlas-content-cdn.pixelsquid.com/assets/942914319736116270/jpeg-600/H12.jpg?modifiedAt=1',
                name: 'Boys Cycle'
            },
            {
                src: 'https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-black-super-car-png-image_11921537.png',
                name: 'Black Super Car'
            },
            {
                src: 'https://i.pinimg.com/originals/9a/54/08/9a5408eea2bf8260709d26e9f86433ac.png',
                name: 'Barbie Dolls'
            },
            {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsBPKN9wLO-2NlY1NPjBCGn1NXjVowSPGH6djAxx_muTWcoDh2Da3CiJ68oo8iOJf1yA&usqp=CAU',
                name: 'Wooden Car'
            },
            {
                src: 'https://atlas-content-cdn.pixelsquid.com/stock-images/girls-kids-bike-child-ZeaDJQ0-600.jpg',
                name: 'Girls Fancy Cycle'
            },
            {
                src: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMjFfcGhvdG9ncmFwaHlfb2ZfYV9yZWFsaXN0aWNfd29vZGVuX3RveXNfaG91c2VfYl9kMTAzNGU4ZC05ZDk4LTRhNWEtOGViNy02NTJjMDViMzgyNGIucG5n.png',
                name: 'Wooden Blocks'
            },
            {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRizJl65gzQWqJAnjSAJV8jek4F65QtbVVBg&s',
                name: 'Teddy Bear'
            },
            {
                src: 'https://i5.walmartimages.com/asr/a77086b4-f38b-42f6-bc92-44730a01db44_1.f5bf3a3a767f3e0c5968a717bed1d656.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
                name: 'Dinosaurs'
            }
        ];

        dispatch(setToys(toysData));
    }, [dispatch]);

    const handleShopNowClick = () => {
        navigate('/login');
    };

    const handleDiscountClick = () => {
        navigate('/discount');
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
                    {/* <span className="ml-2">Toys Kingdom</span> */}
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
                    {/* <h5>Profile</h5> */}
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>

            <div className="row align-items-center shadow-lg p-3 mb-5 bg-white rounded">
                <div className="col-md-6">
                    <img
                        src="https://i0.wp.com/thepointshabibi.com/wp-content/uploads/2019/02/carrefour-myclub-dubai-abudhabi-uae-toys.png?fit=600%2C300&ssl=1"
                        alt="7x4"
                        className="img-fluid"
                        style={{
                            maxWidth: '100%',
                            height: '300px',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                </div>
                <div className="col-md-6 text-center">
                    <h2>Discount Upto 40%</h2>
                    <h1 className="display-4">Toys For Your Babies</h1>
                    <Button variant="contained" onClick={handleDiscountClick}>Discounted Toys</Button>
                </div>
            </div>

            <div className="d-flex flex-column min-vh-100">
                <div>
                    <h3>Trending Toys</h3>
                    <div className="row justify-content-center mt-4">
                        {toys.map((toy, index) => (
                            <div key={index} className="col-2 text-center mb-4">
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '20%',
                                        overflow: 'hidden',
                                        transition: 'transform 0.3s ease-in-out',
                                        margin: '10px auto',
                                        border: '2px solid #007bff'
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                >
                                    <img
                                        src={toy.src}
                                        alt={toy.name}
                                        style={{ width: '170%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <p className="mt-2">{toy.name}</p>
                            </div>
                        ))}
                    </div>
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

export default WelcomeHome;
