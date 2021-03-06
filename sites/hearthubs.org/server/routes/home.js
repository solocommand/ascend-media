const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('../graphql/fragments/website-section-page');

const home = require('../templates/index');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    // Replace with ID resolver or website domain something
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
