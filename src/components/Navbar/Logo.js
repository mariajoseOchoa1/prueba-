// Logo.js
import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"
import LogoUni from '../../svg/LogoUni'

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 90px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 36px;
  }
`
const Logo = () => {
  

  return (
    <LogoWrap as={Link} to="/">
      <LogoUni/>
    </LogoWrap>
  )
}

export default Logo