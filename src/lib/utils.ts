import type { GitHubAPIData, DevData } from '../types';

export const transformAPIData = (data: GitHubAPIData): DevData => {
  return Object.keys(data).reduce(
    (transformedData, prop) => {
      switch (prop as keyof GitHubAPIData) {
        case 'name':
          return { ...transformedData, name: data.name };
        case 'login':
          return { ...transformedData, username: data.login };
        case 'created_at':
          return { ...transformedData, createdAt: new Date(data.created_at) };
        case 'bio':
          return { ...transformedData, bio: data.bio };
        case 'avatar_url':
          return { ...transformedData, avatarUrl: data.avatar_url };
        case 'public_repos':
          return { ...transformedData, stats: { ...transformedData.stats, repos: data.public_repos } };
        case 'followers':
          return { ...transformedData, stats: { ...transformedData.stats, followers: data.followers } };
        case 'following':
          return { ...transformedData, stats: { ...transformedData.stats, following: data.following } };
        case 'location':
          return { ...transformedData, personal: { ...transformedData.personal, location: data.location } };
        case 'blog':
          return { ...transformedData, personal: { ...transformedData.personal, blog: data.blog } };
        case 'twitter_username':
          return { ...transformedData, personal: { ...transformedData.personal, twitter: data.twitter_username } };
        case 'company':
          return { ...transformedData, personal: { ...transformedData.personal, company: data.company } };
        default:
          return transformedData;
      }
    },
    { stats: {}, personal: {} } as DevData
  );
};
