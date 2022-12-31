import { useState, useEffect } from 'preact/hooks';
import { transformAPIData } from '../lib/utils';
import type { GitHubAPIData, DevData } from '../types';

export const useGitHubAPI = (handleError: (message: string) => void) => {
  const [devData, setDevData] = useState<DevData | null>(null);

  const updateDevData = async (username = 'torvalds') => {
    try {
      const apiData = await fetchData(username);
      setDevData(transformAPIData(apiData));
    } catch (error) {
      if (error instanceof Error) {
        handleError(error.message);
      }
    }
  };

  const fetchData = async (username: string): Promise<GitHubAPIData> => {
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (res.status === 404) {
      throw new Error('User not found.');
    }

    if (!res.ok) {
      throw new Error('Oops! Something went wrong.');
    }

    return await res.json();
  };

  useEffect(() => {
    updateDevData();
  }, []);

  return { devData, updateDevData };
};
