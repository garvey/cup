import React from 'react';
import moment from 'moment';

const Footer = props => {
  var year = moment().year();
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          <div className="grey-text text-lighten-4 right" href="#!">
            © {year} CupMarch
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
