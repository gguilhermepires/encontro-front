/* eslint-disable import/no-cycle */
import { CourseSession } from './courseSession';
import { ProgrammeSnippet } from './programme';
import { CourseSurveyInfo } from './survey';

export enum CourseLanguage {
  ENGLISH = 'ENGLISH',
  FRENCH = 'FRENCH',
}

export type FileUpload = {
  id: string;
  key: string;
  displayName: string;
  type: string;
  link: string;
};

export type Course<T extends CourseSession = undefined> = {
  id: string;
  displayName: string;
  code: string;
  author: string;
  creationDate: string;
  programmes: ProgrammeSnippet[];
  sessions: T[];
};

export type CourseDetailed = {
  id: string;
  displayName: string;
  code: string;
  author: string;
  production: string;
  language: CourseLanguage;
  creationDate: string;
  learningObjectives?: string;
  overview?: string;
  prerequisites?: string;
  syllabus?: FileUpload;
  programmes: ProgrammeSnippet[];
  surveys: CourseSurveyInfo[];
};
