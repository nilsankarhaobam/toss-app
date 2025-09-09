import React from 'react';

const Footer = () => {
  return (
    <div>
        {/* <!-- Footer --> */}
        <footer className="footer p-10 bg-neutral text-neutral-content grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <nav className="mx-auto">
            <h6 className="footer-title">Services</h6> 
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            </nav> 
            <nav className="mx-auto">
            <h6 className="footer-title">Company</h6> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            </nav> 
            <nav className="mx-auto">
            <h6 className="footer-title">Legal</h6> 
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            </nav>
            <nav className="mx-auto">
            <h6 className="footer-title">More</h6> 
            <a className="link link-hover">FAQ</a>
            <a className="link link-hover">Support</a>
            </nav>
        </footer>
    </div>
  );
}

export default Footer;
