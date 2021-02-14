
import React from 'react';
import './index.css'

class FooterLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <ul className="footerSection">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Term And Condition</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Collection Statment</a>
                    </li>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li>
                        <a href="#">Manage Account</a>
                    </li>
                </ul>
            </>
        )
    }
}

export default FooterLayout;