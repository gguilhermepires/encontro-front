/* eslint-disable import/no-cycle */
import { CourseSessionType, GradeType } from './courseSession';
import { Track } from './programme';
import { UserSnippet } from './user';

export type UserSnippetWithRecommendation = UserSnippet & {
  academicRecommendationStatus:
    | 'EN_FORMATION' // Ongoing (default)
    | 'DEMISSION' // Withdrawn
    | 'RATTRAPAGE' // Retake
    | 'DIP_DIPLOME' // Awarded
    | 'DIP_NON_DIPLOME' // Denied
    | 'EXCLU_CONSEIL' // Expelled by disciplinary board
    | 'JUR_EXCLU_JURY' // Expelled by graduation jury
    | 'REPORT' // Suspended
    | null;
  track: Track;
};

export type Cohort<
  T extends UserSnippetWithRecommendation | UserSnippet = UserSnippet
> = {
  id: string;
  identifier: string;
  isActive: boolean;
  displayName: string;
  startDate: string;
  endDate: string;
  openTab?: boolean;
  students: T[];
  totalStudents: number;
  groupBySkillSet: boolean;
  programme: {
    id: string;
    displayName: string;
    director: UserSnippet;
  } | null;
};

export type CohortSnippet = {
  id: string;
  displayName: string;
  identifier: string;
  totalStudents: number;
  isActive: boolean;
  startDate: string;
  endDate: string;
  updatedAt: string | null;
  deletedAt: string | null;
};

export type CohortDetailed = {
  id: string;
  identifier: string;
  displayName: string;
  startDate: string;
  endDate: string;
  groupBySkillSet: boolean;
  updatedAt: string;
  graduationCommitteeId: string | null;
  programme: {
    id: string;
    displayName: string;
    tracks: Track[];
  };
  courses: {
    id: string;
    displayName: string;
    course: { id: string; code: string };
    average: number;
    graded: number;
    startDate: string;
    endDate: string;
    gradeType: GradeType;
  }[];
  students: {
    id: string;
    studentId: string;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    academicRecommendation: {
      status:
        | 'EN_FORMATION' // Ongoing (default)
        | 'DEMISSION' // Withdrawn
        | 'RATTRAPAGE' // Retake
        | 'DIP_DIPLOME' // Awarded
        | 'DIP_NON_DIPLOME' // Denied
        | 'EXCLU_CONSEIL' // Expelled by disciplinary board
        | 'JUR_EXCLU_JURY' // Expelled by graduation jury
        | 'REPORT'; // Suspended
      deletedAt: string | null;
    } | null;
    averageGrade: number | null;
    track: Track;
    updatedAt: string;
    courseSessions: {
      id: string;
      courseId: string;
      displayName: string;
      grade: number | null;
      courseSessionType: CourseSessionType;
      startDate: string;
      endDate: string;
    }[];
  }[];
};
