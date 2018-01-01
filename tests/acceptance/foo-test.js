import { test } from 'qunit';
import moduleForAcceptance from 'ecpo-test/tests/helpers/module-for-acceptance';
import page from '../pages/foo';

moduleForAcceptance('Acceptance | foo');

test('visiting /foo', function(assert) {
  page.visit();

  andThen(function() {
    assert.ok(page.hasSpan);
  });
});
