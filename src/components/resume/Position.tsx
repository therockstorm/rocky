import React from "react";

interface Props {
  readonly title: string;
  readonly start: string;
  readonly end: string;
  readonly location: string;
  readonly desc: string[];
}

export const Position = ({
  company,
  positions,
}: {
  company: string;
  positions: Props[];
}): JSX.Element => (
  <>
    <h3 className="mt-2">{company}</h3>
    {positions.map(
      ({ title, start, end, location, desc }: Props, idx: number) => {
        return (
          <div key={idx}>
            <h4>{title}</h4>
            <div className="flex justify-between text-sm text-gray-500">
              <div>{location}</div>
              <div>
                {start} - {end}
              </div>
            </div>
            <ul>
              {desc.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>
          </div>
        );
      }
    )}
  </>
);
