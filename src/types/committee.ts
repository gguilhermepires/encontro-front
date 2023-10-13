/* eslint-disable import/no-cycle */
import { CourseSessionType } from './courseSession';
import { Track } from './programme';
import { UserSnippet } from './user';

export type CommitteeDetailed = {
  id: string;
  displayName: string;
  date: string;
  director: string;
  president: string;
  members: string;
  scribe: string;
  status: 'DRAFT' | 'COMPLETE';
  updatedAt: string;
  programme: { id: string; displayName: string };
  notes: {
    id: string;
    note: string;
    graduationCommitteeId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    editor: UserSnippet;
  }[];
  cohorts: {
    id: string;
    displayName: string;
    identifier: string;
    programmeId: string;
    startDate: string;
    endDate: string;
    updatedAt: string;
    deletedAt: string | null;
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
        updatedAt: string | null;
        lastLockedAt: string | null;
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
      notes: {
        id: string;
        note: string;
        graduationCommitteeId: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string | null;
        editor: UserSnippet;
      }[];
      commentRetake: {
        id: string;
        comment: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string | null;
        editor: UserSnippet;
      } | null;
    }[];
  }[];
};

export type CommitteeSnippet = {
  id: string;
  displayName: string;
  status: 'DRAFT' | 'COMPLETE';
  date: string | null;
  deletedAt: string | null;
  updatedAt: string | null;
};
