// Global mutable state for extreme performance in requestAnimationFrame (R3F useFrame)
// Avoids React Context re-renders for scroll progress.

export const scrollState = {
    progress: 0,
};
