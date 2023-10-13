/* eslint-disable import/no-cycle */
import { CommitteeSnippet } from './committee';
import { GradeType } from './courseSession';
import { CohortSnippetWithTracks } from './period';
import { SyncState } from './remoteLMS';
import { UserSnippet } from './user';

export type Programme = {
  id: string;
  displayName: string;
  director?: UserSnippet;
  tracks: Track[];
  skillSets: SkillSet[];
  activeStudents: number;
  openCourses: number;
  quantityCohorts: number;
  startDate: string;
  endDate: string;
};

export type ProgrammeSnippet = {
  id: string;
  displayName: string;
  skillSet: SkillSet | null;
  updatedAt: string | null;
  deletedAt: string | null;
};

export type ProgrammeDetailed = {
  id: string;
  displayName: string;
  director?: UserSnippet;
  activeCohorts: {
    id: string;
    displayName: string;
    averageCourseStudentGrade: string;
    started: string;
    daysRemaining: string;
    activeStudents: number;
    totalStudents: number;
    startDate: string;
    endDate: string;
    projects: {
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
      gradeType: GradeType;
      gradesPublished: boolean;
      programme: string;
      totalStudents: number;
      deletedAt: string | null;
      cohorts: CohortSnippetWithTracks[];
      teachers: UserSnippet[];
      students: UserSnippet[];
      courseSessionType: 'CORE' | 'PRIMER' | 'PROJECT' | 'ELECTIVE';
    }[];
  }[];
  tracks: Track[];
  skillSets: SkillSet[];
  graduationCommittees: CommitteeSnippet[];
};

export type Track = {
  id: string;
  displayName: string;
  code: string;
  programmeId?: string;
  status: 'ACTIVE' | 'INACTIVE';
  updatedAt?: string | null;
  deletedAt: string | null;
};

export type TrackDetailed = {
  id: string;
  displayName: string;
  code: string;
  status: 'ACTIVE' | 'INACTIVE';
  deletedAt: string | null;
  courses: {
    id: string;
    displayName: string;
    startDate: string;
    endDate: string;
    allTrack: boolean;
  }[];
};

export type SkillSet = {
  id: string;
  displayName: string;
  deletedAt: string | null;
  updatedAt: string | null;
};
