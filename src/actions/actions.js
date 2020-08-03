export const RESERT = 'RESERT';

export function reset(isToReset) {
  return { type: RESERT, isToReset };
}
