import { Fragment } from 'react'

const Heading1Icon = () => <i className="ri-h-1"></i>
const Heading2Icon = () => <i className="ri-h-2"></i>
const Heading3Icon = () => <i className="ri-h-3"></i>

const BoldIcon = () => <i className="ri-bold"></i>
const ItalicIcon = () => <i className="ri-italic"></i>
const UnderlineIcon = () => <i className="ri-underline"></i>
const SubscriptIcon = () => <i className="ri-subscript"></i>
const SuperscriptIcon = () => <i className="ri-superscript"></i>
const StrikethroughIcon = () => <i className="ri-strikethrough"></i>

const HighlightIcon = () => <i className="ri-mark-pen-line"></i>
const CodeBlock = () => <i className="ri-code-view"></i>
const CodeIcon = () => <i className="ri-code-box-line"></i>
const ParagraphIcon = () => <i className="ri-paragraph"></i>
const SeparatorIcon = () => <i className="ri-separator"></i>
const ImageIcon = () => <i className="ri-image-line"></i>

const TodoListIcon = () => <i className="ri-list-check-2"></i>
const OrderedListIcon = () => <i className="ri-list-ordered"></i>
const UnorderedListIcon = () => <i className="ri-list-unordered"></i>

const LinkIcon = () => <i className="ri-link"></i>
const UnlinkIcon = () => <i className="ri-link-unlink-m"></i>
const BlockquoteIcon = () => <i className="ri-double-quotes-l"></i>
const TextWrapIcon = () => <i className="ri-text-wrap"></i>
const ClearFormattingIcon = () => <i className="ri-format-clear"></i>
const UndoIcon = () => <i className="ri-arrow-go-back-line"></i>
const RedoIcon = () => <i className="ri-arrow-go-forward-line"></i>

const AlignLeftIcon = () => <i className="ri-align-left"></i>
const AlignRightIcon = () => <i className="ri-align-right"></i>
const AlignCenterIcon = () => <i className="ri-align-center"></i>
const AlignJustifyIcon = () => <i className="ri-align-justify"></i>

const ColorIcon = () => <i className="ri-palette-line"></i>
const UncolorIcon = () => <i className="ri-eraser-fill"></i>


const iconMapping = {
    'h-1': <Heading1Icon />,
    'h-2': <Heading2Icon />,
    'h-3': <Heading3Icon />,
    'bold': <BoldIcon />,
    'italic': <ItalicIcon />,
    'underline': <UnderlineIcon />,
    'subscript': <SubscriptIcon />,
    'superscript': <SuperscriptIcon />,
    'strikethrough': <StrikethroughIcon />,
    'mark-pen-line': <HighlightIcon />,
    'link': <LinkIcon />,
    'unlink': <UnlinkIcon />,
    'code-view': <CodeBlock />,
    'code-box-line': <CodeIcon />,
    'paragraph': <ParagraphIcon />,
    'separator': <SeparatorIcon />,
    'list-unordered': <UnorderedListIcon />,
    'list-check-2': <TodoListIcon />,
    'list-ordered': <OrderedListIcon />,
    'double-quotes-l': <BlockquoteIcon />,
    'text-wrap': <TextWrapIcon />,
    'format-clear': <ClearFormattingIcon />,
    'arrow-go-back-line': <UndoIcon />,
    'arrow-go-forward-line': <RedoIcon />,
    'align-left': <AlignLeftIcon />,
    'align-right': <AlignRightIcon />,
    'align-center': <AlignCenterIcon />,
    'align-justify': <AlignJustifyIcon />,
    'color': <ColorIcon />,
    'uncolor': <UncolorIcon />,
    'image-line': <ImageIcon /> 
}

interface MappedIconProps {
    iconName: string;
}

export const MappedIcon = ({ iconName }: MappedIconProps) => (
    <Fragment>
        {iconMapping[iconName]}
    </Fragment>
)
