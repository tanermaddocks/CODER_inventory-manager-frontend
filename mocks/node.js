import { handlers } from "./handlers";
import { setUpServer } from "msw/node";

export const server = setUpServer(...handlers);

