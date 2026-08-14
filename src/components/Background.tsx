import './Background.css';

type BackgroundProps = {
  mode: 'light' | 'dark';
};

export default function Background({ mode }: BackgroundProps) {
  return <div className={`bg-layer ${mode === 'dark' ? 'bg-dark' : 'bg-light'}`} aria-hidden />;
}
