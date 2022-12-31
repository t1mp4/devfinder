import type { JSXInternal } from 'preact/src/jsx';

const LoadingSkeleton = (): JSXInternal.Element => {
  return (
    <div className="dev-card-layout bg-bg-secondary px-6 pt-8 pb-12 md:p-10 rounded-2xl shadow-xl dark:shadow-none">
      <span className="sr-only">Loading</span>
      <div
        style={{ gridArea: 'intro' }}
        className="grid content-center lg:content-start lg:grid-cols-2 lg:items-center"
      >
        <div className="bg-bg-primary animate-pulse w-24 md:w-40 h-6"></div>
        <div className="bg-bg-primary animate-pulse w-16 h-5 mt-3 lg:mt-2 lg:order-last"></div>
        <div className="bg-bg-primary animate-pulse w-36 h-5 mt-1 lg:m-0 lg:ml-auto"></div>
      </div>

      <div style={{ gridArea: 'bio' }} className="bg-bg-primary animate-pulse w-full h-20 lg:mt-6"></div>

      <div
        style={{ gridArea: 'stats' }}
        className="w-full h-20 flex justify-between bg-bg-primary px-8 py-6 rounded-lg lg:mt-8"
      >
        <div>
          <div className="bg-bg-secondary animate-pulse w-11 h-4 mx-auto"></div>
          <div className="bg-bg-secondary animate-pulse w-9 h-6 mx-auto mt-1"></div>
        </div>
        <div>
          <div className="bg-bg-secondary animate-pulse w-11 h-4 mx-auto"></div>
          <div className="bg-bg-secondary animate-pulse w-9 h-6 mx-auto mt-1"></div>
        </div>
        <div>
          <div className="bg-bg-secondary animate-pulse w-11 h-4 mx-auto"></div>
          <div className="bg-bg-secondary animate-pulse w-9 h-6 mx-auto mt-1"></div>
        </div>
      </div>

      <div style={{ gridArea: 'personal' }} className="grid gap-4 md:grid-cols-2 lg:mt-9">
        <div className="flex items-center gap-2">
          <div className="bg-bg-primary animate-pulse w-6 h-6"></div>
          <div className="bg-bg-primary animate-pulse w-40 h-5"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-bg-primary animate-pulse w-6 h-6"></div>
          <div className="bg-bg-primary animate-pulse w-40 h-5"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-bg-primary animate-pulse w-6 h-6"></div>
          <div className="bg-bg-primary animate-pulse w-40 h-5"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-bg-primary animate-pulse w-6 h-6"></div>
          <div className="bg-bg-primary animate-pulse w-40 h-5"></div>
        </div>
      </div>

      <div
        style={{ gridArea: 'avatar' }}
        className="bg-bg-primary animate-pulse w-full lg:w-[7.3125rem] h-full lg:h-[7.3125rem] rounded-[50%]"
      ></div>
    </div>
  );
};

export default LoadingSkeleton;
