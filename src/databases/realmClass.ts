import uuid from 'react-native-uuid';
import {OutputSchema} from './schemas/OutputSchema';

// se utilizar a class - no App usar esse useEffect
// useEffect(() => {
//   (async function () {
//     await RealmManager.init();
//   })();
// }, []);

//Modo com Class
export class RealmManager {
  static _instance: any;

  static async init() {
    if (RealmManager._instance) {
      return RealmManager._instance;
    }

    RealmManager._instance = await Realm.open({
      schema: [OutputSchema],
      path: 'realm-test',
    });

    return RealmManager._instance;
  }

  static get sharedInstance() {
    return RealmManager._instance;
  }
}

export async function writeTask(task = 'Ir ao mercado') {
  const realm = RealmManager.sharedInstance;
  try {
    let writeTaskOnRealm = null;
    realm.write(
      () =>
        (writeTaskOnRealm = realm.create('Task', {
          _id: uuid.v4(),
          name: task,
          status: 'open',
        })),
    );
    console.log('TASK CRIADA', writeTaskOnRealm);

    realm.close();
  } catch (error) {
    console.error(error);
  }
}
