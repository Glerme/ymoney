import Realm from 'realm';

import {OutputSchema} from './schemas/OutputSchema';

export const getRealm = async () =>
  await Realm.open({
    path: 'salary',
    schema: [OutputSchema],
    deleteRealmIfMigrationNeeded: true,
  });
