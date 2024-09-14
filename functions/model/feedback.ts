export type ProjectFeedbackStatus = 'working' | 'partial' | 'broken';

export interface IProjectFeedbackItem {
  status: ProjectFeedbackStatus;
  /** Github username */
  user: string;
  feedback: string;
  /** True if the user is the owner of the project */
  owner: boolean;
  link?: string;
}

export type IProjectFeedbackList = Array<IProjectFeedbackItem>;

export async function loadProjectFeedback(shuttle: string, project: string) {
  const response = await fetch(
    `https://app.tinytapeout.com/api/shuttles/${shuttle}/${project}/feedback`,
  );
  if (!response.ok) {
    return null;
  }
  return (await response.json()) as IProjectFeedbackList;
}

const statusMap: Record<ProjectFeedbackStatus, string> = {
  working: '✅',
  partial: '🟡',
  broken: '🔴',
};

export function feedbackEmoji(status: ProjectFeedbackStatus) {
  return statusMap[status];
}

export function summarizeFeedback(feedback: Array<{ status: ProjectFeedbackStatus }>) {
  const counts = feedback.reduce(
    (acc, f) => {
      const status = f.status as ProjectFeedbackStatus;
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    },
    {} as Record<ProjectFeedbackStatus, number>,
  );
  return Object.entries(counts)
    .map(([status, count]) => `${statusMap[status as ProjectFeedbackStatus]} ${count}`)
    .join(' ');
}
