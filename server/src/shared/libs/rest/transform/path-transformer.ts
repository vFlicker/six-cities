export interface PathTransformer {
  execute(data: Record<string, unknown>): Record<string, unknown>;
}
