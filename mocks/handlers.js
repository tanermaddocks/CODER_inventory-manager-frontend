import { http, HttpResponse } from "msw";

// Array of interceptors
export const handlers = [
  http.get("http://localhost:3000/health", () => {
    return HttpResponse.json({ status: "OK - mocked!" });
  })
];