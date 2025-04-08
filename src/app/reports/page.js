
'use client';
import { useState, useEffect } from 'react';
import { generateReports } from '@/lib/fakeData';

const PAGE_SIZE = 25;

export default function ReportsPage() {
  const [reports, setReports] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setReports(generateReports(100));
  }, []);

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageData = reports.slice(start, end);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Reports</h1>
      <div className="table-responsive">
        <table className="table table-dark table-striped table-hover align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td>{r.email}</td>
                <td>{r.status}</td>
                <td>${r.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} className="btn btn-outline-light" disabled={page === 1}>
          Prev
        </button>
        <span className="align-self-center">Page {page}</span>
        <button onClick={() => setPage((p) => (end >= reports.length ? p : p + 1))} className="btn btn-outline-light" disabled={end >= reports.length}>
          Next
        </button>
      </div>
    </div>
  );
}
