import React from 'react'
import DashBoardBox from '@/components/DashBoardBox'
import { useGetKipsQuery } from '@/state/api'

const Row1 = () => {
  const { data } = useGetKipsQuery();
  return (
    <>
        <DashBoardBox gridArea="a"></DashBoardBox>
        <DashBoardBox gridArea="b"></DashBoardBox>
        <DashBoardBox gridArea="c"></DashBoardBox>
    </>
  )
}

export default Row1