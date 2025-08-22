import type { Lesson } from '@types/index';
export default function LessonGrid({ onStart }: {
    onStart: (l: Lesson) => void;
}): import("react").JSX.Element;
