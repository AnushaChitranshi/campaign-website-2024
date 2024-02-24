import React from "react";
import { FloatButton } from 'antd';
import Support1 from "../images/Support-1.png"
import Support2 from "../images/Support-2.png"
import Support3 from "../images/Support-3.png"
import Support4 from "../images/Support-4.png"
import Support5 from "../images/Support-5.png"
import Support6 from "../images/Support-6.png"

const Support = () => {
    return (
        <div className="support">
             <div>
                <FloatButton.BackTop />
            </div>
            <h2>OUR SUPPORTERS</h2>
            <div className="support-grid">
                <img className="support-card" src={Support1} alt="Testimonial"/>
                <img className="support-card" src={Support2} alt="Testimonial"/>
                <img className="support-card" src={Support3} alt="Testimonial"/>
                <img className="support-card" src={Support4} alt="Testimonial"/>
                <img className="support-card" src={Support5} alt="Testimonial"/>
                <img className="support-card" src={Support6} alt="Testimonial"/>
            </div>
        </div>
    )
}

export default Support;