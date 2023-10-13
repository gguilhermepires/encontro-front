/* eslint-disable import/no-cycle */
import { CohortSnippet, UserSnippetWithRecommendation } from './cohort';
import { GradeType } from './courseSession';
import { Track } from './programme';
import { SyncState } from './remoteLMS';
import { SurveyInfoSnippet } from './survey';
import { UserSnippet } from './user';

export type Period = {
  id: string;
  displayName: string;
  startDate: string;
  endDate: string;
  status: 'IN_CREATION' | 'IN_PROGRESS' | 'CLOSED';
  courseSessions: {
    id: string;
    courseId: string;
    displayName: string;
    startDate: string;
    syncState: SyncState;
    endDate: string;
    credits: number;
    passingGrade: number;
    maxGrade: number;
    graded: number;
    average: number;
    gradeType: GradeType;
    gradesPublished: boolean;
    programme: string;
    totalStudents: number;
    cohorts: CohortSnippetWithTracks[];
    teachers: UserSnippet[];
    students: UserSnippetWithRecommendation[];
    courseSessionType: 'CORE' | 'PRIMER' | 'PROJECT' | 'ELECTIVE';
    survey: SurveyInfoSnippet | null;
    updatedAt: string | null;
    deletedAt: string | null;
  }[];
};

export type CohortSnippetWithTracks = CohortSnippet & { tracks: Track[] };
