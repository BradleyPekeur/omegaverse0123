import React, { useState } from "react";

import {
	Button,
	Container,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Text,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import { sendContactForm } from "../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

function EmailContactForm() {
	const toast = useToast();
	const [state, setState] = useState(initState);
	const [touched, setTouched] = useState({});

	const { values, isLoading, error } = state;

	const onBlur = ({ target }) =>
		setTouched((prev) => ({
			...prev,
			[target.name]: true,
		}));

	const handleChange = ({ target }) =>
		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value,
			},
		}));

	const onSubmit = async () => {
		setState((prev) => ({
			...prev,
			isLoading: true,
		}));
		try {
			await sendContactForm(values);
			setTouched({});
			setState(initState);
			toast({
				title: "Message sent.",
				status: "success",
				duration: 2000,
				position: "top",
			});
		} catch (error) {
			setState((prev) => ({
				...prev,
				isLoading: false,
				error: error.message,
			}));
		}
	};
	return (
		<div>
			{" "}
			<Container maxW="450px" mt={12}>
				{/* <Heading className="text-white">Contact</Heading> */}
				{error && (
					<Text color="red.300" my={4} fontSize="xl">
						{error}
					</Text>
				)}
				<FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
					<FormLabel className="text-white">Name</FormLabel>
					<Input
						className="text-white"
						type="text"
						name="name"
						errorBorderColor="red.300"
						value={values.name}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<FormErrorMessage>Required</FormErrorMessage>
				</FormControl>

				<FormControl
					isRequired
					isInvalid={touched.email && !values.email}
					mb={5}
				>
					<FormLabel className="text-white">Email</FormLabel>
					<Input
						className="text-white"
						type="email"
						name="email"
						errorBorderColor="red.300"
						value={values.email}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<FormErrorMessage>Required</FormErrorMessage>
				</FormControl>

				<FormControl
					isRequired
					isInvalid={touched.subject && !values.subject}
					mb={5}
				>
					<FormLabel className="text-white">Subject</FormLabel>
					<Input
						className="text-white"
						type="text"
						name="subject"
						errorBorderColor="red.300"
						value={values.subject}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<FormErrorMessage>Required</FormErrorMessage>
				</FormControl>

				<FormControl
					isRequired
					isInvalid={touched.message && !values.message}
					mb={5}
				>
					<FormLabel className="text-white">Message</FormLabel>
					<Textarea
						className="text-white"
						type="text"
						name="message"
						errorBorderColor="red.300"
						rows={4}
						value={values.message}
						onChange={handleChange}
						onBlur={onBlur}
					/>
					<FormErrorMessage>Required</FormErrorMessage>
				</FormControl>
				<Button
					variant="outline"
					colorScheme="blue"
					disabled={
						!values.name || !values.email || !values.subject || !values.message
					}
					onClick={onSubmit}
					isLoading={isLoading}
				>
					Submit
				</Button>
			</Container>
		</div>
	);
}

export default EmailContactForm;
