import {redirect} from 'react-router';

import type {Route} from './+types/($locale).account.$';

// fallback wild card for all unauthenticated routes in account section
export async function loader({params}: Route.LoaderArgs) {
  const locale = params.locale;
  return redirect(locale ? `/${locale}/account` : '/account');
}
