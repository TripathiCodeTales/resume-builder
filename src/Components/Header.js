import React from "react";
import { IoIosMail } from "react-icons/io";
import { TbDeviceMobileFilled } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = ({ data }) => {
  return (
    <div className="header">
      <img src="./logo192.png" alt="dummy img" />
      <div className="detail">
        <h2>
          {data.FirstName} {data.LastName}
        </h2>
        <h5 className="color">Software Engineer</h5>
      </div>
      <div className="basicinfo">
          <a
            href="mailto:{data.email}"
          >
            {data.email}
          </a>
        <span>
          <IoIosMail className="color icon inBlock linked" />
        </span>
        <p style={{marginBottom:"0"}}>
          <span>
          {data.mobile} 
          </span>
          <span>
          <TbDeviceMobileFilled className="color icon inBlock" />
          </span>
        </p>
        <p style={{marginBottom:"0",marginTop:"13px"}}>
          {data.city}, {data.country} <IoLocationSharp className="color icon inBlock" />
        </p>
        <p>
          <a href={`http://www.${data.linkedIn}`}>
            {data.linkedIn}
            <FaLinkedin className="color icon inBlock linked" />
          </a>
        </p>
        <a href={`http://${data.github}`}>
          {data.github} <FaGithub className="color icon inBlock" />
        </a>
      </div>
    </div>
  );
};

export default Header;
