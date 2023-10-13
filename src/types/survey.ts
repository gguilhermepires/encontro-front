/* eslint-disable import/no-cycle */
import { UserSnippet } from './user';

export type SurveyStatus = 'ONGOING' | 'DISABLED' | 'CLOSED' | 'SHARED';

// For survey page

export type Answer = {
  id: string;
  rate: number | null;
  responseText: string;
  updatedAt: string | null;
};

export type Question = {
  id: string;
  title: string;
  answer: Answer | null;
  updatedAt: string | null;
};

export type Survey = {
  id: string;
  courseId: string;
  courseSessionId: string | null;
  displayName: string;
  status: SurveyStatus;
  preview: boolean;
  complete: boolean;
  currentQuestion: number;
  teachers: UserSnippet[];
  questions: Question[] | null;
};

export type SurveyPreview = {
  courseSession: {
    id: string;
    surveyId: string;
    course: {
      id: string;
      displayName: string;
      language: 'ENGLISH' | 'FRENCH';
    };
  };
};

// For admin pages
export type CommentInfo = {
  id: string;
  responseText: string;
  rate: number;
};

export type QuestionInfo = {
  id: string;
  titleEn: string;
  titleFr: string;
  distribution: [number, number, number, number, number]; // distribution from 1 to 5
  comments: CommentInfo[];
};

export type SurveyInfo = {
  id: string;
  currentResponseRate: number;
  totalStudentAnswered: number;
  status: SurveyStatus;
  questions: QuestionInfo[];
  updatedAt: string;
};

export type SurveyInfoSnippet = {
  id: string;
  currentResponseRate: number;
  totalStudentAnswered: number;
  totalStudents: number;
  status: SurveyStatus;
  average: number;
  questions: [number, number, number, number, number, number];
};

export type CourseSurveyInfo = {
  id: string; // course session id
  displayName: string; // courses session display name
  startDate: string;
  endDate: string;
  survey: {
    average: number;
    totalStudentAnswered: number;
    totalStudents: number;
  };
};
