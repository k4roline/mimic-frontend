import React from "react";
import {Box, Container, Link, Typography} from "@mui/material";
import image from "../assets/images/mimic-chest.svg";
import {Footer} from "../Component/Footer.tsx";

export function ErrorPage(): React.ReactElement {
	return <Container
		maxWidth="lg"
		sx={{
			textAlign: "center",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			minHeight: "100vh"
		}}>
		<Box
			component="img"
			src={image}
			alt="Angry Mimic"
			sx={{
				maxWidth: "256px",
				maxHeight: "256px",
				width: "100%",
				height: "auto"
			}}
		/>
		<Typography variant="h4" sx={{my: 3}}>
			Looks like you fel for the mimic, as this page does not exist
		</Typography>
		<Link href="/" variant="h4">Take me somewhere safe</Link>
		<Footer />
	</Container>
}
