import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import faBriefcase from "@fortawesome/fontawesome-free-solid/faBriefcase";
import faMapMarkerAlt from "@fortawesome/fontawesome-free-solid/faMapMarkerAlt";
import faGraduationCap from "@fortawesome/fontawesome-free-solid/faGraduationCap";
import faBirthdayCake from "@fortawesome/fontawesome-free-solid/faBirthdayCake";

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
                <span>Offline shopping analytics</span>
              </h5>
              <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Remotely</div>
              <p>
                PHP 7, MySQL, Symfony 3, Elasticsearch, Redis
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
              <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Remotely</div>
              <p>
                PHP webinars, checking student's tasks.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017 - 2018"
              iconStyle={{ background: '#99CCFF', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} className="experience-icon" />}
            >
              <h4>Senior PHP Developer</h4>
              <h5>
                <a href="https://www.aventusgroup.com/" target="_blank">Aventus Group</a>
                <span>Financial service</span>
              </h5>
              <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Lithuania, Vilnius</div>
              <p>
                PHP 7, MySQL, Symfony 3/4
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 - 2017"
              iconStyle={{ background: '#99CCFF', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} className="experience-icon" />}
            >
              <h4>DevOps, PHP Team Lead</h4>
              <h5>
                <a href="https://payever.de/" target="_blank">Payever</a>
                <span>An open commerce platform</span>
              </h5>
              <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Remotely</div>
              <p>
                PHP 5/7, Symfony 2/3, MySQL, PHPUnit, Behat, Elasticsearch, Docker, Kubernetes, Capistrano
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2015 - 2016"
              iconStyle={{ background: '#99CCFF', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} className="experience-icon" />}
            >
              <h4>Senior PHP Developer</h4>
              <h5>
                <a href="https://www.lazada.com/" target="_blank">Lazada (Alibaba)</a>
                <span>The number-one online shopping and selling destination in Asia</span>
              </h5>
              <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Hồ Chí Minh, Vietnam</div>
              <p>
                PHP 5/7, Symfony 2/3, MySQL, PHPUnit, Behat, Elasticsearch, Docker, Kubernetes, Capistrano
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2013 - 2015"
              iconStyle={{ background: '#99CCFF', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} className="experience-icon" />}
            >
              <h4>PHP Team Lead</h4>
              <h5>
                <a href="https://ru.wikipedia.org/wiki/Enter_%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D0%BE%D0%B9" target="_blank">Enter</a>
                <span>Multichannel retail company</span>
              </h5>
              <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Moscow, Russia</div>
              <p>
                PHP 5, sphinxseach, Zend Framework 1, Symfony 2, Capistano, PostgresSQL, MySQL
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2013"
              iconStyle={{ background: '#99CCFF', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} className="experience-icon" />}
            >
              <h4>PHP/JS Developer</h4>
              <h5>
                <a href="http://www.avenuemedia.ru/" target="_blank">Enter</a>
                <span>Web Studio.</span>
              </h5>
              <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Moscow, Russia</div>
              <p>
                PHP 5, MySQL, MSSQL Capistrana, sphinxsearch
              </p>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2002 - 2008"
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faGraduationCap} className="education-icon" />}
            >
              <h5>
                <a href="http://misis.ru/" target="_blank">MISIS</a>
                <span>National University of Science and Technology</span>
              </h5>
              <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Moscow, Russia</div>
              <p>
                Material sience, maths
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="1999 - 2002"
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faGraduationCap} className="education-icon" />}
            >
              <h5>
                <a href="http://s28.zp.ua/" target="_blank">Gymnasium 28</a>
              </h5>
              <div className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> Zaporozhye, Ukraine</div>
            </VerticalTimelineElement>


            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBirthdayCake} className="experience-icon" />}
            />
          </VerticalTimeline>
        </div>
      </div>
    )
  }
}
