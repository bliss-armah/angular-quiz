
export interface Quizzes {
   quiz:Quiz[]
  }

  export interface QuizQuestions {
    _id: string;
    question: string;
    options: string[];
    answer: string;
    correctAnswer: string;
    createdAt: string;
  }
  

export interface Quiz {
  _id: string;
  questions?: QuizQuestions[];
  subject: string;
  level: string[];
  title: string;
  duration: number;
}


