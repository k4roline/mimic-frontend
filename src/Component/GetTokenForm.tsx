import React, {RefObject, useRef, useState} from "react";
import {Box, Button, Container, TextField} from "@mui/material";
import {validateEmail} from "../Service/ValidationService.tsx";
import axios from "axios";

export function GetTokenForm(): React.ReactElement {
	const emailRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
	const [buttonColor, setButtonColor] = useState<"secondary" | "success" | "error">("secondary");
	const [buttonText, setButtonText] = useState<string>("Submit");
	const [inputHelperText, setInputHelperText] = useState<string>("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		const email: string = emailRef.current!.value;
		if (!validateEmail(email)) {
			onSubmitError();
			setInputHelperText("Enter valid email");
			return;
		}
		const url = `${import.meta.env.VITE_MIMIC_SERVER}/token/generate/${email}`;
		axios.post(url)
			.then(onSubmitSuccess)
			.catch(onSubmitError);
	}

	function onSubmitSuccess(): void {
		setButtonColor("success");
		setButtonText("Email sent successfully")
	}

	function onSubmitError(): void {
		setButtonColor("error");
		setButtonText("Try again");
	}

	return <Container maxWidth="xs">
		<Box>
			<form onSubmit={handleSubmit}>
				<TextField
					type="email"
					name="get-token-email"
					label="Email"
					placeholder="example@example.com"
					variant="standard"
					color="secondary"
					helperText={inputHelperText}
					fullWidth
					required
					inputRef={emailRef}/>
				<Button
					type="submit"
					variant="contained"
					color={buttonColor}
					sx={{
						mt: 2,
						fontWeight: "bold"
					}}
					fullWidth>
					{buttonText}
				</Button>
			</form>
		</Box>
	</Container>
}
