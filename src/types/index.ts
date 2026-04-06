export interface TNavLink {
  id?: string | number;
  href: string;
  label: string;
}

export interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export interface CurriculumLessonProps {
  id: string;
  title: string;
  duration: string;
  hasPreview: boolean;
}

export interface CurriculumModuleProps {
  id: string;
  title: string;
  duration: string;
  lessons: CurriculumLessonProps[];
}
