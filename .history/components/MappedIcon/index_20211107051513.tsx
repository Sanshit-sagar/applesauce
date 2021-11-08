import { Fragment } from 'react'


const Heading1Icon = () => <i className="ri-h-1"></i>
const Heading2Icon = () => <i className="ri-h-2"></i>
const BoldIcon = () => <i className="ri-bold"></i>
const ItalicIcon = () => <i className="ri-italic"></i>
const UnderlineIcon = () => <i className="ri-underline"></i>
const StrikethroughIcon = () => <i className="ri-strikethrough"></i>
const HighlightIcon = () => <i className="ri-mark-pen-line"></i>
const CodeBlock = () => <i className="ri-code-view"></i>
const CodeIcon = () => <i className="ri-code-box-line"></i>
const ParagraphIcon = () => <i className="ri-paragraph"></i>
const SeparatorIcon = () => <i className="ri-separator"></i>
const UnorderedListIcon = () => <i className="ri-list-unordered"></i>
const TodoListIcon = () => <i className="ri-list-check-2"></i>
const OrderedListIcon = () => <i className="ri-list-ordered"></i>
const BlockquoteIcon = () => <i className="ri-double-quotes-l"></i>
const TextWrapIcon = () => <i className="ri-text-wrap"></i>
const ClearFormattingIcon = () => <i className="ri-format-clear"></i>
const UndoIcon = () => <i className="ri-arrow-go-back-line"></i>
const RedoIcon = () => <i className="ri-arrow-go-forward-line"></i>

const iconMapping = {
    'h-1': <Heading1Icon />,
    'h-2': <Heading2Icon />,
    'bold': <BoldIcon />,
    'italic': <ItalicIcon />,
    'underline': <UnderlineIcon />,
    'strikethrough': <StrikethroughIcon />,
    'mark-pen-line': <HighlightIcon />,
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
}

const IconFromString = ({ iconName }: { iconName: string; }) => (
    <Fragment>
        {iconMapping[iconName]}
    </Fragment>
)
