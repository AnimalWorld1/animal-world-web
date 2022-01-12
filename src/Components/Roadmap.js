import React from "react";
import Roadmap1 from "../assets/roadmap.png";
import RoadmapBrd from "../assets/roadMapbrd.webp";
import checktick from "../assets/checktick.webp"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Roadmap() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position:"relative",
        fontSize:'2.75vw',whiteSpace:"nowrap",color:"black"
      }}
    >
      <img className="rimg" src={Roadmap1} alt="roadmap" />
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(253 243 199)', color: '#292929' }}
    contentArrowStyle={{ borderRight: '#f9dc5554' }}
    date="2011 - present"
    iconStyle={{ background: '#292929', color: '#4c0116' }}
    
  >
    <h3 className="vertical-timeline-element-title">Alpha Game Launch</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(253 243 199)', color: '#292929' }}
    contentArrowStyle={{ borderRight: '#f9dc5554' }}
    date="2010 - 2011"
    iconStyle={{ background: '#292929', color: '#4c0116' }}
  >
    <h3 className="vertical-timeline-element-title">Q4 2021</h3>
    <h3 className="vertical-timeline-element-subtitle"> Tree Sale</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(253 243 199)', color: '#292929' }}
    contentArrowStyle={{ borderRight: '#f9dc5554' }}
    date="2008 - 2010"
    iconStyle={{ background: '#292929', color: '#4c0116' }}
  >
    <h3 className="vertical-timeline-element-title">Q1 2021</h3>
    <h3 className="vertical-timeline-element-subtitle">Web Redesign</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(253 243 199)', color: '#292929' }}
    contentArrowStyle={{ borderRight: '#f9dc5554' }}
    date="2010 - 2011"
    iconStyle={{ background: '#292929', color: '#4c0116' }}
  >
    <h3 className="vertical-timeline-element-title">AWC token</h3>
    <h3 className="vertical-timeline-element-subtitle">BSC Compatible</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(253 243 199)', color: '#292929' }}
    contentArrowStyle={{ borderRight: '#f9dc5554' }}
    date="April 2013"
    iconStyle={{ background: '#292929', color: '#4c0116' }}
  >
    <h3 className="vertical-timeline-element-title">Animal Sale</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(253 243 199)', color: '#292929' }}
    contentArrowStyle={{ borderRight: '#f9dc5554' }}
    date="November 2012"
    iconStyle={{ background: '#292929', color: '#4c0116' }}
  >
    <h3 className="vertical-timeline-element-title">Tree Redesign</h3>
  </VerticalTimelineElement>
</VerticalTimeline>
    </div>

    
  );
}

export default Roadmap;
