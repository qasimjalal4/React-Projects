import { createContext,useContext } from "react";

export const QuizContext = createContext();

export function useQuiz() {
  return useContext(QuizContext)
}