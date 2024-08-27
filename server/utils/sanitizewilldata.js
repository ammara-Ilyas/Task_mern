export function sanitizeWillData(data) {
  return {
    hasChildren: data.hasChildren || false,
    children: Array.isArray(data.children)
      ? data.children.map((child) => ({
          name: child.name || "Unnamed Child",
        }))
      : [],
    underageChildren: data.underageChildren || false,
    guardians: Array.isArray(data.guardians)
      ? data.guardians.map((guardian) => ({
          name: guardian.name || "Unnamed Guardian",
          relationship: guardian.relationship || "Unknown",
        }))
      : [],
  };
}
