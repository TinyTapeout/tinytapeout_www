import React from 'react';
import { IAllShuttlesFeedbackList } from '../model/feedback.js';

export function SiliconProvenProjects(props: { feedback: IAllShuttlesFeedbackList }) {
  const rows: React.ReactNode[] = [];

  const allShuttles = new Set<string>();
  for (const item of props.feedback) {
    allShuttles.add(item.shuttle);
  }

  const sortedFeedback = [...props.feedback].sort((a, b) => {
    if (a.working !== b.working) {
      return b.working - a.working;
    }
    return b.shuttle.localeCompare(a.shuttle);
  });

  for (const item of sortedFeedback) {
    rows.push(
      <tr key={item.shuttle} data-shuttle={item.shuttle}>
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
    <>
      <div>
        Show shuttles:{' '}
        <select id="shuttle-filter" style={{ display: 'inline-block' }}>
          <option value={''}>All</option>
          {[...allShuttles].map((shuttle) => (
            <option key={shuttle} value={shuttle}>
              {shuttle.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{ width: 64 }}>Shuttle</th>
            <th>Title</th>
            <th style={{ width: 48 }}>✅</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <script src="/scripts/shuttle-filter.js"></script>
    </>
  );
}
