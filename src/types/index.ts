export type GitHubAPIData = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
};

export type DevData = {
  name: GitHubAPIData['name'];
  username: GitHubAPIData['login'];
  createdAt: Date;
  bio: GitHubAPIData['bio'];
  avatarUrl: GitHubAPIData['avatar_url'];
  stats: {
    repos: GitHubAPIData['public_repos'];
    followers: GitHubAPIData['followers'];
    following: GitHubAPIData['following'];
  };
  personal: {
    location: GitHubAPIData['location'];
    blog: GitHubAPIData['blog'];
    twitter: GitHubAPIData['twitter_username'];
    company: GitHubAPIData['company'];
  };
};
