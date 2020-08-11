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
 * text domain
 */
const textDomain = 'loos-restricted-block';

/**
 * Block
 */
registerBlockType( 'loos-rb/restricted-block', {
	title: __( 'Restricted Block', textDomain ),
	icon: {
		foreground: '#fac44f',
		src: icon,
	},
	keywords: [ 'restricted', 'user', 'role' ],
	category: 'loos-rb-category',
	supports: {
		className: false,
		html: false,
	},
	attributes: {
		administrator: {
			type: 'boolean',
			default: true,
		},
		editor: {
			type: 'boolean',
			default: true,
		},
		author: {
			type: 'boolean',
			default: true,
		},
		contributor: {
			type: 'boolean',
			default: true,
		},
		subscriber: {
			type: 'boolean',
			default: true,
		},
		nonLoggedin: {
			type: 'boolean',
			default: false,
		},
		userID: {
			type: 'number',
			default: 0,
		},
	},

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
