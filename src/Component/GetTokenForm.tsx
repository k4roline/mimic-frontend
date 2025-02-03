import React, {RefObject, useRef} from "react";
import {Box, Button, Container, TextField} from "@mui/material";
import axios from "axios";

export function GetTokenForm(): React.ReactElement {
	const emailRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		const email: string = emailRef.current!.value;
		if (!email) {
			return;
		}
		const url = `${import.meta.env.VITE_MIMIC_SERVER}/token/generate/${email}`;
		axios.post(url)
			.then(onSubmitSuccess)
			.catch(onSubmitError);
	}

	function onSubmitSuccess(): void {

	}

	function onSubmitError(): void {

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
					fullWidth
					inputRef={emailRef}/>
				<Button
					type="submit"
					variant="contained"
					color="secondary"
					sx={{
						mt: 2,
						fontWeight: "bold"
					}}
					fullWidth>
					Submit
				</Button>
			</form>
		</Box>
	</Container>
}
