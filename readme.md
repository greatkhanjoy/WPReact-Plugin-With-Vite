## WordPress Plugin With React, TailwindCSS and Vite

This WordPress QuickStart plugin integrates React, Vite, and Tailwind CSS to provide a modern and efficient development environment for creating custom features and functionality for your WordPress website. By leveraging the power of React, Vite, and Tailwind CSS, this plugin allows you to build interactive user interfaces, handle complex data workflows, and style your components with ease.

Features:

Seamless integration of React with WordPress, enabling the creation of dynamic and interactive interfaces.

Utilizes Vite as the build tool, providing fast development and hot module reloading for an efficient development workflow.

Integrates Tailwind CSS, a highly customizable CSS framework, for rapid and responsive styling of your components.

Supports modern JavaScript features and syntax, allowing you to write clean and maintainable code.
Provides a structured plugin architecture, making it easy to extend and customize the functionality to meet your specific requirements.

Compatible with the latest version of WordPress and follows best practices for plugin development.

# Installation
```bash
npm install
```
```
npm run dev
```

### For production
```
npm run build
```
in wp-vite.php file replace the loadAssets funtion with this :
```php
function loadAssets()
    {
        wp_enqueue_script('wp-vite-react-core', plugins_url('dist/assets/[your-js-filename].js', __FILE__), [], time(), true);
        wp_enqueue_style('wp-vite-react-style', plugins_url('dist/assets/[your-css-filename].css', __FILE__), [], time(), 'all');

    }
```

#### replace the [your-js-filename].js with the js file which is inside  dist/assets/

#### and replace the [your-css-filename] with css file which is inside dist/assets/

#### And uncomment the enqueue_style on lines 32 and 76

#### use app.jsx file for Dashboard and Frontend.jsx for Frontend

# don't forget to leave a star

### Contributing:
Contributions are welcome! If you find any issues or have suggestions for improvements, please submit an issue or pull request on the GitHub repository. Together, we can make this plugin even better!
## Thank you 