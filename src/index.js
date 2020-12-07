/**
 * @WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { memo } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import {
	InspectorControls,
	InnerBlocks,
	// useBlockProps,
	// __experimentalUseInnerBlocksProps as useInnerBlocksProps,
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl, CheckboxControl } from '@wordpress/components';

/**
 * @Inner dependencies
 */
import icon from './icon';
// import classnames from 'classnames';

/**
 * import Style
 */
import './editor.scss';

/**
 * metadata
 */
import metadata from './block.json';
const { name, category, keywords, supports } = metadata;

/**
 * const s
 */
const MySidebar = memo( ( { attributes, setAttributes } ) => {
	const { administrator, editor, author, contributor, subscriber, nonLoggedin } = attributes;

	return (
		<InspectorControls>
			<PanelBody
				title={ __( 'Display restrictions', 'loos-restricted-block' ) }
				initialOpen={ true }
			>
				<div className='u-mb-10'>
					{ __( 'Who can see this content', 'loos-restricted-block' ) }
				</div>
				<ToggleControl
					label={ __( 'Non-logged-in User', 'loos-restricted-block' ) }
					checked={ nonLoggedin }
					onChange={ ( val ) => setAttributes( { nonLoggedin: val } ) }
				/>
				<div className={ nonLoggedin ? 'loos-rb-controls -off' : 'loos-rb-controls' }>
					<CheckboxControl
						label={ __( 'administrator', 'loos-restricted-block' ) }
						checked={ administrator }
						onChange={ ( val ) => setAttributes( { administrator: val } ) }
					/>
					<CheckboxControl
						label={ __( 'editor', 'loos-restricted-block' ) }
						checked={ editor }
						onChange={ ( val ) => setAttributes( { editor: val } ) }
					/>
					<CheckboxControl
						label={ __( 'author', 'loos-restricted-block' ) }
						checked={ author }
						onChange={ ( val ) => setAttributes( { author: val } ) }
					/>
					<CheckboxControl
						label={ __( 'contributor', 'loos-restricted-block' ) }
						checked={ contributor }
						onChange={ ( val ) => setAttributes( { contributor: val } ) }
					/>
					<CheckboxControl
						label={ __( 'subscriber', 'loos-restricted-block' ) }
						checked={ subscriber }
						onChange={ ( val ) => setAttributes( { subscriber: val } ) }
					/>
				</div>
			</PanelBody>
		</InspectorControls>
	);
} );

/**
 * Block
 */
registerBlockType( name, {
	title: __( 'Restricted Block', 'loos-restricted-block' ),
	icon: {
		foreground: '#ffae32',
		src: icon,
	},
	keywords,
	category,
	supports,
	attributes: metadata.attributes,
	edit: ( { attributes, setAttributes } ) => {
		return (
			<>
				<MySidebar { ...{ attributes, setAttributes } } />
				{ /* <div className={blockClass} > */ }
				<InnerBlocks />
				{ /* </div> */ }
			</>
		);
	},

	save: () => {
		return <InnerBlocks.Content />;
	},
} );
