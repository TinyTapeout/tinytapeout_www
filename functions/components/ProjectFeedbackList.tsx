import React from 'react';
import { feedbackEmoji, IProjectFeedbackList } from '../model/feedback.js';

export interface IProjectFeedbackListProps {
  feedback: IProjectFeedbackList;
}

export function ProjectFeedbackList({ feedback }: IProjectFeedbackListProps) {
  return (
    <ul>
      {feedback.map((f) => (
        <li
          key={f.user}
          className={`project-feedback-item feedback-${f.status}`}
          style={{
            listStylePosition: 'outside',
            listStyle: `"${feedbackEmoji(f.status)} "`,
            marginBottom: '0.5em',
          }}
        >
          <strong>
            {f.user}
            {f.owner ? '👑' : ''}
          </strong>
          : {f.feedback} {f.link && <a href={f.link}>Link for more details</a>}
        </li>
      ))}
    </ul>
  );
}
