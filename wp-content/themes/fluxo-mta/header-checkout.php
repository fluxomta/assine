<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>

<body>

<div id="checkout" class="bg-gradient-to-t from-primary-500 to-primary-400 site">
    <nav class="w-full bg-primary-500">
        <div class="container relative flex items-center justify-center py-4 mx-auto">
            <img src="<?php echo get_stylesheet_directory_uri();?>/src/assets/images/fluxomta.webp" class="h-8">
        </div>
    </nav>
    

    <div id="content" class="site-content">
