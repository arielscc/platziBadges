import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function ListSkeleton({ cantidad }) {
  const badges = new Array(cantidad).fill(1);
  return (
    <>
      <div className="BadgesList">
        <div className="form-group">
          <div
            className="form-control"
            style={{ border: 'none', height: '70px' }}
          >
            <Skeleton width={100} />
            <br />
            <Skeleton width={300} />
          </div>
        </div>
        <ul className="list-unstyled">
          {badges.map((_, i) => {
            return (
              <li key={i}>
                <div className="BadgesListItem">
                  <div className="BadgesListItem__avatar">
                    <Skeleton circle={true} width={80} height={80} />
                  </div>
                  <div>
                    <strong>
                      <Skeleton width={200} />
                    </strong>
                    <br />
                    <Skeleton width={250} />
                    <br />
                    <Skeleton width={250} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
