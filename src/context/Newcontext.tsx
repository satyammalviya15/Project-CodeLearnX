import { createContext } from "react";
import type { NewContextType } from "../types"; // Adjust path accordingly

const NewContext = createContext<NewContextType | null>(null);

export default NewContext;


// NextContext.tsx
// import { createContext } from "react";

// export type NextContextType = {
//   user?: string;
//   setUser?: (user: string) => void;
// };

// const NextContext = createContext<NextContextType | null>(null);

// export default NextContext;
