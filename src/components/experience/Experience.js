import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBriefcase from "@fortawesome/fontawesome-free-solid/faBriefcase";
import faMapMarkerAlt from "@fortawesome/fontawesome-free-solid/faMapMarkerAlt";

import './Experience.css';
// https://stephanemonnot.com/en/resume.html
// https://github.com/stephane-monnot/react-vertical-timeline/tree/v2.1.3
// https://codyhouse.co/gem/vertical-timeline/

export default class Experience extends React.Component {
  render() {
    return (
      <div id="experience">
        <div className="experience-content">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} className="experience-icon" />}
            >
              <h4>Software Engineer</h4>
              <h5>
                <a href="https://snapcart.global/" target="_blank" className="text-primary">Snapcart</a>
                <span className="text-muted">Offline shopping analytics</span>
              </h5>
              <div className="text-warning location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Remotely</div>
              <p>
                PHP, MySQL, Symfony 3
                <br />
                AWS, Docker, Konga
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} className="experience-icon" />}
            >
              <h4>PHP Expert</h4>
              <h5>
                <a href="https://netology.ru/" target="_blank">Netology</a>
                <span>Internet University</span>
              </h5>
              <div className="text-warning location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Remotely</div>
              <p>
                PHP webinars, checking student's tasks.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017 - 2018"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} className="experience-icon" />}
            >
              <h4>Senior PHP Developer</h4>
              <h5>
                <a href="">Aventus Group</a>
                <span>Financial service</span>
              </h5>
              <div className="text-warning location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Lithuania, Vilnius</div>
              <p>
                PHP, MySQL, Symfony 3/4
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<faFacebook />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<faFacebook />}
            >
              <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
              <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
              <p>
                Strategy, Social Media
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<faFacebook />}
            >
              <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
              <h4 className="vertical-timeline-element-subtitle">Certification</h4>
              <p>
                Creative Direction, User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<faFacebook />}
            >
              <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
              <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
              <p>
                Creative Direction, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<faFacebook />}
            />
          </VerticalTimeline>
        </div>
      </div>
    )
  }
}
