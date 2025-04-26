import { render, screen } from "@testing-library/react";

import ApiHealthWidget from "../src/components/ApiHealthCheck.jsx";
import { test, expect, vi } from "vitest";

test("Health check widget sees the API health route", async () => {
	let renderResult = render(<ApiHealthWidget />);

	vi.waitFor(() => {
    let healthCheckTextElement = screen.getByText("OK");

		expect(healthCheckTextElement).toBeInTheDocument();
	});

});



// test("Health check widget sees the API health route", async () => {
// 	let renderResult = render(<ApiHealthWidget />);

// 	let healthCheckTextElement = screen.getByText("ERROR");

// 	expect(healthCheckTextElement).toBeInTheDocument();
// });