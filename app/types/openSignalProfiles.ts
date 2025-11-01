export interface OpenSignalProfile {
 githubId: string; // GitHub username or ID
  offering: string[]; // Tags for skills offered
  lookingFor: string[]; // Tags for collaborators or needs
  statusEffects: string[]; // Trust/moderation tags (e.g. "Outstanding Citizen", "Poison Links")
  personalSummary: string; // 200–300 character freeform summary
  timestamp: string; // ISO date string
  featured?: boolean; // Optional: for premium visibility
  quarantined?: boolean; // Optional: moderation flag
}
