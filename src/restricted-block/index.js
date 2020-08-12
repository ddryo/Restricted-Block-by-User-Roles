/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	InspectorControls,
	InnerBlocks,
	// __experimentalBlock as Block,
} from '@wordpress/block-editor';

/**
 * import Other modules
 */
import icon from './_icon';
// import classnames from 'classnames';
import RestrictedBlockPanels from './_panels';

/**
 * import Style
 */
import './inline.scss';

/**
 * metadata
 */
import metadata from './block.json';

/**
 * Block
 */
registerBlockType( 'loos-rb/restricted-block', {
	title: __( 'Restricted Block', 'loos-restricted-block' ),
	icon: {
		foreground: '#fac44f',
		src: icon,
	},
	keywords: metadata.keywords,
	category: metadata.category,
	supports: metadata.supports,
	attributes: metadata.attributes,
	edit: ( props ) => {
		// const { className } = props;
		// const blockClass = classnames( 'loos-block-restricted', className );

		return (
			<>
				<InspectorControls>
					<RestrictedBlockPanels { ...props } />
				</InspectorControls>

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
