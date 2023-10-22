export default function matchers(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
