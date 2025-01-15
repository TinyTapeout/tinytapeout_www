import React from 'react';
import { IAllShuttlesFeedbackList } from '../model/feedback.js';

export function SiliconProvenProjects(props: { feedback: IAllShuttlesFeedbackList }) {
  const rows: React.ReactNode[] = [];

  const sortedFeedback = [...props.feedback].sort((a, b) => {
    if (a.working !== b.working) {
      return b.working - a.working;
    }
    return b.shuttle.localeCompare(a.shuttle);
  });

  for (const item of sortedFeedback) {
    rows.push(
      <tr key={item.shuttle}>
        <td>
          <a href={`/runs/${item.shuttle}`}>{item.shuttle.toUpperCase()}</a>
        </td>
        <td>
          <a href={`/runs/${item.shuttle}/${item.macro}`}>{item.title}</a>
        </td>
        <td>{item.working}</td>
      </tr>,
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Shuttle</th>
          <th>Title</th>
          <th>✅</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
