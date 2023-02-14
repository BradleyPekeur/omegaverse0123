export const sendContactForm = async (data) =>
	fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => {
		if (!res.ok) throw new Error("Failed to send message");
		return res.json();
	});

// This gets called on every request
export async function getServerSideProps(context) {
	// Fetch data from external API
	const emailformcode = sendContactForm();

	console.log(emailformcode);

	// Pass data to the page via props
	return { props: { emailformcode } };
}
