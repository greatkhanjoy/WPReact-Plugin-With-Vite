<?php

/**
 * Plugin Name: B2B Woocommerce 
 * Description: B2B Woocommerce 
 * Author URI:  https://greatkhanjoy.browter.com
 * Plugin URI:  https://browter.com/b2b-woocommerce
 * Version:     1.0.0
 * Author:      Greatkhanjoy
 * Text Domain: b2b-woocommerce
 * Domain Path: /i18n
 */

require __DIR__ . '/vendor/autoload.php';

use Automattic\WooCommerce\Client;

class B2BWoocommerce
{
    private $consumer_key = 'ck_e048bbc305db5bdd742b62a82535df4f5d2af612';
    private $consumer_secret = 'cs_9e6ec810cf9cdb513e449a2c412e5a997e788b52';
    private $woocommerce;


    function __construct()
    {
        $this->woocommerce = new Client(
            'https://dci.dev/',
            $this->consumer_key,
            $this->consumer_secret,
            [
                'version' => 'wc/v3'
            ]
        );

        // add_action('init',[$this,'initialize']);
        add_action('admin_enqueue_scripts', [$this, 'loadAssets']);
        add_action('wp_enqueue_scripts', [$this, 'loadAssets']);
        add_action('admin_menu', [$this, 'adminMenu']);
        add_filter('script_loader_tag', [$this, 'loadScriptAsModule'], 10, 3);
        add_filter('script_loader_tag', [$this, 'loadScriptAsModuleTwo'], 10, 3);
        add_shortcode('b2b_woocommerce', [$this, 'b2b_woocommerce_render_shortcode']);
        add_filter('woocommerce_checkout_fields', [$this, 'hide_checkout_fields']);

        // Add REST API endpoint
        add_action('rest_api_init', [$this, 'register_rest_routes']);
    }

    public function expose_nonce()
    {
        $nonce = wp_create_nonce('wc_store_api');
        return $nonce;
    }




    // Register REST API routes
    public function register_rest_routes()
    {
        register_rest_route('b2b-woocommerce/v1', '/add_to_cart', [
            'methods' => 'POST',
            'callback' => [$this, 'addToCart'],
            'permission_callback' => [$this, 'permissions'],
        ]);
        register_rest_route('b2b-woocommerce/v1', '/get-nonce', [
            'methods' => 'GET',
            'callback' => [$this, 'expose_nonce'],
            'permission_callback' => [$this, 'permissions'],
        ]);
    }

    public function permissions()
    {
        return true;
    }

    // Custom REST API endpoint callback
    public function addToCart($request)
    {
        $params = $request->get_params();
        $cart = WC()->cart;
        $cart->add_to_cart(193, 2);
        return rest_ensure_response('Success');
    }

    // function shortocode render()
    public function b2b_woocommerce_render_shortcode()
    {
        wp_enqueue_script('b2b-woocommerce-core');
        wp_enqueue_style('b2b-woocommerce-script');
        wp_enqueue_style('b2b-woocommerce-style');

        // include_once(plugin_dir_path(__FILE__) . "/inc/frontend.php");
        $nonce = wp_create_nonce('wp_rest');
        $wc_nonce = wp_create_nonce('wc_store_api');

        wp_localize_script('browter-woo-cart-core', 'browterwoocart', [
            'nonce' => $nonce,
            'wc_nonce' => $wc_nonce,
        ]);

        $data = [
            'nonce' => $nonce,
            'wc_nonce' => $wc_nonce,
        ];

        return '<div id="b2b-frontend"><pre id="b2b-frontend-data" style="display: none;">' . wp_json_encode($data) . '</pre></div>';
    }

    public function hide_checkout_fields($fields)
    {
        // Hide the name and address fields
        unset($fields['billing']['billing_first_name']);
        unset($fields['billing']['billing_last_name']);
        unset($fields['billing']['billing_address_1']);
        unset($fields['billing']['billing_address_2']);
        unset($fields['billing']['billing_city']);
        unset($fields['billing']['billing_state']);
        unset($fields['billing']['billing_postcode']);
        unset($fields['billing']['billing_country']);
        unset($fields['billing']['billing_company']);
        unset($fields['billing']['billing_phone']);
        unset($fields['billing']['billing_email']);
        unset($fields['billing']['order_comments']);
        unset($fields['billing']['order_notes']);

        return $fields;
    }


    // function load script as module
    function loadScriptAsModule($tag, $handle, $src)
    {
        if ('b2b-woocommerce-core' !== $handle) {
            return $tag;
        }
        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
        return $tag;
    }

    // function load script as module
    function loadScriptAsModuleTwo($tag, $handle, $src)
    {
        if ('b2b-woocommerce-script' !== $handle) {
            return $tag;
        }
        $tag = '
        <script type="module" crossorigin >
        import RefreshRuntime from "' . esc_url($src) . '";
        RefreshRuntime.injectIntoGlobalHook(window);
        window.$RefreshReg$ = () => {};
        window.$RefreshSig$ = () => (type) => type;
        window.__vite_plugin_react_preamble_installed__ = true;
        </script>';
        return $tag;
    }


    // Add admin menu
    function adminMenu()
    {
        add_menu_page('B2B Woocommerce', 'B2B Woocommerce', 'manage_options', 'admin/admin.php', [$this, 'loadAdminPage'], 'dashicons-vault', 6);
    }

    // Admin page render
    function loadAdminPage()
    {
        wp_enqueue_script('b2b-woocommerce-core');
        wp_enqueue_script('b2b-woocommerce-script');
        // wp_enqueue_style('b2b-woocommerce-style');

        $pluginUrl = plugin_dir_url(__FILE__);
        wp_localize_script('b2b-woocommerce-core', 'b2b_woocommerce', [
            'url' => $pluginUrl,
            'nonce' => wp_create_nonce('wp_rest'),
        ]);

        include_once(plugin_dir_path(__FILE__) . "/inc/admin.php");
    }

    // Load assets  for admin and frontend
    function loadAssets()
    {
        wp_register_script('b2b-woocommerce-core', plugins_url('dist/assets/index.js', __FILE__), [], time(), true);
        wp_register_style('b2b-woocommerce-style', plugins_url('dist/assets/index.css', __FILE__), [], time(), 'all');

        // wp_register_script('b2b-woocommerce-core', 'http://localhost:5173/src/main.jsx', ['b2b-woocommerce-script'], time(), true);


        // wp_register_script(
        //     'b2b-woocommerce-script',
        //     'http://localhost:5173/@react-refresh',
        //     [],
        //     null,
        //     true
        // );
    }
}

new B2BWoocommerce();
