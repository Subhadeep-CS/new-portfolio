export interface ComponentMetadata {
  name: string;
  description?: string;
  stack: string[];
  optimizations?: string[];
  patterns?: string[];
  architectureNotes?: string;
  animation?: {
    type: string;
    duration: string;
    description?: string;
  };
  accessibility?: string[];
  performance?: {
    cls?: string;
    lcp?: string;
    notes?: string[];
  };
  buildProcess?: {
    iteration: string;
    note: string;
  }[];
}
