import React from "react";
import PlatformPoint from "../components/PlatformPoint";
import { FloatButton } from 'antd';

const Goals = () => {
  return (
    <div className="goals">
      <div> 
          <FloatButton.BackTop />
        </div>
      <h2>OUR GOALS</h2>
      <div className="goals--grid">
        <PlatformPoint
          title="BEARCAT WELLNESS"
          subtitle="Nurturing Wellbeing, Inspiring Lives"
          icon="spa"
          color="red"
          initiatives={[
            {
              title: "Bearcats Counseling Expansion",
              content:
                "Introduce additional counseling services and peer support groups for UC students' mental health.",
            },
            {
              title: "Bearcats Zen Zone",
              content:
                "Create designated relaxation zones across campus equipped with calming décor, comfortable seating, and guided meditation audio for students to unwind between classes.",
            },
            {
              title: "The UC Podcast",
              content:
                "Produce a student-run podcast discussing mental health topics, featuring personal stories, expert interviews, student artists, and tips for managing stress, promoting mental health awareness.",
            },
            {
              title: "Letter Writing Initiative",
              content:
                "Write letters home, either domestic or international, during the holiday season and we'll post it for you.",
            },
            {
              title: "UC Dance Therapy Workshops",
              content:
                "Integrate expressive movement and music for emotional release and stress reduction, collaborating with UC Dhadak and K-Pop Clubs.",
            },
          ]}
        />
        <PlatformPoint
          title="EQUITY AND INCLUSION"
          subtitle="Fostering Unity, Embracing Diversity"
          icon="diversity_1"
          color="yellow"
          initiatives={[
            {
              title: "DE&I Certification",
              content:
                "Host fun and exciting training on an annual basis for all organizations on campus.",
            },
            {
              title: "Bearcats Unity Mural Project",
              content:
                "Engage students in creating a large-scale mural highlighting unity, inclusivity, and diversity, symbolizing the strength of the UC community's diversity.",
            },
            {
              title: "Bearcats Storytelling Series",
              content:
                "Establish a storytelling platform where students share personal narratives and experiences related to diversity, creating a platform to amplify diverse voices within the UC community.",
            },
            {
              title: "UC DE&I VR Pods",
              content:
                "Set up virtual reality pods on campus offering immersive experiences that simulate diverse cultural environments.",
            },
            {
              title: "LGBTQ+ Community Support",
              content:
                "Advocate for a dedicated fund for situations such as disownment, etc. ",
            },
          ]}
        />
        <PlatformPoint
          title="CAREER DEVELOPMENT"
          subtitle="Empowering Futures, Igniting Careers"
          icon="handshake"
          color="blue"
          initiatives={[
            {
              title: "UC Career Kickstart",
              content:
                "CPT/OPT Workshop, Career Fair Walkthroughs, etc. Increase awareness about Bearcats Promise Career Studio.",
            },
            {
              title: "Community Connects",
              content:
                "Database with current co-op students willing to assist other students, create YouTube describing the process of getting a co-op at a company.",
            },
            {
              title: "Expand Research Opportunities",
              content:
                "Build upon the current research website to incorporate roles for specific professors.",
            },
            {
              title: "Leadership Week",
              content:
                "Conduct a series of leadership-focused events, including workshops, networking dinners, and cultural leader roundtables.",
            },
            {
              title: "Tax Classes",
              content:
                "Provide educational opportunities for understanding taxes and financial literacy.",
            },
          ]}
        />
      </div>
      <br></br>
      <div className="goals--grid2">
        <PlatformPoint
          title="CAMPUS RESOURCES"
          subtitle="Advancing Through Innovative Infrastructure Solutions"
          icon="foundation"
          color="mint"
          initiatives={[
            {
              title: "Advance Co-sponsorships",
              content:
                "Foster collaboration opportunities among campus organizations.",
            },
            {
              title: "International Student Advocacy",
              content:
                "Address issues like student worker pay conditions and storytelling with IJPC.",
            },
            {
              title: "Housing Insecurity Advocacy",
              content:
                "Address the gap between wages and the cost of living for students.",
            },
            {
              title: "Inclusive Restroom Facilities",
              content:
                "Ensuring gender-neutral and accessible restroom facilities on campus.",
            },
          ]}
        />
        <PlatformPoint
          title="SAFETY & ACCESSIBILTY"
          subtitle="Our Pledge to Safety and Accessibility"
          icon="diversity_3"
          color="salmon"
          initiatives={[
            {
              title: "Transparent UC Governance",
              content:
                "Ensuring openness in decision-making processes and policies.",
            },
            {
              title: "Sex Education",
              content:
                "Partner with local bars for increased safety (cup condoms + angel shots).",
            },
            {
              title: "Enhanced Disability Services",
              content:
                "Expanding resources and accommodation for students with disabilities.",
            },
            {
              title: "UC Volunteer Day",
              content:
                "UC Students would go to high schools and work with a local school to give an overview of why they attended UC. Meanwhile, college students would learn about different job routes within education.",
            },
          ]}
        />
        <PlatformPoint
          title="TELL US WHAT YOU NEED!"
          subtitle="We're here to listen to you!"
          icon="social_leaderboard"
          color="light_yellow"
          initiatives={[
            {
              title: "Communicate for Commuter",
              content:
                "Implement priority registration and unique time parking passes for UC Parking Services.",
            },
            {
              title: "SAC Involvement",
              content:
                "Increase funding to fly in alumni for Bearcat connections.",
            },
            {
              title: "PowerUp Carts",
              content:
                "Implement PowerUp Carts for easy device charging.",
            },
            {
              title: "Send in more initiatives!",
              content:
                "We've collected these initiatives so far from talking to different organizations. Send in more to us via our social media.",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Goals;
