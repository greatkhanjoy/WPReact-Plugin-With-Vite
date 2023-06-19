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


#### use app.jsx file for Dashboard and Frontend.jsx for Frontend

# don't forget to leave a star
thank you 