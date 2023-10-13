/* eslint-disable import/no-cycle */


export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  type: 'CLIENT' | 'ADMIN';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type UserSnippet = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  extraTime: boolean;
  subTable: {
    status:
      | 'EN_FORMATION'
      | 'DEMISSION'
      | 'RATTRAPAGE'
      | 'DIP_DIPLOME'
      | 'DIP_NON_DIPLOME'
      | 'EXCLU_CONSEIL'
      | 'JUR_EXCLU_JURY'
      | 'REPORT';
    cohort: { id: string; displayName: string };
    programme: { id: string; displayName: string };
    track: { id: string; displayName: string } | null;
  }[];
};

export type StudentDetailed = {
  studentInfo: {
    id: string;
    ssoStudentId: string;
    firstName: string;
    lastName: string;
    birthDate: string | null;
    email: string;
    type: 'STUDENT';
    extraTime: boolean;
    updatedAt: string | null;
    cohorts: {
      id: string;
      identifier: string; // cohort code
      displayName: string;
      startDate: string;
      endDate: string;
      groupBySkillSet: boolean;
      programme: {
        id: string;
        displayName: string;
        director: UserSnippet;
      };
    }[];
  };
  tables: {
    updatedAt: string;
    coursesToAdd?: { id: string; displayName: string }[];
    coursesToRemove?: { id: string; displayName: string }[];
    groupBySkillSet: boolean;
    programme: {
      id: string;
      displayName: string;
      director: UserSnippet;
    };
    recommendation: {
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
      editor: UserSnippet;
      programmeId: string;
      studentId: string;
      updatedAt: string;
      lastLockedAt: string;
      deletedAt: string | null;
    } | null;
    courses: {
      id: string;
      displayName: string;
      courseId: string;
      courseSessionType: 'CORE' | 'PRIMER' | 'PROJECT' | 'ELECTIVE';
      gradeType: 'LABEL' | 'GRADE';
      credits: number;
      graded: number;
      maxGrade: number;
      passingGrade: number;
      average: number;
      startDate: string;
      endDate: string;
      skillSet: string | null;
      examTypeExam?: {
        id: string;
        weight: number;
        grade: {
          id: string;
          currentValue: number;
          deletedAt?: string;
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
          deletedAt?: string;
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
          deletedAt?: string;
          decision: 'COMP' | 'LEN' | null;
          forcePass: boolean;
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
          deletedAt?: string;
        };
        courseSessionId: string;
        deletedAt?: string;
      } | null;
      ECTS: {
        attempted: number;
        validated: number;
        grade: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
      };
    }[];
  }[];
};
