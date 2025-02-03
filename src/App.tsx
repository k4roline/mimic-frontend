import {WelcomePage} from "./Page/WelcomePage.tsx";
import {ReactElement} from "react";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router";
import {ErrorPage} from "./Page/ErrorPage.tsx";

function App(): ReactElement {
	const darkTheme = createTheme({
		palette: {
			mode: "dark",
			secondary: {
				main: "#9132a8",
				contrastText: "#fff"
			}
		},
	});

	return <ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<Routes>
			<Route path="/" element={<WelcomePage />} />
			<Route path="/error" element={<ErrorPage />} />
		</Routes>
	</ThemeProvider>
}

export default App
