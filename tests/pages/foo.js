import {
  create,
  visitable,
  isVisible
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/foo'),
  hasSpan: isVisible('span')
});
