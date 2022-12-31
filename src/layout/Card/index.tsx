import { Fragment } from 'preact/jsx-runtime';
import { svgPaths } from './svgPaths';
import LoadingSkeleton from './LoadingSkeleton';
import type { JSXInternal } from 'preact/src/jsx';
import type { DevData } from '../../types';

type Props = {
  data: DevData | null;
  isFetching: boolean;
};

const Card = ({ data, isFetching }: Props): JSXInternal.Element => {
  if (isFetching || data === null) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="dev-card-layout bg-bg-secondary px-6 pt-8 pb-12 md:p-10 rounded-2xl shadow-xl dark:shadow-none">
      <div
        style={{ gridArea: 'intro' }}
        className="grid content-center lg:content-start lg:grid-cols-2 lg:items-center"
      >
        <h2 className="text-md font-bold text-font-secondary leading-[0]">
          {data.name || <span className="text-font-secondary/40">Unknown</span>}
        </h2>
        <a className="mt-3 lg:mt-2 text-brand-primary lg:order-last" href={`https://github.com/${data.username}`}>
          @{data.username}
        </a>
        <span className="mt-1 lg:m-0 text-font-tertiary lg:ml-auto">
          Joined{' '}
          <time
            dateTime={`${data.createdAt.getFullYear()}-${data.createdAt.getMonth() + 1}-${data.createdAt.getDate()}`}
          >{`${data.createdAt.getDate()} ${data.createdAt.toLocaleString('en-US', {
            month: 'short',
          })} ${data.createdAt.getFullYear()}`}</time>
        </span>
      </div>

      <p style={{ gridArea: 'bio' }} className="lg:mt-6">
        {data.bio || <span className="text-font-primary/40">This profile has no bio</span>}
      </p>

      <dl
        style={{ gridArea: 'stats' }}
        className="flex justify-between bg-bg-primary px-8 py-6 rounded-lg text-center lg:mt-8"
        aria-label="Stats"
      >
        {Object.keys(data.stats).map(stat => (
          <div key={stat}>
            <dt className="text-sm capitalize">{stat}</dt>
            <dd className="mt-1 text-md font-bold text-font-secondary">{data.stats[stat as keyof DevData['stats']]}</dd>
          </div>
        ))}
      </dl>

      <dl style={{ gridArea: 'personal' }} className="grid gap-4 md:grid-cols-2 lg:mt-9" aria-label="Personal info">
        {Object.keys(data.personal).map(info => (
          <Fragment key={info}>
            <dt className="sr-only">{info}</dt>
            <dd
              className={`flex items-center gap-2 ${
                !data.personal[info as keyof DevData['personal']] && 'text-font-primary/40'
              }`}
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden>
                <path className="fill-none" d="M0 0h24v24H0z" />
                <path className="fill-[currentColor]" d={svgPaths[info as keyof DevData['personal']]} />
              </svg>
              {!data.personal[info as keyof DevData['personal']] ? (
                'Not Available'
              ) : info === 'blog' ? (
                <a
                  href={data.personal.blog.match(/^https?:\/\//i) ? data.personal.blog : 'http://' + data.personal.blog}
                >
                  {data.personal.blog}
                </a>
              ) : info === 'twitter' ? (
                <a href={`https://twitter.com/${data.personal.twitter}`}>@{data.personal.twitter}</a>
              ) : (
                data.personal[info as keyof DevData['personal']]
              )}
            </dd>
          </Fragment>
        ))}
      </dl>

      <img
        style={{ gridArea: 'avatar' }}
        src={data.avatarUrl}
        className="w-full lg:w-[7.3125rem] h-full lg:h-[7.3125rem] rounded-[50%]"
        alt=""
      />
    </div>
  );
};

export default Card;
