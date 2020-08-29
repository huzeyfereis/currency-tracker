import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
  margin-bottom: 5em;
  margin-top: 1em;
`

const Container = (props) => {
  return <Wrapper>{props.children}</Wrapper>
}

export default Container
