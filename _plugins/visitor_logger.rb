# frozen_string_literal: true

# Inject the visit beacon without overriding al-folio's gem-owned layouts.
Jekyll::Hooks.register :pages, :post_render do |page|
  config = page.site.config.fetch("visitor_logging", {})
  endpoint = config["endpoint"].to_s.strip
  next if endpoint.empty? || !page.output_ext.eql?(".html")

  script = <<~HTML
    <script defer src="#{page.site.baseurl}/assets/js/visitor-logger.js"
            data-visitor-endpoint="#{endpoint}"></script>
  HTML

  page.output = page.output.sub(%r{</body>}i, "#{script}</body>")
end
