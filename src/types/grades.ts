import { UserSnippet } from './user';

export type StudentGrade = {
  user: UserSnippet;
  ects: number | null;
  exam: {
    grade: {
      currentValue: number;
    };
  };
  examContinuous: {
    grade: {
      id: string;
      currentValue: number;
    };
  };
  examLabel: {
    grade: {
      id: string;
      currentValue: number;
    };
  };
};
