import React from 'react'
import DashBoardBox from '@/components/DashBoardBox'
import { Box } from '@mui/material'
import { ResponsiveContainer } from 'recharts'
import BoxHeader from '@/components/BoxHeader'

const Row3 = () => {
  return (
    <>
        <DashBoardBox gridArea="g">
          <BoxHeader title="Product List" subtitle="" sideText="+4%" />
          <ResponsiveContainer width={"100%"} height={"80%"}>
            <Box sx={{ width: "100%", height: "100%" }}>
              <Box sx={{ width: "100%", height: "100%" }}>
                <Box sx={{ width: "100%", height: "100%" }}>
                  <Box sx={{ width: "100%", height: "100%" }}></Box>
                </Box>
              </Box>
            </Box>
          </ResponsiveContainer>
        </DashBoardBox>
        <DashBoardBox gridArea="h"></DashBoardBox>
        <DashBoardBox gridArea="i"></DashBoardBox>
        <DashBoardBox gridArea="j"></DashBoardBox>
    </>
  )
}

export default Row3