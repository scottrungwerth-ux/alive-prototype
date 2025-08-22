import type { Lesson } from '@types/index';
export default function ChatInterface({ lesson, onClose }: {
    lesson: Lesson | null;
    onClose: () => void;
}): import("react").JSX.Element;
