import '../css/pages/Homepage.css';
import { Heading } from '../components/atoms/Heading/Heading';
import { Paragraph } from '../components/atoms/Paragraph/Paragraph';

const directoryStructure = `src/
├── components/         # Component library (atomic design)
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── constants           # Non-changing variables
├── contexts            # App contexts
├── css/
│   ├── global/         # Global styles
│   ├── pages/          # Page-specific styles
│   └── style.css       # Main stylesheet entry point
├── hooks               # Custom hooks
├── pages/              # Page components
├── showcases           # Live showcases of the available components
├── utils               # Helper utilities
├── App.jsx             # Main app component
├── routes.jsx          # React Router configuration
└── main.jsx            # Application entry point`;

export const Homepage = () => {
  return (
    <div className="homepage container">
      <Heading level={1}>Starter project</Heading>
      <Paragraph>
        This is a starter template designed to serve as a solid foundation for web projects. It
        provides a library of <strong>essential, accessible, easily customizable</strong> components
        while maintaining a minimal dependency footprint. It also provides live showcases of these
        components.
        <br />
        The goal is to provide all the core building blocks needed for modern web development
        without the overhead of unnecessary third-party packages.
      </Paragraph>
      <Heading level={2}>Tech stack</Heading>
      <Heading level={2}>Project structure</Heading>
      <Paragraph>The structure of this project is as follows:</Paragraph>

      <pre>
        <code>{directoryStructure}</code>
      </pre>
    </div>
  );
};
