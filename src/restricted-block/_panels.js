/**
 * import @wordpress
 */
import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	CheckboxControl,
} from '@wordpress/components';

/**
 * text domain
 */
const textDomain = 'loos-restricted-block';

/**
 * Custom Component
 */
export default function( props ) {
	const { attributes, setAttributes } = props;
	const { administrator, editor, author, contributor, subscriber } = attributes;

	return (
		<>
			<PanelBody title={ __( 'User Roles', textDomain ) } initialOpen={ true }>
				<div className="u-mb-10">{ __( 'Roles to view this content', textDomain ) }</div>
				<CheckboxControl
					label={ __( 'administrator', textDomain ) }
					checked={ administrator }
					onChange={ ( val ) => setAttributes( { administrator: val } ) }
				/>
				<CheckboxControl
					label={ __( 'editor', textDomain ) }
					checked={ editor }
					onChange={ ( val ) => setAttributes( { editor: val } ) }
				/>
				<CheckboxControl
					label={ __( 'author', textDomain ) }
					checked={ author }
					onChange={ ( val ) => setAttributes( { author: val } ) }
				/>
				<CheckboxControl
					label={ __( 'contributor', textDomain ) }
					checked={ contributor }
					onChange={ ( val ) => setAttributes( { contributor: val } ) }
				/>
				<CheckboxControl
					label={ __( 'subscriber', textDomain ) }
					checked={ subscriber }
					onChange={ ( val ) => setAttributes( { subscriber: val } ) }
				/>
			</PanelBody>
		</>
	);
}
