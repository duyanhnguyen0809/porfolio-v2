import React from "react";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  { path: "https://www.linkedin.com/in/duy-anh-nguyen-004b6a253/", name: <RiLinkedinFill /> },
  { path: "https://github.com/duyanhnguyen0809/", name: <RiGithubFill /> },
  { path: "https://www.facebook.com/chopp8999", name: <RiFacebookFill /> },
  { path: "https://www.instagram.com/duyanhhh_/", name: <RiInstagramFill /> },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
