/**
 * import @wordpress
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';

/**
 * import Other modules
 */
import classnames from 'classnames';
import RestrictedBlockPanels from './_panels';

/**
 * import Style
 */
import './style.scss';

/**
 * text domain
 */
const textDomain = 'loos-restricted-block';

/**
 * Register Block
 */
registerBlockType( 'loos-rb/restricted-block', {
	title: __( 'Restricted Block', textDomain ),
	icon: 'hidden',
	keywords: [ 'restricted', 'user', 'role' ],
	category: 'loos-rb-category',
	// supports: { className: false },

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
		userID: {
			type: 'number',
			default: 0,
		},
	},

	edit: ( props ) => {
		const { className } = props;
		const blockClass = classnames( 'loos-block-restricted', className );

		return (
			<>
				<InspectorControls>
					<RestrictedBlockPanels { ...props } />
				</InspectorControls>

				<div className={ blockClass }>
					<InnerBlocks />
				</div>
			</>
		);
	},

	save: () => {
		return <InnerBlocks.Content />;
	},
} );
