# -*- encoding: utf-8 -*-
# stub: omniauth-linkedin-oauth2 1.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "omniauth-linkedin-oauth2".freeze
  s.version = "1.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["D\u00E9cio Ferreira".freeze]
  s.date = "2019-01-09"
  s.description = "A LinkedIn OAuth2 strategy for OmniAuth.".freeze
  s.email = ["decio.ferreira@decioferreira.com".freeze]
  s.homepage = "https://github.com/decioferreira/omniauth-linkedin-oauth2".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.7.10".freeze
  s.summary = "A LinkedIn OAuth2 strategy for OmniAuth.".freeze

  s.installed_by_version = "2.7.10" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<omniauth-oauth2>.freeze, [">= 0"])
      s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
      s.add_development_dependency(%q<rake>.freeze, [">= 0"])
      s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_development_dependency(%q<simplecov>.freeze, [">= 0"])
    else
      s.add_dependency(%q<omniauth-oauth2>.freeze, [">= 0"])
      s.add_dependency(%q<bundler>.freeze, [">= 0"])
      s.add_dependency(%q<rake>.freeze, [">= 0"])
      s.add_dependency(%q<rspec>.freeze, [">= 0"])
      s.add_dependency(%q<simplecov>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<omniauth-oauth2>.freeze, [">= 0"])
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_dependency(%q<simplecov>.freeze, [">= 0"])
  end
end
