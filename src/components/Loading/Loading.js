import React from 'react'
import styled from 'styled-components'
import { HashLoader } from 'react-spinners'

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 120px;
`
const Loading = () => (
  <LoadingDiv>
    <HashLoader size={80} color={'#5993f1'} loading />
  </LoadingDiv>
)

export default Loading
