export interface OpenSignalProfile {
  githubId: number; // GitHub username or ID
  // offering: string[]; // Tags for skills offered
  // lookingFor: string[]; // Tags for collaborators or needs
  // statusEffects: string[]; // Trust/moderation tags (e.g. "Outstanding Citizen", "Poison Links")
  // personalSummary: string; // 200–300 character freeform summary
  // timestamp: string; // ISO date string
  // featured?: boolean; // Optional: for premium visibility
  // quarantined?: boolean; // Optional: moderation flag
  // username?: string;
  // bio?: string;
  // avatar?: string;
  // joinedAt?: string; // new Date().toISOString(),
  ///
  ///
  emailVerified: Date | null;

  ///
  /// GitHub User API fields for reference
  // username: string; //"octocat",
  id: string; //"1",
  // id: number; //1,
  // node_id: string; //"MDQ6VXNlcjE=",
  avatar_url: string; //"https://github.com/images/error/octocat_happy.gif",
  // gravatar_id: string; //"",
  // url: string; //"https://api.github.com/users/octocat",
  html_url: string; //"https://github.com/octocat",
  // followers_url: string; //"https://api.github.com/users/octocat/followers",
  // following_url: string; //"https://api.github.com/users/octocat/following{/other_user}",
  // gists_url: string; //"https://api.github.com/users/octocat/gists{/gist_id}",
  // starred_url: string; //"https://api.github.com/users/octocat/starred{/owner}{/repo}",
  // subscriptions_url: string; //"https://api.github.com/users/octocat/subscriptions",
  // organizations_url: string; //"https://api.github.com/users/octocat/orgs",
  repos_url: string; //"https://api.github.com/users/octocat/repos",
  // events_url: string; //"https://api.github.com/users/octocat/events{/privacy}",
  // received_events_url: string; //"https://api.github.com/users/octocat/received_events",
  type: string; //"User",
  site_admin: boolean; //false,
  name: string; //"monalisa octocat",
  company: string; //"GitHub",
  // blog: string; //"https://github.com/blog",
  location: string; //"San Francisco",
  email: string; //"octocat@github.com",
  hireable: boolean; //false,
  // bio: string; //"There once was...",
  twitter_username: string; //"monatheoctocat",
  public_repos: number; //2,
  // public_gists: number; //1,
  followers: number; //20,
  following: number; //0,
  // created_at: string; //"2008-01-14T04:33:35Z",
  // updated_at: string; //"2008-01-14T04:33:35Z",
  // private_gists: number; //81,
  total_private_repos: number; //100,
  // owned_private_repos: number; //100,
  // disk_usage: number; //10000,
  // collaborators: number; //8,
  two_factor_authentication: boolean; //true,
  // plan: {
  //   name: string; //"Medium",
  //   space: number; //400,
  //   private_repos: number; //20,
  //   collaborators: number; //0
  // };
}
