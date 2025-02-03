import "../assets/styles/WelcomePage.css";
import {ReactElement} from "react";
import {Container, Typography} from "@mui/material";
import {Footer} from "../Component/Footer.tsx";
import {GetTokenForm} from "../Component/GetTokenForm.tsx";

export function WelcomePage(): ReactElement {
	return <Container maxWidth="lg" sx={{textAlign: "center", my: 3}}>
		<Typography variant="h3">Mimic</Typography>
		<Typography variant="h4">#1 for mock data generation</Typography>
		<Typography
			variant="h4"
			className="welcome-page-header"
			sx={{ textAlign:"start"}}>
			Generate a token
		</Typography>
		<Typography
			component="p"
			sx={{
				textAlign: "start",
				mt: 2
			}}>
			You need a token to authenticate your requests. Submit your email to get one!
		</Typography>
		<GetTokenForm />
		<Footer />
	</Container>;
}
