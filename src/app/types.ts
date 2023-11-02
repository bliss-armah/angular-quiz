export interface Quizzes {
    quiz: Quiz[];
  }
  
  export interface QuizQuestions {
    _id: string;
    question: string;
    options: string[];
    answer: string;
    correctAnswer: string;
    createdAt: string;
  }
  
  export interface QuizPaginations {
    currentPage: number;
    prevPage: number | null;
    nextPage: number;
    totalPages: number;
  }
  
  export interface AllQuizQnP {
    questions: QuizQuestions[];
    pagination: QuizPaginations;
  }

  export interface QuizQuestionsP {
    quiz: AllQuizQ;
  }
  export interface AllQuizQ {
    questions: QuizQuestions[];
    _id: string;
  }
  
  export interface Quiz {
    _id: string;
    questions?: QuizQuestions[];
    subject: string;
    level: string[];
    title: string;
    duration: number;
  }
  
  export interface FilterProps {
    subject?: string;
    level?: string;
    title?: string;
  }
  
  export interface FilterQuestionProps {
    id: string;
    page: string | number;
  }
  
  interface AnswerObj{
    _id: string;
    answer: string;
  }
  
  export interface AnswerQuestion {
    _id: string;
    answers: AnswerObj[];
  }
  
