// Smooth-scroll to a section by id (strip leading '#' if present).
export function scrollToSection(anchor: string): void {
  const id = anchor.replace(/^#/, '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
