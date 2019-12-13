<?php
if( !defined( 'ABSPATH' ) ) exit;

if ( function_exists('register_block_type') ) {
    register_block_type(
        'loos/restricted',
        [
            'attributes' => [
                //JS側と合わせないと「ブロック読み込みエラー: 無効なパラメーター: attributes」が出たりする
                'administrator' => [
                    'type'    => 'boolean',
                    'default' => true,
                ],
                'editor' => [
                    'type'    => 'boolean',
                    'default' => true,
                ],
                'author' => [
                    'type'    => 'boolean',
                    'default' => true,
                ],
                'contributor' => [
                    'type'    => 'boolean',
                    'default' => true,
                ],
                'subscriber' => [
                    'type'    => 'boolean',
                    'default' => true,
                ],
                'userID' => [
                    'type'    => 'number',
                    'default' => 0,
                ],
            ],
            'render_callback' => function( $attributes, $content ) {


                if ( ! IS_LOGIN ) return '';
                $current_user = wp_get_current_user();
                // $userID = get_current_user_id();

                $isShow = false;
                foreach ( [
                    'administrator',
                    'editor',
                    'author',
                    'contributor',
                    'subscriber'
                ] as $role ) {
                    if ( $attributes[ $role ] && current_user_can( $role ) ) {
                        $isShow = true;
                    }
                }

                if ($isShow) return $content;
                return '';

            },
        ]
    );
}
