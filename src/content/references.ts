/**
 * Shared reference shape for Knowledge Hub content.
 *
 * `supports` names the specific claim the source backs, so a reviewer can
 * check each one against the text rather than trusting a bare list. Keep it
 * filled in: a reference that supports nothing in particular is decoration.
 */
export type Reference = {
  title: string;
  publisher: string;
  year: string;
  url?: string;
  supports: string;
};
