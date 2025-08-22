import type { Lesson } from '@types/index';
export default function LessonCard({ lesson, onStart }: {
    lesson: Lesson;
    onStart: (l: Lesson) => void;
}): import("react").JSX.Element;
