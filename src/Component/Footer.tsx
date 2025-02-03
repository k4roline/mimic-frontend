import React from "react";
import {Box, Link, Typography} from "@mui/material";

export function Footer(): React.ReactElement {
	return <Box
		component="footer"
		sx={{textAlign: "center", color: '#88a2ad', mt: 3}}>
		<Typography variant="body2">
			© Karolina Fryta 2025. Usage and distribution allowed under {' '}
			<Link href="https://gitlab.com/mimic-spring/mimic/-/blob/main/LICENSE">
				Creative Commons Attribution-ShareAlike 4.0 International Public License
			</Link>
		</Typography>
	</Box>
}
