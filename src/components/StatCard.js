'use client';
export function StatCard({ title, value }) {
  return (
    <div className="card text-bg-dark mb-3">
      <div className="card-body">
        <h5 className="card-title text-capitalize">{title}</h5>
        <p className="card-text fs-3 fw-bold">{value}</p>
      </div>
    </div>
  );
}
