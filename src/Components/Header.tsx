import { Box,Typography } from "@mui/material"
export default function Header({title,subtitle}:{title:string,subtitle:string}) {
  return (
    <div> 
          <Box sx={{p:1}}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              letterSpacing: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "text.secondary", mt: 0.5 }}
          >
           {subtitle}
          </Typography>
        </Box>
    </div>
  )
}
