import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X02AboutPageTablet from "./components/X02AboutPageTablet";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|02-about-page-tablet)">
          <X02AboutPageTablet {...x02AboutPageTabletData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-13@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame144Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const founderCardData = {
    rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90@2x.png",
    name: "Jenny Wilson",
    designation: "Designation",
};

const founderCard2Data = {
    rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-1@2x.png",
    name: "Brooklyn Simmons",
    designation: "Designation",
};

const founderCard32Data = {
    rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-2@2x.png",
    name: "Esther Howard",
    designation: "Designation",
};

const founderCard4Data = {
    rectangle90: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-90-3@2x.png",
    name: "Jane Cooper",
    designation: "Designation",
};

const frame165Data = {
    image3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-3-2@2x.png",
    image5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-5-2@2x.png",
    image4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-4-2@2x.png",
    image6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-3-2@2x.png",
    image8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-5-2@2x.png",
    image7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-4-2@2x.png",
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const instagramData = {
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-223@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-409@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-347@2x.svg",
};

const group87Data = {
    facebookAppSymbolProps: facebookAppSymbolData,
    facebookAppSymbolProps2: instagramData,
    twitterProps: twitterData,
};

const footerData = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-3@2x.svg",
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-275@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-108@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-151@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-110@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-111@2x.svg",
    text42: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text3: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    projects: "Projects",
    gallery: "Gallery",
    knowledgeTransfer: "Knowledge Transfer",
    blogs: "Blogs",
    faqs: "FAQ’s",
    group87Props: group87Data,
};

const x02AboutPageTabletData = {
    aboutUs: "About Us",
    rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-4@1x.png",
    text8: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable.",
    whyChooseUs: "Why Choose Us?",
    line55: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-55@1x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-60@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-61@2x.svg",
    place: "Quality",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-62@2x.svg",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-63@2x.svg",
    cost: "Cost",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-64@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-65@2x.svg",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-66@2x.svg",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-67@2x.svg",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-68@2x.svg",
    vector11: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-72@2x.svg",
    vector12: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-73@2x.svg",
    vector13: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-74@2x.svg",
    vector14: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-75@2x.svg",
    vector15: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-76@2x.svg",
    vector16: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-77@2x.svg",
    vector17: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-75@2x.svg",
    vector18: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-79@2x.svg",
    vector19: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-80@2x.svg",
    vector20: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-81@2x.svg",
    vector21: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-82@2x.svg",
    vector22: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-83@2x.svg",
    vector23: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-81@2x.svg",
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-85@2x.svg",
    vector24: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-86@2x.svg",
    vector25: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-87@2x.svg",
    vector26: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-88@2x.svg",
    vector27: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-89@2x.svg",
    vector28: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-90@2x.svg",
    vector29: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-91@2x.svg",
    vector30: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-92@2x.svg",
    vector31: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-93@2x.svg",
    vector32: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-101@2x.svg",
    group: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-102@2x.svg",
    vector33: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-103@2x.svg",
    vector34: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-104@2x.svg",
    vector35: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-105@2x.svg",
    vector36: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-94@2x.svg",
    vector37: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-95@2x.svg",
    vector38: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-96@2x.svg",
    vector39: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-97@2x.svg",
    vector40: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-95@2x.svg",
    vector41: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-99@2x.svg",
    vector42: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-100@2x.svg",
    transparency: "Transparency",
    rectangle72: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-72-1@1x.png",
    place2: "Quality",
    text10: <>Quality for us is not just using expensive brands of raw materials, it mainly involves three key points, <br />Right design. By understanding the geological condition of your site as a prerequisite, we provide the customized design for your homesite by adopting inputs from the soil testing that we perform for each construction site.  <br />Following the right standard operating procedures. Our SOPs ensure we achieve high efficiency, quality outputs, and uniformity of performance.<br />Specific brands of construction material to be used for specific conditions.  Each brand of construction material has its own strengths and weaknesses. We provide suggestions at each stage for specific brands and types of material to be used according to your unique condition.</>,
    rectangle73: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-73-1@1x.png",
    transparenccy: "Transparenccy",
    text11: "We possess third generation business continuity which is a rarity. Which means that you gain decades of collaborative experience to your benefit. Expertise, quality, transparency, reliability and cost effectiveness are why our customers come back to us again and again. We offer a perfect blend of all these factors resulting in deep customer delight. We put the “Smart” in everything that we do. Smarter design, smarter spaces, smarter value. Simply: smarter living. With exciting options and construction plans to choose from, one is certain to be right for you. Yes, other people do some of what we do, but no one does everything in the unique way we do.",
    rectangle70: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-70-1@1x.png",
    cost2: "Cost",
    text12: "When it comes to building a new residential or commercial building, choosing the right partner to bring your vision to life is an important first step. Our experienced Webuildd team has all the expertise, resources, and connections you need to turn inspiration into reality with seamless ease. You don’t have to deal with the hassles of managing complex coordination and multiple resources. Our in-house team has you covered from legal, estimation, site planning, architectural design,",
    rectangle77: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-77@1x.png",
    title: "How it Works?",
    text9: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing. There are many variations passages of Lorem as Ipsums available but the majority have suffered that alterations in that some form by injected humour or randomised words which don’t looks even slightly that believable. If you are Lorem as Ipsum  you need to be sure there isn’t anything as embarrassing. There are many variation of passages Lorem Ipsum available but the majority have suffered that a aalteration in that some form by injected humour or randomised words which don’t look even slightly the believable. If you are Lorem Ipsum you need to be sure there is not the anything of embarrassing. If you are Lorem Ipsums your need to be sure there as isn’t anything embarrassing.",
    founders: "Founders",
    frame144Props: frame144Data,
    founderCardProps: founderCardData,
    founderCard2Props: founderCard2Data,
    founderCardProps2: founderCard32Data,
    founderCard2Props2: founderCard4Data,
    frame165Props: frame165Data,
    footerProps: footerData,
};

