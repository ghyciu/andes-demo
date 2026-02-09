export const Section = 'BODYTEXT_SECTION';
export const Subsection = 'BODYTEXT_SUBSECTION';
export const Paragraph = 'BODYTEXT_PARAGRAPH';

type BodyTextType = typeof Section | typeof Subsection | typeof Paragraph;

interface BodyText {
  type: BodyTextType;
  text: string;
}

export default BodyText;
