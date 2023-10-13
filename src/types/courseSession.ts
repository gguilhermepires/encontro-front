/* eslint-disable import/no-cycle */
import { ProgrammeSnippet } from './programme';
import { RemoteLMS, SyncState } from './remoteLMS';
import { SurveyInfo, SurveyInfoSnippet } from './survey';
import { UserSnippet } from './user';

export enum GradeType {
  QUALITATIVE = 'LABEL',
  QUANTITATIVE = 'GRADE',
}

export type EctsType = 'MANUAL' | 'AUTOMATIC';

export type CourseSessionType = 'CORE' | 'PRIMER' | 'ELECTIVE' | 'PROJECT';

export type CourseSession = {
  id: string;
  displayName: string;
  courseId?: string;
  course?: { id: string; code: string };
  syncState: SyncState;
  lastSyncAt: string;
  startDate: string;
  endDate: string;
  maxGrade: number;
  graded: number; // The percentage of students that have a final grade
  classAverage: number; // The average grade of all students
  gradesPublished: boolean;
  totalStudents: number;
  programmes: ProgrammeSnippet[];
  teachers: UserSnippet[];
  students: UserSnippet[];
  cohorts: {
    id: string;
    identifier: string;
  }[];
  gradeType: GradeType;
};

export type CourseSessionWithSurvey = {
  id: string;
  displayName: string;
  courseId?: string;
  startDate: string;
  endDate: string;
  classAverage: number;
  totalStudents: number;
  programmes: ProgrammeSnippet[];
  teachers: UserSnippet[];
  survey: SurveyInfoSnippet;
};

export type CourseSessionDetailed = {
  id: string;
  displayName: string;
  courseId?: string;
  course: { id: string; code: string };
  syncState: SyncState;
  remoteLMS: RemoteLMS | null;
  remoteCourseSessionId: string | null;
  remoteProgrammeId: string | null;
  lastSyncAt: string;
  credits: number;
  gradeType: GradeType;
  passingGrade: number;
  maxGrade: number;
  startDate: string;
  endDate: string;
  graded: number; // The percentage of students that have a final grade
  percente: number; // Should be remove and average should be used
  classAverage: number | null; // Should be average or other endpoints should also return this
  gradesPublished: boolean;
  totalStudents: number; // should be students, or students in getAll should be totalStudents
  ectsType: EctsType;
  survey: SurveyInfo;
  graphic: {
    data:
      | {
          '0_1': number;
          '2_3': number;
          '4_5': number;
          '6_7': number;
          '8_9': number;
          '10_11': number;
          '12_13': number;
          '14_15': number;
          '16_17': number;
          '18_19': number;
          '20': number;
        }
      | {
          passed: number;
          failed: number;
        };
    totalStudents: number;
  };
  exams: {
    id: string;
    displayName: string;
    type: 'EXAM' | 'CONTINUOUS' | 'LABEL' | 'FINAL';
    average?: number;
    weight: number;
    deletedAt?: string;
    courseSessionId: string;
  }[];
  students: {
    userId: string;
    programmeId: string;
    firstName: string;
    lastName: string;
    email: string;
    examTypeExam?: {
      id: string;
      weight: number;
      grade: {
        id: string;
        currentValue: number;
        published: boolean;
        deletedAt?: string;
        userId: string;
        examId: string;
      };
      courseSessionId: string;
      deletedAt?: string;
    } | null;
    examTypeContinuous?: {
      id: string;
      weight: number;
      grade: {
        id: string;
        currentValue: number;
        published: boolean;
        deletedAt?: string;
        userId: string;
        examId: string;
      };
      courseSessionId: string;
      deletedAt?: string;
    } | null;
    examTypeFinal?: {
      id: string;
      weight: number;
      grade: {
        id: string;
        currentValue: number;
        forcePass: boolean;
        published: boolean;
        deletedAt?: string;
        userId: string;
        examId: string;
        ects?: number | null;
      };
      courseSessionId: string;
      deletedAt?: string;
    } | null;
    examTypeLabel?: {
      id: string;
      weight: number;
      grade: {
        id: string;
        currentValue: number;
        published: boolean;
        deletedAt?: string;
        userId: string;
        examId: string;
      };
      courseSessionId: string;
      deletedAt?: string;
    } | null;
    examTypeGrade: number;
    cohort: {
      id: string;
      displayName: string;
      programmeId: string;
      identifier: string;
    } | null;
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
      comment: string;
      editorId: string;
      programmeId: string;
      studentId: string;
      createdAt: string;
      updatedAt: string;
      lastLockedAt: string;
      deletedAt: string | null;
    };
  }[];
  teachers: UserSnippet[];
  programmes: ProgrammeSnippet[];
};
