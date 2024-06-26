/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { Link } from "react-router-dom"
import { Box, Typography, useTheme } from "@mui/material"
import FlexBetween from "@/components/FlexBetween"
import PixIcon from '@mui/icons-material/Pix';

const NavBar = () => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard")

  return (
    <FlexBetween mb={"0.5rem"} padding={"0.4rem 0rem"} color={palette.grey[300]}>
        <FlexBetween>
            <PixIcon sx={{ fontSize: "28px"}} />
            <Typography variant="h4" fontSize={"16px"}>
                Broke College Student
            </Typography>
        </FlexBetween>

        <FlexBetween gap={"2rem"}>
            <Box sx={{"&:hover": { color: palette.primary[100]}}}>
            <Link 
                to={"/"}
                onClick={() => setSelected("dashboard")}
                style={{textDecoration: "inherit", color: selected === "dashboard" ? "inherit" : palette.grey[700]}}>
                    dashboard </Link>
            </Box> 
            <Box sx={{"&:hover": { color: palette.primary[100]}}}>
            <Link 
                to={"/predictions"}
                onClick={() => setSelected("predictions")}
                style={{textDecoration: "inherit", color: selected === "predictions" ? "inherit" : palette.grey[700]}}>
                    predictions Page </Link>
            </Box> 
        </FlexBetween>
    </FlexBetween>
  )
}

export default NavBar