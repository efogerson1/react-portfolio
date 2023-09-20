import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <footer>
            <Row>
                <Col md="8" id="signature">
                    <h3>Website created by Christian Smith</h3>
                </Col>
                <Col md="4">
                    <ul>
                        <li>
                            <SocialIcon target={'_blank'} url="https://github.com/efogerson1" fgColor='#FAF0CA' bgColor='#EE964B' style={{ height: 25, width: 25 }}/>
                        </li>
                        <li>
                            <SocialIcon target={'_blank'} url="https://www.linkedin.com/in/eric-fogerson-121a061a5/" fgColor='#FAF0CA' bgColor='#EE964B' style={{ height: 25, width: 25 }}/>
                        </li>
                    </ul>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;