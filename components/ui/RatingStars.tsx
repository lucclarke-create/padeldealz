type RatingStarsProps = {
  rating: number;
  size?: number;
  uid: string;
};

export function RatingStars({ rating, size = 14, uid }: RatingStarsProps) {
  const clamped = Math.min(5, Math.max(0, rating));

  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.min(1, Math.max(0, clamped - index));
        const fillId = `${uid}-star-${index}`;

        return (
          <svg
            key={index}
            width={size}
            height={size}
            viewBox="0 0 20 20"
            className="text-navy"
          >
            <defs>
              <clipPath id={fillId}>
                <rect x="0" y="0" width={20 * fill} height="20" />
              </clipPath>
            </defs>
            <path
              d="M10 1.8 12.4 7l5.6.8-4 3.9.9 5.6L10 14.7 5.1 17.3l.9-5.6-4-3.9L7.6 7 10 1.8Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="text-navy/25"
            />
            <path
              d="M10 1.8 12.4 7l5.6.8-4 3.9.9 5.6L10 14.7 5.1 17.3l.9-5.6-4-3.9L7.6 7 10 1.8Z"
              fill="currentColor"
              clipPath={`url(#${fillId})`}
            />
          </svg>
        );
      })}
    </div>
  );
}
