import React from 'react';
import Header from './Header';
import Footer from './Footer';
import header from '../Assets/Images/Header1.png';
import Button from 'react-bootstrap/Button';

export default function Home() {
  const buttonStyle = {
    backgroundColor: '#D9D9D9',
    color: 'black',
    borderRadius: '40px',
  };
  return (
    <>
    <div className='bg'>
      <Header />
      <div className="mt-3" style={{ color: 'white' }}>
      <h1>Welcome to <span style={{ color: '#F8DC7B' }}>SkySync</span></h1>
      <h6>Sun or Storm, Stay informed and in control!</h6>
      <br></br>
      <Button type="submit" style={buttonStyle}><h3>Try Dashboard</h3></Button>
      <br></br><br></br>
      </div>
      <Footer />
      </div>
    </>
  );
}
