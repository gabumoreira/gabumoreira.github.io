require 'rack/contrib/try_static'

use Rack::TryStatic,
:root => "\_site",
:urls => %w[/],
:try => ['.html', 'index.html', '/index.html']
