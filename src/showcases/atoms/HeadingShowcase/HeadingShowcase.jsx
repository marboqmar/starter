import './HeadingShowcase.css';
import { Heading } from '../../../components/atoms/Heading/Heading';

export const HeadingShowcase = () => {
  return (
    <div className="atom-section">
      <Heading>Headings</Heading>
      <div className="heading-examples stack gap-sm">
        <Heading level={1}>The quick brown fox jumps over the lazy dog</Heading>
        <Heading>The quick brown fox jumps over the lazy dog</Heading>
        <Heading level={3}>The quick brown fox jumps over the lazy dog</Heading>
        <Heading level={4}>The quick brown fox jumps over the lazy dog</Heading>
        <Heading level={5}>The quick brown fox jumps over the lazy dog</Heading>
        <Heading level={6}>The quick brown fox jumps over the lazy dog</Heading>
      </div>
    </div>
  );
};
