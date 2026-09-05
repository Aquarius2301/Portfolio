// Maps each skill label to a react-icons icon.
// Used by the Skills section to render an icon next to every tag.
import {
  SiSharp,
  SiDotnet,
  SiReact,
  SiAntdesign,
  SiGit,
  SiPostman,
  SiSwagger,
  SiTypescript,
  SiGooglegemini,
  SiJsonwebtokens,
  SiGraphql,
  SiGoogle,
  SiRedis,
} from 'react-icons/si';
import {
  FaLanguage,
  FaDatabase,
  FaPlug,
  FaCode,
  FaGraduationCap,
  FaLayerGroup,
  FaBarsStaggered,
  FaBolt,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';

const skillIconMap: Record<string, IconType> = {
  // Languages
  'English (Professional Working)': FaLanguage,
  'Vietnamese (Native)': FaLanguage,
  // Backend
  'C#': SiSharp,
  'ASP.NET Core': SiDotnet,
  'Entity Framework Core': SiDotnet,
  'EF Core': SiDotnet,
  'RESTful API': FaPlug,
  JWT: SiJsonwebtokens,
  'SQL Server': FaDatabase,
  'Clean Architecture': FaLayerGroup,
  CQRS: FaBarsStaggered,
  OAuth: SiGoogle,
  // Frontend
  'React (TypeScript)': SiReact,
  'React': SiReact,
  TypeScript: SiTypescript,
  'TanStack Query': FaCode,
  'Ant Design (AntD)': SiAntdesign,
  'Ant Design': SiAntdesign,
  'Gemini API': SiGooglegemini,
  'Google OAuth': SiGoogle,
  Redis: SiRedis,
  Zustand: FaBolt,
  // i18next state / localization
  i18next: FaLanguage,
  // Tools
  Git: SiGit,
  Postman: SiPostman,
  'VS Code': FaCode,
  Swagger: SiSwagger,
  // Certifications
  'Google Certified Gemini Educator': SiGooglegemini,
  'Bachelor of Software Engineering': FaGraduationCap,
};

export function getSkillIcon(label: string): IconType {
  return skillIconMap[label] ?? FaCode;
}

// Re-export to keep a single import surface for icons used elsewhere.
export { SiTypescript, SiGraphql };
