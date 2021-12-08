import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('App', () => {
  test('should render the App component', async () => {
    const { getByText } = await render(AppComponent);
    expect(getByText('Welcome'));
  });
});
