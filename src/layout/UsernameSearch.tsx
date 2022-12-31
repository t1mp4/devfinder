import { useState } from 'preact/hooks';
import { toast } from 'react-hot-toast';
import type { JSXInternal } from 'preact/src/jsx';

type Props = {
  value: string;
  handleChange: (e: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => void;
  handleSubmit: () => Promise<void>;
};

const UsernameSearch = ({ value, handleChange, handleSubmit }: Props): JSXInternal.Element => {
  const [isInvalidUsername, setIsInvalidUsername] = useState(false);

  const PLACEHOLDER_TEXT = 'Search GitHub username…';

  return (
    <form
      className="flex justify-between md:justify-start items-center gap-1 md:gap-6 bg-bg-secondary pl-4 md:pl-8 pr-2 py-2 rounded-2xl shadow-xl dark:shadow-none"
      onSubmit={e => {
        e.preventDefault();

        if (!value.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) {
          setIsInvalidUsername(true);
          toast.error('Invalid GitHub username.', {
            id: 'error-message',
          });
          return;
        }

        handleSubmit();
      }}
    >
      <svg
        className="shrink-0 w-5 md:w-6 h-5 md:h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path className="fill-none" d="M0 0h24v24H0z" />
        <path
          className="fill-brand-primary"
          d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
        />
      </svg>

      <label className="sr-only" for="github-username-input">
        GitHub username
      </label>

      <input
        type="text"
        className="block text-base-2 bg-[inherit] outline-none caret-brand-primary placeholder:text-font-primary placeholder:opacity-100 md:w-full"
        size={PLACEHOLDER_TEXT.length}
        id="github-username-input"
        placeholder={PLACEHOLDER_TEXT}
        value={value}
        onChange={handleChange}
        autoComplete="off"
        aria-required
        aria-invalid={isInvalidUsername}
        aria-errormessage="error-message"
      />

      <button
        type="submit"
        className="font-bold text-font-quaternary bg-brand-primary w-[min(100%,6em)] md:w-auto py-[0.95em] md:py-[0.75em] rounded-lg hover:bg-brand-primary/75 md:px-[1.4em]"
      >
        Search
      </button>
    </form>
  );
};

export default UsernameSearch;
