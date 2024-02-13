import React from "react";
import BannerImg from "../images/WithBearcat.jpg";
import Karen from "../images/Karen.JPG";
import Dev from "../images/Dev.png";
import { FloatButton } from 'antd';

const About = () => {
  return (
    <div className="about">
      <div> 
          <FloatButton.BackTop />
        </div>
      <div className="about--together">
        <h2>ABOUT US</h2>
        <div className="img-banner-container">
          <img
            className="img-banner"
            src={BannerImg}
            alt="Dev and Karen with the Bearcat Bench"
          />
        </div>
        <h3>
          "Embracing our journey at UC, we've devoted ourselves to the ceaseless pursuit of 
        enhancing student life, and our mission is far from complete!"
        </h3>
        <p className="about text-wall">
        As representatives of the University Student Government, our commitment revolves 
        around serving YOU, the heartbeat of our student body. Our vision is to redefine the 
        student government experience, fostering unity among students and fostering collaboration 
        across the entire university landscape.<br />
          <br />
          Drawing inspiration from successful student 
          organizations, we aim to facilitate a dynamic environment for hosting events, initiatives, 
          and programming by seamlessly integrating multiple groups.Your voice is our guiding force! 
          Stay tuned for enhanced feedback options and the unveiling of a student dashboard—an 
          interactive space where you can pose questions, share suggestions, and amplify your 
          voice for us to effectively communicate with the administration. 
          Leveraging established connections with deans across the university, we're excited to 
          host monthly town halls, bridging the gap between you and the UC administration.
          <br />
          <br />
          Our commitment goes beyond words; it's a tangible promise to the students of UC. 
          We understand that actions speak louder than words. Every goal we've set is crafted 
          with YOU in mind, addressing the unique needs and expectations of the diverse student 
          body. Our dedication to the success of our peers has been unwavering, and rest assured, 
          we have no intention of slowing down. Together, let's make UC an even better community 
          for all. Go Bearcats!
        </p>
      </div>
      <div className="about--individuals">
        <div className="about--individual">
          <img
            src={Dev}
            className="about--individual-img"
            alt="Devansh Portrait"
          />
          <span>
            <p>PRESIDENTIAL CANDIDATE</p>
            <h2>DEVANSH SAXENA</h2>
            <p>Mechanical Engineering</p>
            <p>Class of 2025</p>
            <br />
            <p className="about--individual-description">
            Devansh Saxena, or Dev, is a dynamic 4th-year mechanical engineering major and a mathematics minor at 
            the University of Cincinnati, originating from Bangalore, India, and proudly embracing 
            Cincinnati as his second home. He's also pursuing his MBA alongside his Bachelor's degree 
            through the ACCEND Program.Beyond his academic pursuits, Dev is on a multifaceted journey, 
            blending technical expertise with a passion for leadership, community building, and global 
            perspectives.
            <br />
      
              <br />
              From the inception of his college career, Dev has been deeply ingrained in campus life, 
              contributing his skills and energy to various organizations. His roles span from CEAS 
              Ambassadors and Tribunal to being a guiding force at ROAR Tour Guides, TEDxUCincinnati, 
              Kesem, and Student Government. Dev's impact resonates in his roles as a Student 
              Orientation Leader and a Resident Advisor. 
              <br/>
              <br/>
              Throughout his diverse involvements, Dev has consistently championed inclusivity, acted 
              as a voice for others, and spearheaded positive change within the UC community. Devansh's journey 
              is a testament to his unwavering dedication to transforming UC for the better. As he continues 
              to evolve both personally and professionally, his resilient spirit and commitment to building 
              a thriving community underscore the essence of the Bearcat spirit.
              <br/>

            </p>
          </span>
        </div>
        <div className="about--individual">
          <img
            src={Karen}
            className="about--individual-img"
            alt="Karen Portrait"
          />
          <span>
            <p>VICE PRESIDENTIAL CANDIDATE</p>
            <h2>KAREN VASQUEZ PEREZ</h2>
            <p>Early Childhood Education</p>
            <p>Class of 2025</p>
            <br />
            <p className="about--individual-description">
            As a first-generation Latina, Karen has encountered moments of doubt about her 
            place and value at the university. However, she always recalls her mother's 
            encouraging words, "échale ganas mija," which translates to "you can do it, 
            daughter." Now in her third year, studying early childhood education, 
            she has developed a deep understanding of the importance of viewing everything 
            through an equitable lens.

 <br />
              <br />In her role as the education chair for CECH tribunal, she has 
              spearheaded various initiatives, including the student teaching 
              initiative that advocates for paid student teaching at UC. Since the 
              beginning of her university journey, she has served on the executive 
              board for Latinx en Acción (LEA), contributing to organizing events 
              centered around the four main pillars of advocacy, community service, 
              education, and leadership. These events include Hispanic Volunteer Day, 
              Latinx Heritage Month, and the Rafael Rennella Banquet.

 <br />
              <br />
              Currently, she holds the position of member-at-large for Sigma Phi, 
              a women's honorary, and serves as a mentor for both Latinx Mentorship 
              and UC BIPOC Teacher Pathway. Through her impactful experiences with 
              these organizations, she aspires to bring a more equitable lens to 
              student government.
              <br /> <br />
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
