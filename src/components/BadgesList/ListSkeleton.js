import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function ListSkeleton({ cantidad }) {
  const badges = new Array(cantidad).fill(1);
  return (
    <>
      <div className="BadgesList">
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
                    <Skeleton width={400} />
                    <br />
                    <Skeleton width={400} />
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
