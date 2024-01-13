import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineCodepenCircle} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/mahmoud-qasem-368703201/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/mahmoudqasem2001" target='_blank'><BsGithub/></a>
        <a href="https://codepen.io/mahmoudqasem2001" target='_blank'><AiOutlineCodepenCircle/></a>

    </div>
    )
}

export default HeaderSocials